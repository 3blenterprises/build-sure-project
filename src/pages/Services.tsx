import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import serviceRebar1 from "@/assets/service-rebar-1.png";
import serviceCoordination1 from "@/assets/service-coordination-1.png";
import serviceConcreteLift1 from "@/assets/service-concrete-lift-1.png";
import serviceFormwork1 from "@/assets/service-formwork-1.png";
import serviceRebar2 from "@/assets/service-rebar-2.png";
import serviceRebar3 from "@/assets/service-rebar-3.png";
import serviceConcreteLift2 from "@/assets/service-concrete-lift-2.png";
import serviceConcreteLift3 from "@/assets/service-concrete-lift-3.png";
import serviceCoordination2 from "@/assets/service-coordination-2.png";
import serviceFormwork2 from "@/assets/service-formwork-2.png";
import bg4 from "@/assets/bg-4.png";
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
    title: "Rebar Modeling & Shop Drawings",
    desc: "Parametric rebar modeling and 2D detailing that automates bending schedules and identifies congestion early.",
    items: ["LOD 350-400 rebar modeling", "Automated bending schedules", "Congestion analysis", "2D shop drawings", "Prefabrication planning", "Splice location optimization"],
    image: serviceRebar1
  },
  {
    icon: Search,
    title: "MEP & Embed Coordination",
    desc: "Precise coordination of mechanical, electrical, and plumbing systems with structural elements to prevent field conflicts.",
    items: ["Sleeve and embed placement", "Clash detection reports", "Penetration management", "Coordination meetings", "Installation drawings"],
    image: serviceCoordination1
  },
  {
    icon: ClipboardCheck,
    title: "Concrete Lift Drawings & Sequence",
    desc: "Detailed pour sequencing and lift drawings that align with your construction schedule and resource planning.",
    items: ["Pour break planning", "Lift drawings", "Quantity takeoffs per pour", "Schedule integration", "Visual method statements"],
    image: serviceConcreteLift1
  },
  {
    icon: Headphones,
    title: "Formwork Modeling & Planning",
    desc: "Optimized formwork planning and cycling strategies to reduce material waste and improve cycle times.",
    items: ["Formwork systems modeling", "Cycle planning & optimization", "Material quantity tracking", "Assembly sequencing", "Reuse strategies"],
    image: serviceFormwork1
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
    <SEOHead
      title="BIM & Construction Services"
      description="Concrete lift drawings, rebar modeling, formwork planning, and embedded coordination services for contractors across Europe and the Middle East."
      path="/services"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "BIM Modeling and Construction Documentation",
        "provider": {
          "@type": "Organization",
          "name": "3BL Studios",
          "url": "https://3bl-studios.com"
        },
        "areaServed": ["Europe", "Middle East"],
        "description": "Concrete lift drawings, rebar modeling, formwork planning, and embedded coordination services for contractors.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "BIM Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Concrete Lift Drawings" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Rebar Modeling & Detailing" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Formwork Planning" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Embedded Coordination" } }
          ]
        }
      }}
    />
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
        <div className="space-y-12 max-w-5xl mx-auto">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 rounded-lg border border-border bg-background hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <cat.icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">{cat.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{cat.desc}</p>
                  <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2 pt-2">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full lg:w-2/5 aspect-video rounded-md overflow-hidden border border-border/50 shadow-sm">
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>


    {/* Detailed Gallery */}
    <section className="py-20 bg-background">
      <div className="container">
        <SectionHeading title="Detailed Deliverables" subtitle="Examples of our high-precision documentation and modeling standards." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { img: serviceRebar2, title: "Rebar Congestion Analysis" },
            { img: serviceRebar3, title: "Complex Connection Detailing" },
            { img: serviceConcreteLift2, title: "Multi-Level Pour Sections" },
            { img: serviceConcreteLift3, title: "3D Pour Sequencing" },
            { img: serviceCoordination2, title: "Embedded Plate Coordination" },
            { img: serviceFormwork2, title: "Formwork Assembly Steps" },
          ].map((item, i) => (
             <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative aspect-video overflow-hidden rounded-lg border border-border shadow-sm"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-medium text-sm">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Industries */ }
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
