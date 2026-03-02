import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import {
  Box,
  Search,
  ClipboardCheck,
  Headphones,
  Building2,
  Heart,
  Hotel,
  Home,
  Factory,
  Layers,
  Shield,
  Target,
  CheckSquare,
  MessageCircle,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const categories = [
  {
    icon: Box,
    title: "BIM Modeling & Documentation",
    desc: "High-accuracy, build-ready models and coordinated drawing sets designed for real-world construction conditions.",
    items: ["LOD 300–400 discipline-specific modeling", "Architectural, Structural, and MEP modeling", "Shop drawing production", "As-built modeling", "Revit-based documentation packages", "Model updates and revisions"],
  },
  {
    icon: Search,
    title: "Clash Detection & Coordination",
    desc: "Structured coordination workflows that identify and resolve conflicts before they impact schedule or cost.",
    items: ["Federated model coordination", "Clash detection and reporting", "Prioritized clash resolution workflows", "Coordination meeting support", "Model audit and validation"],
  },
  {
    icon: ClipboardCheck,
    title: "Constructability Review & Engineering Oversight",
    desc: "Technical review of models and drawings from a constructability and execution perspective.",
    items: ["Constructability analysis", "Documentation clarity reviews", "Design intent verification", "Engineering supervision of deliverables", "Quality control checkpoints"],
  },
  {
    icon: Headphones,
    title: "Ongoing Technical Support",
    desc: "Flexible engagement models allowing contractors to scale BIM capacity without long-term overhead risk.",
    items: ["Project-based support", "Dedicated remote BIM team", "Overflow support during peak workloads", "Long-term coordination partnership"],
  },
];

const industries = [
  { icon: Building2, label: "Commercial Construction" },
  { icon: Heart, label: "Healthcare Facilities" },
  { icon: Hotel, label: "Hospitality Projects" },
  { icon: Layers, label: "Mixed-Use Developments" },
  { icon: Factory, label: "Industrial Facilities" },
  { icon: Home, label: "Large-Scale Residential" },
];

const principles = [
  { icon: Shield, title: "Engineering Supervision", desc: "All deliverables are overseen by U.S. licensed professional engineers." },
  { icon: Target, title: "Execution-Focused Outputs", desc: "Our documentation is built for contractors, not just design intent." },
  { icon: CheckSquare, title: "Quality-Control Discipline", desc: "Structured review checkpoints before client submission." },
  { icon: MessageCircle, title: "Communication Transparency", desc: "Clear reporting, structured coordination, defined timelines." },
];

const Services = () => (
  <>
    {/* Hero */}
    <section className="relative bg-navy overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-40" />
      <div className="container relative z-10 py-20 md:py-28 text-center max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground leading-tight"
        >
          Engineering-Led BIM & Technical Services for{" "}
          <span className="text-gradient-brand">Complex Construction Projects</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 text-lg text-steel max-w-3xl mx-auto"
        >
          3BL Studios delivers constructability-driven BIM modeling, documentation, and coordination support for contractors across Europe and the Middle East. Every deliverable is supervised by licensed professional engineers to ensure accuracy, clarity, and execution readiness.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <Link to="/contact">
            <Button variant="hero" size="lg" className="mt-8">Request a Consultation</Button>
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Overview */}
    <section className="py-16 bg-background bg-grid-pattern">
      <div className="container max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg text-muted-foreground leading-relaxed"
        >
          We provide disciplined, quality-controlled BIM and engineering support across the full preconstruction and construction lifecycle. Our work is built around reducing coordination risk, preventing rework, and strengthening documentation clarity before field execution begins.
        </motion.p>
      </div>
    </section>

    {/* Service Categories */}
    <section className="py-20 bg-card">
      <div className="container">
        <SectionHeading title="Core Service Categories" />
        <div className="space-y-8 max-w-5xl mx-auto">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 rounded-lg border border-border bg-background hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <cat.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{cat.title}</h3>
                  <p className="text-muted-foreground mb-4">{cat.desc}</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Industries */}
    <section className="py-20 bg-background bg-grid-pattern">
      <div className="container">
        <SectionHeading title="Industries & Project Types Served" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.label}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card"
            >
              <ind.icon className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-foreground">{ind.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Principles */}
    <section className="py-20 bg-navy">
      <div className="container">
        <SectionHeading title="Our Service Principles" light />
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 rounded-lg border border-steel/20 bg-navy-light"
            >
              <div className="w-10 h-10 rounded-md bg-blueprint/15 flex items-center justify-center mb-3">
                <p.icon className="w-5 h-5 text-blueprint" />
              </div>
              <h3 className="font-heading font-semibold text-primary-foreground mb-1">{p.title}</h3>
              <p className="text-sm text-steel">{p.desc}</p>
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
            Ready to Strengthen Your Project Execution?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you need full project support or targeted coordination assistance, 3BL Studios provides disciplined, engineering-led BIM services designed to reduce risk and improve construction outcomes.
          </p>
          <Link to="/contact">
            <Button variant="cta" size="lg">Schedule a Consultation</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  </>
);

export default Services;
