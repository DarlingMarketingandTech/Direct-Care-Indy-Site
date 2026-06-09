"use client";

import {
  Stethoscope,
  Briefcase,
  MessageSquare,
  Phone,
  Zap,
  TrendingUp,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface TechItem {
  name: string;
  subtitle: string;
  feature: string;
  benefit: string;
  detail: string;
  icon: React.ElementType;
}

const techStack: TechItem[] = [
  {
    name: "Elation Health",
    subtitle: "The Clinical Core",
    feature: "Note Assist AI",
    benefit: "Writes SOAP notes automatically from ambient listening.",
    detail:
      "Elation serves as the EHR backbone. Its Note Assist feature uses ambient AI to listen during visits and generate complete SOAP notes, eliminating hours of after-hours charting.",
    icon: Stethoscope,
  },
  {
    name: "Hint Health",
    subtitle: "The Business Brain",
    feature: "Employer Playbooks",
    benefit: "Handles corporate contracts and membership billing structures.",
    detail:
      "Hint manages membership billing, employer contracts, and recurring charges while providing real-time revenue dashboards.",
    icon: Briefcase,
  },
  {
    name: "Spruce Health",
    subtitle: "The Comm Hub",
    feature: "Unified Inbox",
    benefit: "Secure text/video/phone in one thread.",
    detail:
      "Spruce consolidates all patient communication—secure messaging, video visits, and phone calls—into a single threaded inbox with HIPAA compliance built in.",
    icon: MessageSquare,
  },
  {
    name: "Cal.ai (Voice Agent)",
    subtitle: "The AI Front Desk",
    feature: "24/7 Booking",
    benefit: "Reschedules no-shows automatically.",
    detail:
      "Cal.ai is an AI-powered voice agent that handles inbound calls around the clock. It books appointments, reschedules no-shows, and answers common questions without staff intervention.",
    icon: Phone,
  },
  {
    name: "n8n",
    subtitle: "The Automation Glue",
    feature: "Open-source workflows",
    benefit: "Connects Hint to Elation instantly.",
    detail:
      "n8n provides the integration layer between all tools. Open-source workflows sync data between Hint, Elation, Spruce, and Mautic via webhooks and API calls in real time.",
    icon: Zap,
  },
  {
    name: "Mautic",
    subtitle: "The Growth Engine",
    feature: "Open-source marketing",
    benefit: "Automates patient engagement funnels.",
    detail:
      "Mautic powers lead capture, email nurture sequences, and patient engagement campaigns. Open-source and self-hosted for full data ownership and HIPAA control.",
    icon: TrendingUp,
  },
];

export default function TechGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {techStack.map((item) => (
        <Dialog key={item.name}>
          <DialogTrigger asChild>
            <Card className="cursor-pointer hover:shadow-md hover:border-secondary/40 transition-all">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <div className="rounded-lg bg-secondary/10 p-2">
                  <item.icon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <CardTitle className="text-base">{item.name}</CardTitle>
                  <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.benefit}</p>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="rounded-lg bg-secondary/10 p-2">
                  <item.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <DialogTitle>{item.name}</DialogTitle>
                  <DialogDescription>{item.subtitle}</DialogDescription>
                </div>
              </div>
            </DialogHeader>
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-semibold text-foreground">Key Feature</h4>
                <p className="text-sm text-muted-foreground">{item.feature}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">Benefit</h4>
                <p className="text-sm text-muted-foreground">{item.benefit}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">How It Fits</h4>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
