import { Resend } from 'resend';
import { NextResponse } from 'next/server';

interface LeadData {
  name: string;
  email: string;
  phone?: string;
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
  audience?: string;
  resource?: string;
  householdSize?: string;
  childrenAges12Plus?: string;
  biggestFamilyCareConcern?: string;
  currentInsuranceSituation?: string;
  preferredContactMethod?: string;
  // Individuals resource
  ageRange?: string;
  insuranceStatus?: string;
  biggestCareFrustration?: string;
  // Employers resource
  company?: string;
  role?: string;
  employeeCountBand?: string;
  currentBenefitsSituation?: string;
  renewalMonth?: string;
  biggestWorkforceHealthcareConcern?: string;
  // Brokers resource
  firm?: string;
  clientSizeBand?: string;
  primaryClientIndustries?: string;
  fundingModelFocus?: string;
  wantsCobrandedMaterials?: string;
}

const AUDIENCE_RESOURCE_IDS = new Set([
  "family_care_roadmap",
  "membership_pricing_guide",
  "employer_dpc_overview",
  "broker_toolkit",
]);

function isOptionalPhoneLead(body: LeadData): boolean {
  return body.source === "DPC Fit Quiz" || (body.resource ? AUDIENCE_RESOURCE_IDS.has(body.resource) : false);
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
    audience,
    resource,
    householdSize,
    childrenAges12Plus,
    biggestFamilyCareConcern,
    currentInsuranceSituation,
    preferredContactMethod,
    ageRange,
    insuranceStatus,
    biggestCareFrustration,
    company,
    role,
    employeeCountBand,
    currentBenefitsSituation,
    renewalMonth,
    biggestWorkforceHealthcareConcern,
    firm,
    clientSizeBand,
    primaryClientIndustries,
    fundingModelFocus,
    wantsCobrandedMaterials,
  } = body;

  const resourceSection = (() => {
    switch (resource) {
      case "family_care_roadmap":
        return `
      <hr />
      <h3>Family Care Roadmap Details</h3>
      <p><strong>Audience:</strong> ${audience || "family"}</p>
      <p><strong>Household Size:</strong> ${householdSize || "Not provided"}</p>
      <p><strong>Children ages 12+:</strong> ${childrenAges12Plus || "Not provided"}</p>
      <p><strong>Biggest Family Care Concern:</strong> ${biggestFamilyCareConcern || "Not provided"}</p>
      <p><strong>Current Insurance Situation:</strong> ${currentInsuranceSituation || "Not provided"}</p>
      <p><strong>Preferred Contact Method:</strong> ${preferredContactMethod || "Not provided"}</p>
    `;
      case "membership_pricing_guide":
        return `
      <hr />
      <h3>Membership Pricing Guide Details</h3>
      <p><strong>Audience:</strong> ${audience || "individual"}</p>
      <p><strong>Age Range:</strong> ${ageRange || "Not provided"}</p>
      <p><strong>Insurance Status:</strong> ${insuranceStatus || "Not provided"}</p>
      <p><strong>Biggest Care Frustration:</strong> ${biggestCareFrustration || "Not provided"}</p>
      <p><strong>Preferred Contact Method:</strong> ${preferredContactMethod || "Not provided"}</p>
    `;
      case "employer_dpc_overview":
        return `
      <hr />
      <h3>Employer DPC Overview Details</h3>
      <p><strong>Audience:</strong> ${audience || "employer"}</p>
      <p><strong>Company:</strong> ${company || "Not provided"}</p>
      <p><strong>Role:</strong> ${role || "Not provided"}</p>
      <p><strong>Employee Count:</strong> ${employeeCountBand || "Not provided"}</p>
      <p><strong>Current Benefits Situation:</strong> ${currentBenefitsSituation || "Not provided"}</p>
      <p><strong>Renewal Month:</strong> ${renewalMonth || "Not provided"}</p>
      <p><strong>Biggest Workforce Healthcare Concern:</strong> ${biggestWorkforceHealthcareConcern || "Not provided"}</p>
      <p><strong>Preferred Contact Method:</strong> ${preferredContactMethod || "Not provided"}</p>
    `;
      case "broker_toolkit":
        return `
      <hr />
      <h3>Broker Toolkit Details</h3>
      <p><strong>Audience:</strong> ${audience || "broker"}</p>
      <p><strong>Firm:</strong> ${firm || "Not provided"}</p>
      <p><strong>Role:</strong> ${role || "Not provided"}</p>
      <p><strong>Typical Client Size:</strong> ${clientSizeBand || "Not provided"}</p>
      <p><strong>Primary Client Industries:</strong> ${primaryClientIndustries || "Not provided"}</p>
      <p><strong>Funding Model Focus:</strong> ${fundingModelFocus || "Not provided"}</p>
      <p><strong>Co-branded Materials Interest:</strong> ${wantsCobrandedMaterials || "Not provided"}</p>
      <p><strong>Preferred Contact Method:</strong> ${preferredContactMethod || "Not provided"}</p>
    `;
      default:
        return "";
    }
  })();

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
    ${resourceSection}
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

    const phoneOptional = isOptionalPhoneLead(body);

    if (!name || !email || (!phoneOptional && !phone)) {
      return NextResponse.json(
        { error: phoneOptional
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
        resource: body.resource,
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
