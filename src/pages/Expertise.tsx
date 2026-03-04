import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import {
  Crosshair,
  Layers,
  ShieldCheck,
  GitBranch,
  PackageCheck,
  CheckCircle2,
  ClipboardList,
  Eye,
  FileCheck,
  MessageSquare,
  Clock,
  BarChart3,
  Users,
  Building2,
  Globe,
  Handshake,
} from "lucide-react";
import bg4 from "@/assets/bg-4.png";
import commCollabImg from "@/assets/communication-collaboration-standards.png";
import expertiseBg1 from "@/assets/expertise-bg-1.png";
import expertiseBg2 from "@/assets/expertise-bg-2.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const steps = [
  {
    num: "01",
    title: "Scope Alignment & Technical Onboarding",
    items: ["Clarify scope boundaries", "Define LOD expectations", "Review existing standards", "Identify coordination risks", "Align file management structure"],
    outcome: "No ambiguity before production starts.",
  },
  {
    num: "02",
    title: "Structured Model Development",
    items: ["Discipline-specific modeling standards", "Naming conventions aligned with client protocols", "Defined clash tolerance thresholds", "Version control checkpoints"],
    outcome: "Controlled, organized production.",
  },
  {
    num: "03",
    title: "Internal Quality Control",
    items: ["Model audit", "Clash validation", "Documentation review", "Constructability screening", "Engineering supervision review"],
    outcome: "Errors are resolved before client submission.",
  },
  {
    num: "04",
    title: "Coordination & Revision Management",
    items: ["Track revision cycles", "Document issue resolution", "Provide structured clash reports", "Support coordination meetings"],
    outcome: "Clear communication and traceable decisions.",
  },
  {
    num: "05",
    title: "Final Validation & Handover",
    items: ["Models reviewed for completeness", "Drawings checked for consistency", "Export formats validated", "File organization standardized"],
    outcome: "Clean, build-ready deliverables.",
  },
];

const qaItems = [
  "Defined modeling standards",
  "Internal review checkpoints",
  "Engineer-led supervision",
  "Revision tracking logs",
  "Deliverable approval workflow",
];

const bestFit = [
  { icon: Users, text: "Contractors managing multi-disciplinary coordination" },
  { icon: BarChart3, text: "Firms requiring overflow BIM capacity" },
  { icon: Building2, text: "Project teams seeking higher documentation reliability" },
  { icon: Globe, text: "Companies expanding into Europe and Middle East markets" },
];

const Expertise = () => (
  <>
    <SEOHead title="Our Expertise & Approach" description="Engineering discipline meets construction reality. Discover our 5-step workflow, quality assurance system, and constructability-driven BIM methodology." path="/expertise" />
    {/* Hero */}
    <section className="relative bg-navy overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
        style={{ backgroundImage: `url(${bg4})` }}
      />
      <div className="absolute inset-0 bg-navy/60" />
      <div className="container relative z-10 py-20 md:py-28 text-center max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground leading-tight"
        >
          Our Approach:{" "}
          <span className="text-gradient-brand">Engineering Discipline</span> Meets Construction Reality
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 text-lg text-steel max-w-3xl mx-auto"
        >
          At 3BL Studios, BIM is not treated as drafting support — it is treated as a risk-reduction and execution-enablement tool. Our workflows are built around constructability, clarity, and accountability.
        </motion.p>
      </div>
    </section>

    {/* Philosophy */}
    <section className="py-20 bg-background bg-grid-pattern">
      <div className="container max-w-3xl text-center">
        <SectionHeading title="Our Philosophy" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 text-lg text-muted-foreground"
        >
          <p>Construction documentation should not create uncertainty. <strong className="text-foreground">It should eliminate it.</strong></p>
          <p>Many BIM providers focus on model completion. <strong className="text-foreground">We focus on execution certainty.</strong></p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            {["Engineering supervision", "Constructability-driven modeling", "Structured quality control"].map((pillar) => (
              <span key={pillar} className="px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-sm font-medium text-accent">
                {pillar}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* 5-Step Workflow */}
    <section className="py-20 bg-card">
      <div className="container">
        <SectionHeading title="Our 5-Step Project Workflow" />
        <div className="max-w-4xl mx-auto space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 rounded-lg border border-border bg-background"
            >
              <div className="flex items-start gap-5">
                <span className="font-heading text-3xl font-bold text-accent/30">{step.num}</span>
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                  <ul className="space-y-1.5 mb-3">
                    {step.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-medium text-accent">Outcome: {step.outcome}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* QA System */}
    <section className="py-20 bg-navy">
      <div className="container max-w-4xl">
        <SectionHeading title="Quality Assurance System" light />
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading font-semibold text-primary-foreground mb-4">Our Quality System Includes</h3>
            <ul className="space-y-2">
              {qaItems.map((item) => (
                <li key={item} className="flex items-center gap-2 text-steel text-sm">
                  <ShieldCheck className="w-4 h-4 text-blueprint flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading font-semibold text-primary-foreground mb-4">This Reduces</h3>
            <ul className="space-y-2">
              {["Rework cycles", "Field conflicts", "Unclear documentation", "Late-stage coordination surprises"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-steel text-sm">
                  <Crosshair className="w-4 h-4 text-blueprint flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Engineering Supervision & Accountability */}
    <section className="relative py-20 bg-background overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.07]"
        style={{ backgroundImage: `url(${expertiseBg1})` }}
      />
      <div className="absolute inset-0 bg-background/80" />
      <div className="container max-w-3xl relative z-10">
        <SectionHeading title="Engineering Supervision & Accountability" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-lg border border-border bg-card"
        >
          <p className="text-muted-foreground mb-6">
            All project outputs are supervised by licensed professional engineers. This ensures:
          </p>
          <ul className="space-y-3">
            {["Alignment with practical installation logic", "Documentation clarity", "Design-intent verification", "Professional accountability"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>

    {/* Communication & Collaboration Standards */}
    <section className="relative py-20 bg-card overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.06]"
        style={{ backgroundImage: `url(${expertiseBg2})` }}
      />
      <div className="absolute inset-0 bg-card/85" />
      <div className="container max-w-4xl relative z-10">
        <SectionHeading title="Communication & Collaboration Standards" />
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground mb-6">
              We integrate into client workflows through:
            </p>
            <ul className="space-y-3">
              {["Defined response time windows", "Structured reporting cadence", "Shared coordination platforms", "Clear escalation channels"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground text-sm">
                  <MessageSquare className="w-4 h-4 text-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden border border-border shadow-2xl"
          >
            <img
              src={commCollabImg}
              alt="Global Team Connectivity showing overlapped time zones between Ethiopia and United States"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Who We Work Best With */}
    <section className="py-20 bg-background bg-grid-pattern">
      <div className="container">
        <SectionHeading title="Who We Work Best With" />
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {bestFit.map((item, i) => (
            <motion.div
              key={item.text}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center gap-3 p-5 rounded-lg border border-border bg-card"
            >
              <item.icon className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-sm text-foreground">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-accent/5 bg-grid-pattern">
      <div className="container text-center max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            A Process Built for Predictability
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            When documentation clarity improves, execution risk decreases. Our structured approach ensures that BIM serves construction, not the other way around.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/services">
              <Button variant="cta" size="lg">Explore Our Services</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">Start a Conversation</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </>
);

export default Expertise;
