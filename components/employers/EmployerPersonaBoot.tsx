"use client";

import { useEffect } from "react";
import { setUserPersona } from "@/lib/persona";

/** Sets employer persona for dynamic CTAs — mount once per employers route. */
export function EmployerPersonaBoot() {
  useEffect(() => {
    setUserPersona("employer");
  }, []);
  return null;
}
