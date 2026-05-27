"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  persona: string;
  quote: string;
  rating: number;
  savings?: string;
}

const testimonials: Testimonial[] = [
  {
    id: "sarah-hdhp",
    name: "Sarah M.",
    persona: "HDHP Family",
    quote:
      "We were spending $800/month on health insurance premiums but still had $6,000 deductibles. DPC costs $250/month for our family of 4 and covers everything except emergencies. We've saved $6,200 this year already!",
    rating: 5,
    savings: "$6,200",
  },
  {
    id: "mike-senior",
    name: "Mike R.",
    persona: "Senior",
    quote:
      "Medicare was so confusing with all the networks and referrals. Dr. Pike's DPC membership is $109/month and I can see him anytime. No more waiting weeks for appointments or dealing with insurance paperwork.",
    rating: 5,
    savings: "$2,800",
  },
  {
    id: "jennifer-uninsured",
    name: "Jennifer L.",
    persona: "Uninsured Family",
    quote:
      "We couldn't afford insurance premiums, so doctor visits were emergencies only. Now our whole family has access to preventive care for $175/month. Our kids finally get regular check-ups and I caught my thyroid issue early.",
    rating: 5,
    savings: "$4,100",
  },
  {
    id: "david-employer",
    name: "David K.",
    persona: "Employer",
    quote:
      "I was losing employees because our health benefits weren't competitive. DPC costs $150/employee/month and they're all happier. One employee told me it saved them $300/month compared to their old insurance.",
    rating: 5,
    savings: "$3,600",
  },
  {
    id: "maria-hdhp",
    name: "Maria G.",
    persona: "HDHP Family",
    quote:
      "Our HDHP premiums were $650/month with a $7,000 family deductible. DPC is $225/month and covers all primary care. We used our HSA to pay for it tax-free. Best healthcare decision we've made.",
    rating: 5,
    savings: "$5,100",
  },
  {
    id: "robert-senior",
    name: "Robert T.",
    persona: "Senior",
    quote:
      "I'm 72 and have COPD. Dr. Pike's pulmonary expertise is exactly what I need. No more referrals to specialists - he handles everything. The texting feature means I get answers within minutes, not days.",
    rating: 5,
    savings: "$1,900",
  },
];

const AUTOPLAY_INTERVAL_MS = 6000;

export function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pausedRef = useRef(false);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Sync selected index
  useEffect(() => {
    if (!emblaApi) return;
    queueMicrotask(onSelect);
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Auto-advance
  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      if (!pausedRef.current && emblaApi) emblaApi.scrollNext();
    }, AUTOPLAY_INTERVAL_MS);
  }, [emblaApi]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    startAutoplay();
    return stopAutoplay;
  }, [emblaApi, startAutoplay, stopAutoplay]);

  const handlePointerEnter = useCallback(() => {
    pausedRef.current = true;
  }, []);

  const handlePointerLeave = useCallback(() => {
    pausedRef.current = false;
  }, []);

  // Pause on user interaction, restart after
  useEffect(() => {
    if (!emblaApi) return;
    const restart = () => startAutoplay();
    emblaApi.on("pointerUp", restart);
    return () => {
      emblaApi.off("pointerUp", restart);
    };
  }, [emblaApi, startAutoplay]);

  return (
    <div
      aria-roledescription="carousel"
      aria-label="Member testimonials"
      className="relative max-w-3xl mx-auto"
      onMouseEnter={handlePointerEnter}
      onMouseLeave={handlePointerLeave}
    >
      {/* Viewport */}
      <div ref={emblaRef} className="overflow-hidden rounded-2xl">
        <div className="flex">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="min-w-0 flex-[0_0_100%]"
              role="group"
              aria-roledescription="slide"
              aria-label={`Testimonial ${i + 1} of ${testimonials.length}`}
            >
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm mx-2">
                <Quote className="w-8 h-8 text-secondary mb-4" />
                <blockquote className="text-lg text-foreground mb-6 italic">
                  &quot;{t.quote}&quot;
                </blockquote>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <div className="font-semibold text-foreground">
                      {t.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t.persona}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-0.5">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star
                          key={j}
                          className="w-4 h-4 fill-secondary text-secondary"
                        />
                      ))}
                    </div>
                    {t.savings && (
                      <span className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-sm font-semibold text-secondary">
                        Saved {t.savings}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrow buttons – hidden on mobile */}
      <button
        type="button"
        onClick={scrollPrev}
        aria-label="Previous testimonial"
        className="hidden md:flex absolute -left-12 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full border border-border bg-card text-secondary shadow-sm hover:bg-secondary hover:text-secondary-foreground transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        aria-label="Next testimonial"
        className="hidden md:flex absolute -right-12 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full border border-border bg-card text-secondary shadow-sm hover:bg-secondary hover:text-secondary-foreground transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Testimonial navigation">
        {testimonials.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === selectedIndex}
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => scrollTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === selectedIndex ? "bg-secondary" : "bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
