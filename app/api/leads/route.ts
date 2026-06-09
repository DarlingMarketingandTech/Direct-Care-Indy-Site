import { Resend } from 'resend';
import { NextResponse } from 'next/server';

interface LeadData {
  name: string;
  email: string;
  phone: string;
  persona?: string;
  healthGoal?: string;
  goal?: string; // Alias for healthGoal
  source?: string;
  hipaaConsent?: boolean;
  // Business/Employer fields
  businessName?: string;
  businessType?: string;
  employeeCount?: string;
  serviceInterest?: string;
  savings?: string | number;
  // DPC Fit Quiz fields
  quizResult?: string;
  fitScore?: number;
  readinessScore?: number;
  painPoints?: string;
  recommendedCta?: string;
  sourcePage?: string;
}

function buildLeadHtml(body: LeadData): string {
  const {
    name,
    email,
    phone,
    businessName,
    employeeCount,
    goal,
    healthGoal,
    persona,
    savings,
  } = body;

  return `
    <h1>New Lead from Direct Care Indy</h1>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    <hr />
    ${businessName ? `
      <h3>Employer Details</h3>
      <p><strong>Business:</strong> ${businessName}</p>
      <p><strong>Staff Size:</strong> ${employeeCount || 'Not specified'}</p>
      <p><strong>Est. Annual Savings:</strong> $${savings || 'Check Calculator'}</p>
    ` : `
      <h3>Patient Details</h3>
      <p><strong>Health Goal:</strong> ${goal || healthGoal || 'General Interest'}</p>
      <p><strong>Persona:</strong> ${persona || 'Individual'}</p>
    `}
    <hr />
    ${body.quizResult ? `
      <h3>Quiz Result</h3>
      <p><strong>Result:</strong> ${body.quizResult}</p>
      <p><strong>Fit Score:</strong> ${body.fitScore ?? "—"}</p>
      <p><strong>Readiness Score:</strong> ${body.readinessScore ?? "—"}</p>
      <p><strong>Pain Points:</strong> ${body.painPoints || "—"}</p>
      <p><strong>Recommended CTA:</strong> ${body.recommendedCta || "—"}</p>
      <p><strong>Source Page:</strong> ${body.sourcePage || "—"}</p>
    ` : ""}
    <p><small>Source: ${body.source || "Direct Care Indy website"}</small></p>
  `;
}

export async function POST(req: Request) {
  try {
    const body: LeadData = await req.json();
    const { name, email, phone, businessName, employeeCount, goal, healthGoal, persona, savings } = body;

    const isQuizLead = body.source === 'DPC Fit Quiz';

    // Validate required fields (phone optional for quiz leads)
    if (!name || !email || (!isQuizLead && !phone)) {
      return NextResponse.json(
        { error: isQuizLead
            ? 'Missing required fields: name and email are required'
            : 'Missing required fields: name, email, and phone are required' },
        { status: 400 }
      );
    }

    const subject = businessName
      ? `🏢 Employer Lead: ${businessName} (${employeeCount || 'Unknown'} staff)`
      : `🩺 New Patient: ${name} (${goal || healthGoal || persona || 'General Interest'})`;

    const resendApiKey = process.env.RESEND_API_KEY?.trim();

    if (!resendApiKey) {
      console.warn('Lead captured without notification delivery configured', {
        name,
        email,
        phone,
        businessName,
        source: body.source,
      });

      return NextResponse.json({
        success: true,
        message: 'Lead received (notification delivery not configured)',
        leadId: `lead_${Date.now()}`,
        notificationSent: false,
      });
    }

    const resend = new Resend(resendApiKey);
    const { data, error } = await resend.emails.send({
      from: 'Direct Care Indy <onboarding@resend.dev>', // Required for unverified domains (sandbox)
      to: [process.env.NOTIFICATION_EMAIL || 'hoosierdarling@gmail.com'],
      subject,
      html: buildLeadHtml(body),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send notification', details: error }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: 'Lead submitted successfully',
      leadId: `lead_${Date.now()}`,
      emailId: data?.id,
      notificationSent: true,
    });

  } catch (err) {
    console.error('Lead submission error:', err);
    return NextResponse.json(
      { error: 'Internal Server Error', details: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
