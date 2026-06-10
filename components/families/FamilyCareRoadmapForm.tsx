"use client";

import { AudienceResourceForm } from "@/components/audience/AudienceResourceForm";
import { AUDIENCE_RESOURCE_CONFIGS } from "@/lib/content/audience-resources";

export function FamilyCareRoadmapForm() {
  return (
    <AudienceResourceForm
      config={AUDIENCE_RESOURCE_CONFIGS.families}
      source="families_page"
      sourcePage="/families"
      sectionId="family-care-roadmap"
    />
  );
}
