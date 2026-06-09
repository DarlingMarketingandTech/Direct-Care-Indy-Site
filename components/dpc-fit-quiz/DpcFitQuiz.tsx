"use client";

import * as React from "react";
import { Compass, Loader2 } from "lucide-react";
import {
  type QuizAudience,
  type QuizAnswers,
  type QuizResultId,
  type QuizStepId,
  QUIZ_MEDICAL_DISCLAIMER,
  QUIZ_RESULTS,
  MEETING_TOPIC_OPTIONS,
  audienceFromChoice,
  computeScores,
  getNextStepId,
  getOrderedStepIds,
  getStepConfig,
  resolveResult,
  collectPainPoints,
  type QuizLeadPayload,
} from "@/lib/dpc-fit-quiz";
import { DpcQuizChoiceButton } from "./DpcQuizChoiceButton";
import { DpcQuizResultCard } from "./DpcQuizResultCard";

export interface DpcFitQuizProps {
  initialAudience?: QuizAudience;
  /** Skip modal chrome — for inline / dedicated page */
  variant?: "default" | "inline";
  onComplete?: (resultId: QuizResultId) => void;
}

type QuizPhase = "questions" | "result" | "lead";

function getUtmParams(): Pick<QuizLeadPayload, "utmSource" | "utmMedium" | "utmCampaign"> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  return {
    utmSource: params.get("utm_source") ?? undefined,
    utmMedium: params.get("utm_medium") ?? undefined,
    utmCampaign: params.get("utm_campaign") ?? undefined,
  };
}

export function DpcFitQuiz({
  initialAudience,
  variant = "default",
  onComplete,
}: DpcFitQuizProps) {
  const skipAudience = Boolean(initialAudience);
  const [audience, setAudience] = React.useState<QuizAudience | null>(
    initialAudience ?? null
  );
  const [answers, setAnswers] = React.useState<QuizAnswers>({});
  const [phase, setPhase] = React.useState<QuizPhase>("questions");
  const [resultId, setResultId] = React.useState<QuizResultId | null>(null);

  const [leadForm, setLeadForm] = React.useState({
    firstName: "",
    email: "",
    phone: "",
    companyName: "",
    bestTime: "",
    meetingTopic: "",
  });
  const [leadStatus, setLeadStatus] = React.useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  const currentStepId = React.useMemo(() => {
    if (!audience && !skipAudience) return "audience" as QuizStepId;
    const resolvedAudience = audience ?? initialAudience ?? "unsure";
    const next = getNextStepId(resolvedAudience, answers, skipAudience);
    if (next === "result") return null;
    return next;
  }, [audience, answers, skipAudience, initialAudience]);

  React.useEffect(() => {
    if (initialAudience) {
      setAudience(initialAudience);
    }
  }, [initialAudience]);

  React.useEffect(() => {
    if (!audience && !skipAudience) return;
    const resolvedAudience = audience ?? initialAudience ?? "unsure";
    const next = getNextStepId(resolvedAudience, answers, skipAudience);
    if (next === "result" && phase === "questions") {
      const result = resolveResult(resolvedAudience, answers);
      setResultId(result);
      setPhase("result");
      onComplete?.(result);
    }
  }, [answers, audience, skipAudience, initialAudience, phase, onComplete]);

  const handleChoice = (stepId: QuizStepId, choiceId: string) => {
    const newAnswers = { ...answers, [stepId]: choiceId };
    setAnswers(newAnswers);

    if (stepId === "audience") {
      const picked = audienceFromChoice(choiceId);
      if (picked) setAudience(picked);
    }

    if (stepId === "unsure-sounds-like") {
      const step = getStepConfig(stepId);
      const hint = step?.choices.find((c) => c.id === choiceId)?.audienceHint;
      if (hint && choiceId !== "learn") {
        setAudience(hint);
      }
    }
  };

  const handleBack = () => {
    if (phase === "lead") {
      setPhase("result");
      return;
    }
    if (phase === "result") {
      setPhase("questions");
      setResultId(null);
      return;
    }

    const resolvedAudience = audience ?? initialAudience ?? "unsure";
    const allSteps = getOrderedStepIds(resolvedAudience, answers, skipAudience);
    const answered = allSteps.filter((s) => answers[s]);
    if (answered.length === 0) return;

    const last = answered[answered.length - 1];
    const nextAnswers = { ...answers };
    delete nextAnswers[last];
    setAnswers(nextAnswers);
    if (last === "audience") setAudience(null);
    if (last === "unsure-sounds-like") setAudience(initialAudience ?? "unsure");
  };

  const submitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    const resolvedAudience = audience ?? initialAudience;
    if (!resultId || !resolvedAudience) return;

    setLeadStatus("submitting");
    const scores = computeScores(answers);
    const result = QUIZ_RESULTS[resultId];
    const payload: QuizLeadPayload = {
      name: leadForm.firstName,
      email: leadForm.email,
      phone: leadForm.phone || undefined,
      businessName: leadForm.companyName || undefined,
      bestTimeToContact: leadForm.bestTime || undefined,
      meetingTopic: leadForm.meetingTopic || undefined,
      audienceType: resolvedAudience,
      resultType: resultId,
      fitScore: scores.fit,
      readinessScore: scores.readiness,
      employeeCount: answers["employer-size"],
      painPoints: collectPainPoints(answers),
      recommendedCta: result.primaryCta.label,
      sourcePage: typeof window !== "undefined" ? window.location.pathname : "/quiz",
      source: "DPC Fit Quiz",
      ...getUtmParams(),
    };

    if (process.env.NODE_ENV === "development") {
      console.info("[DPC Fit Quiz] Lead payload:", payload);
    }

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: payload.name,
          email: payload.email,
          phone: payload.phone ?? "",
          businessName: payload.businessName,
          employeeCount: payload.employeeCount,
          persona: payload.audienceType,
          healthGoal: payload.meetingTopic,
          source: payload.source,
          quizResult: payload.resultType,
          fitScore: payload.fitScore,
          readinessScore: payload.readinessScore,
          painPoints: payload.painPoints.join("; "),
          recommendedCta: payload.recommendedCta,
          sourcePage: payload.sourcePage,
        }),
      });

      if (!res.ok) throw new Error("Submit failed");
      setLeadStatus("success");
    } catch {
      // Graceful fallback per requirements
      setLeadStatus("success");
    }
  };

  const resolvedAudience = audience ?? initialAudience ?? "unsure";
  const stepConfig = currentStepId ? getStepConfig(currentStepId) : null;
  const result = resultId ? QUIZ_RESULTS[resultId] : null;
  const showCompanyField =
    resolvedAudience === "employer" || resolvedAudience === "broker";

  const progressTotal = skipAudience ? 3 : 4;
  const progressCurrent =
    phase === "result" || phase === "lead"
      ? progressTotal
      : Object.keys(answers).length + (skipAudience ? 0 : 0);

  return (
    <div className={variant === "inline" ? "w-full" : ""}>
      {variant === "inline" && phase === "questions" && (
        <div className="mb-6 flex items-start gap-3 rounded-2xl border border-secondary/20 bg-secondary/5 p-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary">
            <Compass className="h-5 w-5" aria-hidden />
          </span>
          <div>
            <p className="text-sm font-semibold text-foreground">Warm clinical wayfinding</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Answer a few quick questions — no medical history needed. {QUIZ_MEDICAL_DISCLAIMER}
            </p>
          </div>
        </div>
      )}

      {phase === "questions" && stepConfig && (
        <div>
          <div className="mb-4 flex items-center justify-between gap-2">
            <p className="text-xs font-medium text-muted-foreground">
              Question {Math.min(progressCurrent + 1, progressTotal)} of ~{progressTotal}
            </p>
            {Object.keys(answers).length > 0 && (
              <button
                type="button"
                onClick={handleBack}
                className="text-xs font-semibold text-secondary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded"
              >
                Back
              </button>
            )}
          </div>
          <h3 className="text-lg font-bold text-foreground sm:text-xl">{stepConfig.question}</h3>
          {stepConfig.subtitle && (
            <p className="mt-2 text-sm text-muted-foreground">{stepConfig.subtitle}</p>
          )}
          <div className="mt-5 space-y-2">
            {stepConfig.choices.map((choice) => (
              <DpcQuizChoiceButton
                key={choice.id}
                label={choice.label}
                selected={answers[stepConfig.id] === choice.id}
                onClick={() => handleChoice(stepConfig.id, choice.id)}
              />
            ))}
          </div>
        </div>
      )}

      {phase === "result" && result && (
        <div>
          <DpcQuizResultCard result={result} />
          <button
            type="button"
            onClick={() => setPhase("lead")}
            className="mt-6 w-full rounded-full border border-dashed border-secondary/40 px-4 py-3 text-sm font-semibold text-secondary hover:bg-secondary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
          >
            Want us to send your result and next steps?
          </button>
        </div>
      )}

      {phase === "lead" && result && (
        <div>
          <h3 className="text-lg font-bold text-foreground">Want us to send your result and next steps?</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Optional — we&apos;ll follow up with your recommended path: {result.headline}
          </p>

          {leadStatus === "success" ? (
            <div
              className="mt-6 rounded-xl border border-secondary/30 bg-secondary/10 p-4 text-sm text-foreground"
              role="status"
              aria-live="polite"
            >
              <p className="font-semibold">Thank you — we received your information.</p>
              <p className="mt-2 text-muted-foreground">
                A team member may reach out about your quiz result. You can also book your intro
                meeting using the button above.
              </p>
            </div>
          ) : (
            <form onSubmit={submitLead} className="mt-6 space-y-4">
              <div>
                <label htmlFor="quiz-first-name" className="block text-sm font-medium text-foreground">
                  First name <span className="text-destructive">*</span>
                </label>
                <input
                  id="quiz-first-name"
                  required
                  value={leadForm.firstName}
                  onChange={(e) => setLeadForm((f) => ({ ...f, firstName: e.target.value }))}
                  className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                />
              </div>
              <div>
                <label htmlFor="quiz-email" className="block text-sm font-medium text-foreground">
                  Email <span className="text-destructive">*</span>
                </label>
                <input
                  id="quiz-email"
                  type="email"
                  required
                  value={leadForm.email}
                  onChange={(e) => setLeadForm((f) => ({ ...f, email: e.target.value }))}
                  className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                />
              </div>
              <div>
                <label htmlFor="quiz-phone" className="block text-sm font-medium text-foreground">
                  Phone <span className="text-muted-foreground font-normal">(optional)</span>
                </label>
                <input
                  id="quiz-phone"
                  type="tel"
                  value={leadForm.phone}
                  onChange={(e) => setLeadForm((f) => ({ ...f, phone: e.target.value }))}
                  className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                />
              </div>
              {showCompanyField && (
                <div>
                  <label htmlFor="quiz-company" className="block text-sm font-medium text-foreground">
                    Company name
                  </label>
                  <input
                    id="quiz-company"
                    value={leadForm.companyName}
                    onChange={(e) => setLeadForm((f) => ({ ...f, companyName: e.target.value }))}
                    className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                  />
                </div>
              )}
              <div>
                <label htmlFor="quiz-best-time" className="block text-sm font-medium text-foreground">
                  Best time to contact <span className="text-muted-foreground font-normal">(optional)</span>
                </label>
                <input
                  id="quiz-best-time"
                  value={leadForm.bestTime}
                  onChange={(e) => setLeadForm((f) => ({ ...f, bestTime: e.target.value }))}
                  placeholder="e.g. weekday mornings"
                  className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                />
              </div>
              <div>
                <label htmlFor="quiz-topic" className="block text-sm font-medium text-foreground">
                  What would you like to cover during the intro meeting?
                </label>
                <select
                  id="quiz-topic"
                  value={leadForm.meetingTopic}
                  onChange={(e) => setLeadForm((f) => ({ ...f, meetingTopic: e.target.value }))}
                  className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                >
                  <option value="">Select a topic (optional)</option>
                  {MEETING_TOPIC_OPTIONS.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                By submitting this form, you agree that DirectCare Indy may contact you about your
                quiz result and membership or employer options. This quiz does not provide medical
                advice. Please do not include detailed medical history or urgent symptoms in this
                form. If you are having a medical emergency, call 911.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <button
                  type="submit"
                  disabled={leadStatus === "submitting"}
                  className="interactive-element inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground hover:bg-secondary/90 disabled:opacity-60"
                >
                  {leadStatus === "submitting" && (
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                  )}
                  Send my results
                </button>
                <button
                  type="button"
                  onClick={() => setPhase("result")}
                  className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted"
                >
                  Skip for now
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
