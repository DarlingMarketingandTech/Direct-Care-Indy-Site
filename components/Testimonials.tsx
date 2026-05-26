import Link from "next/link";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  persona: string;
  quote: string;
  rating: number;
  savings?: string;
  approved?: boolean;
}

interface TestimonialsProps {
  limit?: number;
  persona?: string;
}

const testimonials: Testimonial[] = [
  {
    id: "sarah-hdhp",
    name: "Sarah M.",
    persona: "HDHP Family",
    quote: "We were spending $800/month on health insurance premiums but still had $6,000 deductibles. DPC costs $250/month for our family of 4 and covers everything except emergencies. We've saved $6,200 this year already!",
    rating: 5,
    savings: "$6,200",
    approved: false
  },
  {
    id: "mike-senior",
    name: "Mike R.",
    persona: "Senior",
    quote: "Medicare was so confusing with all the networks and referrals. Dr. Pike's DPC membership is $109/month and I can see him anytime. No more waiting weeks for appointments or dealing with insurance paperwork.",
    rating: 5,
    savings: "$2,800",
    approved: false
  },
  {
    id: "jennifer-uninsured",
    name: "Jennifer L.",
    persona: "Uninsured Family",
    quote: "We couldn't afford insurance premiums, so doctor visits were emergencies only. Now our whole family has access to preventive care for $175/month. Our kids finally get regular check-ups and I caught my thyroid issue early.",
    rating: 5,
    savings: "$4,100",
    approved: false
  },
  {
    id: "david-employer",
    name: "David K.",
    persona: "Employer",
    quote: "I was losing employees because our health benefits weren't competitive. DPC costs $150/employee/month and they're all happier. One employee told me it saved them $300/month compared to their old insurance.",
    rating: 5,
    savings: "$3,600",
    approved: false
  },
  {
    id: "maria-hdhp",
    name: "Maria G.",
    persona: "HDHP Family",
    quote: "Our HDHP premiums were $650/month with a $7,000 family deductible. DPC is $225/month and covers all primary care. Best healthcare decision we've made.",
    rating: 5,
    savings: "$5,100",
    approved: false
  },
  {
    id: "robert-senior",
    name: "Robert T.",
    persona: "Senior",
    quote: "I'm 72 and have COPD. Dr. Pike's pulmonary expertise is exactly what I need. No more referrals to specialists - he handles everything. The texting feature means I get answers within minutes, not days.",
    rating: 5,
    savings: "$1,900",
    approved: false
  }
];

export function Testimonials({ limit, persona }: TestimonialsProps) {
  const filteredTestimonials = testimonials
    .filter(t => process.env.NODE_ENV === 'development' || t.approved)
    .filter(t => persona ? t.persona.toLowerCase().includes(persona.toLowerCase()) : true);

  const displayTestimonials = limit
    ? filteredTestimonials.slice(0, limit)
    : filteredTestimonials;

  return (
    <div className="space-y-6">
      {displayTestimonials.map((testimonial) => (
        <div key={testimonial.id} className="section-card">
          <div className="flex items-start gap-4">
            <Quote className="w-8 h-8 text-secondary shrink-0 mt-1" />
            <div className="flex-1">
              <blockquote className="text-lg text-foreground mb-4 italic">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.persona}</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  {testimonial.savings && (
                    <div className="text-secondary font-semibold text-sm">
                      Saved {testimonial.savings}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
