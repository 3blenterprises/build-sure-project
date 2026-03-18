import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import SEOHead from "@/components/SEOHead";
import heroBim from "@/assets/bim-construction.png";
import bg5 from "@/assets/bg-5.png";
import bimShowcase1 from "@/assets/bim-showcase-1.png";
import bimShowcase2 from "@/assets/bim-showcase-2.png";
import {
  CheckCircle,
  DollarSign,
  HardHat,
  Timer,
  Users,
  RefreshCw,
  Building2,
  Wrench,
  Layers,
  LayoutGrid,
  Shield,
  MessageSquare,
  Package,
  Zap,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const valueProps = [
  { icon: CheckCircle, title: "First-Pass Accuracy", desc: "Licensed engineer oversight minimizes revisions and RFIs." },
  { icon: DollarSign, title: "Lower Total Project Cost", desc: "Quality-led coordination reduces downstream rework and delays." },
  { icon: HardHat, title: "Constructability-Driven Modeling", desc: "We model how projects are built — not just how they are designed." },
  { icon: Timer, title: "Fast Feedback Cycles", desc: "Short review loops aligned with live construction timelines." },
  { icon: Users, title: "Scalable Capacity", desc: "Expand BIM and detailing resources without diluting quality." },
  { icon: RefreshCw, title: "Vendor Transition Capability", desc: "Structured takeover from underperforming providers with minimal disruption." },
];

const services = [
  { icon: Building2, title: "Concrete Lift Drawings & Coordination", desc: "Resolve sequencing and constructability risks before concrete reaches site." },
  { icon: Wrench, title: "Rebar Modeling & Shop Drawings", desc: "Optimize fabrication and installation through precise 3D detailing." },
  { icon: Layers, title: "Embedded Plate & Sleeve Coordination", desc: "Prevent costly post-pour corrections through pre-construction verification." },
  { icon: LayoutGrid, title: "Formwork Modeling & Planning", desc: "Improve planning accuracy, sequencing efficiency, and material utilization." },
];

const operatingPoints = [
  { icon: Shield, title: "Engineer-Led Governance" },
  { icon: MessageSquare, title: "Structured Feedback Loops" },
  { icon: Package, title: "Package-Based Execution" },
  { icon: Zap, title: "Rapid Vendor Transition Capability" },
];

const Index = () => {
  return (
    <>
      <SEOHead
        title="3BL Studios – Engineering-Led BIM & Constructability Services"
        description="First-pass accurate BIM models and build-ready construction documentation for contractors across Europe and the Middle East, supervised by U.S.-licensed professional engineers."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "3BL Studios",
          "url": "https://3bl-studios.com",
          "description": "Engineering-led BIM & constructability services for contractors across Europe and the Middle East.",
          "email": "studios@3BLenterprises.com",
          "areaServed": [
            { "@type": "Continent", "name": "Europe" },
            { "@type": "Place", "name": "Middle East" }
          ],
          "serviceType": ["BIM Modeling", "Construction Documentation", "Rebar Detailing", "Constructability Services", "MEP Coordination"],
          "knowsAbout": ["Building Information Modeling", "Concrete Lift Drawings", "Formwork Planning", "Rebar Modeling"],
          "priceRange": "$$"
        }}
      />
      {/* HERO */}
      <section className="relative bg-navy overflow-hidden" aria-label="Hero">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{ backgroundImage: `url(${bg5})` }}
        />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="container relative z-10 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-tight text-primary-foreground">
                Engineering-Led BIM &{" "}
                <span className="text-gradient-brand">Constructability Services</span>{" "}
                Built for Execution Certainty
              </h1>
              <p className="mt-6 text-lg text-steel max-w-xl leading-relaxed">
                First-pass accurate BIM models and build-ready construction documentation for contractors across Europe and the Middle East, supervised by U.S.-licensed professional engineers and designed to reduce rework, RFIs, and coordination risk.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="lg">Get Started</Button>
                </Link>
                <Link to="/services">
                  <Button variant="hero-outline" size="lg">Explore Services</Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:block"
            >
              <img
                src={heroBim}
                alt="3D BIM model wireframe visualization of a multi-story commercial building by 3BL Studios"
                className="w-full rounded-lg shadow-2xl shadow-blueprint/20"
                loading="eager"
                width={600}
                height={400}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 bg-background bg-grid-pattern">
        <div className="container max-w-4xl">
          <SectionHeading title="A Remote Technical Extension of Your Project Team" />
          <motion.p
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center text-lg text-muted-foreground leading-relaxed"
          >
            3BL Studios is a construction technology outsourcing firm specializing in high-precision BIM modeling and constructability-driven documentation. With delivery teams based in Ethiopia and all outputs supervised by licensed professional engineers in the United States, we translate design intent into build-ready execution information that directly supports on-site performance.
          </motion.p>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="py-20 bg-card">
        <div className="container">
          <SectionHeading
            title="Execution Certainty Through Engineering-Led BIM"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueProps.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-6 rounded-lg border border-border bg-background hover:shadow-lg hover:shadow-accent/5 transition-shadow group"
              >
                <div className="w-11 h-11 rounded-md bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 bg-background bg-grid-pattern">
        <div className="container">
          <SectionHeading
            title="Core Services"
            subtitle="Technically intensive BIM and coordination scopes that directly influence construction accuracy and cost control."
          />
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-6 rounded-lg border border-border bg-card hover:border-accent/30 transition-colors"
              >
                <div className="w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <svc.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{svc.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="outline" size="lg">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* OPERATING MODEL */}
      <section className="py-20 bg-navy">
        <div className="container">
          <SectionHeading
            title="Engineering Accountability Meets Offshore Scalability"
            subtitle="All deliverables are supervised by U.S.-licensed professional engineers while our Ethiopia-based delivery teams provide scalable technical capacity. This integrated operating model enables high-precision coordination, faster turnaround, and consistent quality."
            light
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {operatingPoints.map((pt, i) => (
              <motion.div
                key={pt.title}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-blueprint/15 flex items-center justify-center mb-3">
                  <pt.icon className="w-6 h-6 text-blueprint" />
                </div>
                <p className="text-sm font-medium text-steel">{pt.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BIM SHOWCASE */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container">
          <SectionHeading
            title="Precision-Modeled for Real Construction"
            subtitle="From structural BIM coordination to construction phase visualization — our models bridge the gap between design intent and field execution."
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="group relative rounded-lg overflow-hidden border border-border shadow-lg"
            >
              <img
                src={bimShowcase1}
                alt="3D structural BIM model with grid coordination"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-primary-foreground text-sm font-medium">Structural BIM Coordination Model</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="group relative rounded-lg overflow-hidden border border-border shadow-lg"
            >
              <img
                src={bimShowcase2}
                alt="BIM coordination model with construction phase visualization"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-primary-foreground text-sm font-medium">Construction Phase Visualization</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-20 bg-accent/5 bg-grid-pattern">
        <div className="container text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Reduce Execution Risk Before Construction Begins
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Strengthen coordination, accuracy, and delivery confidence with constructability-driven BIM support aligned to real construction timelines.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="cta" size="lg">Start a Project</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">Book a Consultation</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
