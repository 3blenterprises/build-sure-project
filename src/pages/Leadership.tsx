import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import {
  ShieldCheck,
  FileCheck,
  Wrench,
  Eye,
  ClipboardList,
  Users,
  BarChart3,
  Globe,
  Clock,
  Handshake,
  CheckCircle2,
} from "lucide-react";
import commCollab from "@/assets/communication-collaboration-2.png";
import bg5 from "@/assets/bg-5.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const supervisionPoints = [
  "Constructability alignment",
  "Design-intent verification",
  "Practical installation logic",
  "Structured documentation review",
  "Accountability at the leadership level",
];

const commitments = [
  { icon: BarChart3, text: "Reduced coordination friction" },
  { icon: ShieldCheck, text: "Fewer field conflicts" },
  { icon: FileCheck, text: "Stronger documentation clarity" },
  { icon: Handshake, text: "Long-term contractor relationships" },
];

const Leadership = () => (
  <>
    {/* Hero */}
    <section className="relative bg-navy overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
        style={{ backgroundImage: `url(${bg5})` }}
      />
      <div className="absolute inset-0 bg-navy/60" />
      <div className="container relative z-10 py-20 md:py-28 text-center max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground leading-tight"
        >
          Leadership, Engineering Oversight, and{" "}
          <span className="text-gradient-brand">Accountability</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 text-lg text-steel max-w-3xl mx-auto"
        >
          3BL Studios operates as a structured, engineering-led BIM partner serving contractors across Europe and the Middle East. Our leadership model prioritizes supervision, quality control, and execution reliability.
        </motion.p>
      </div>
    </section>

    {/* Who We Are */}
    <section className="py-20 bg-background bg-grid-pattern">
      <div className="container max-w-3xl">
        <SectionHeading title="Who We Are" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 text-lg text-muted-foreground text-center"
        >
          <p>
            3BL Studios is a quality-driven BIM and technical support firm built around engineering discipline and construction practicality.
          </p>
          <p>
            We were established to address a recurring gap in the market: <strong className="text-foreground">BIM production without true execution alignment.</strong>
          </p>
          <p>
            Our focus is not volume. Our focus is <strong className="text-foreground">documentation reliability, coordination clarity, and risk reduction.</strong>
          </p>
        </motion.div>
      </div>
    </section>

    {/* Engineering Supervision */}
    <section className="py-20 bg-card">
      <div className="container max-w-4xl">
        <SectionHeading title="Engineering Supervision" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-lg border border-border bg-background"
        >
          <p className="text-muted-foreground mb-6">
            All project deliverables are overseen by licensed professional engineers. This supervision model ensures:
          </p>
          <ul className="space-y-3">
            {supervisionPoints.map((item) => (
              <li key={item} className="flex items-center gap-3 text-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm font-medium text-accent">
            We do not operate as unmanaged drafting support. We operate under engineering oversight standards.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Structure */}
    <section className="py-20 bg-navy">
      <div className="container max-w-4xl">
        <SectionHeading title="Our Structure" light />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Leadership Oversight",
              icon: Eye,
              items: ["Engineering supervision", "Final deliverable approval", "Quality assurance governance"],
            },
            {
              title: "Technical Production",
              icon: Wrench,
              items: ["Discipline-specific BIM specialists", "Coordinators and model managers", "Structured reporting workflows"],
            },
            {
              title: "Quality Control Layer",
              icon: ClipboardList,
              items: ["Internal model audits", "Clash validation checks", "Documentation consistency review", "Revision tracking system"],
            },
          ].map((col, i) => (
            <motion.div
              key={col.title}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 rounded-lg border border-steel/20 bg-navy-light"
            >
              <div className="w-10 h-10 rounded-md bg-blueprint/15 flex items-center justify-center mb-4">
                <col.icon className="w-5 h-5 text-blueprint" />
              </div>
              <h3 className="font-heading font-semibold text-primary-foreground mb-3">{col.title}</h3>
              <ul className="space-y-2">
                {col.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-steel">
                    <span className="w-1.5 h-1.5 rounded-full bg-blueprint flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Market Focus */}
    <section className="py-20 bg-background bg-grid-pattern">
      <div className="container max-w-3xl text-center">
        <SectionHeading title="Our Market Focus" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 text-muted-foreground"
        >
          <p>We primarily support contractors in <strong className="text-foreground">Europe</strong> and the <strong className="text-foreground">Middle East</strong>.</p>
          <div className="grid grid-cols-2 gap-3 max-w-md mx-auto pt-4">
            {[
              "Multi-disciplinary coordination",
              "Cross-border collaboration",
              "Time-sensitive environments",
              "International documentation",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-foreground p-3 rounded-md border border-border bg-card">
                <Globe className="w-4 h-4 text-accent flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-lg overflow-hidden border border-border shadow-2xl">
            <img 
              src={commCollab} 
              alt="Global Team Connectivity showing overlapped time zones between Ethiopia and United States" 
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>

    {/* Commitment */}
    <section className="py-20 bg-card">
      <div className="container max-w-3xl">
        <SectionHeading title="Our Commitment" />
        <div className="grid sm:grid-cols-2 gap-4">
          {commitments.map((item, i) => (
            <motion.div
              key={item.text}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center gap-3 p-5 rounded-lg border border-border bg-background"
            >
              <item.icon className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-sm font-medium text-foreground">{item.text}</span>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mt-8"
        >
          We are committed to building <strong className="text-foreground">predictable, professional partnerships</strong> — not short-term transactional engagements.
        </motion.p>
      </div>
    </section>
  </>
);

export default Leadership;
