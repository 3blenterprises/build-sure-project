import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import teamChris from "@/assets/team-chris.png";
import teamGelila from "@/assets/team-gelila.png";
import teamYayne from "@/assets/team-yayne.png";
import teamFiker from "@/assets/team-fiker.png";
import bg5 from "@/assets/bg-5.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
};

const teamMembers = [
  {
    name: "Chris Turnbull Grimes, P.E.",
    title: "Managing Director",
    photo: teamChris,
  },
  {
    name: "Gelila Tesfaye",
    title: "Head of 3BL Studios",
    photo: teamGelila,
  },
  {
    name: "Yayne Zenebe",
    title: "Senior Project Manager",
    photo: teamYayne,
  },
  {
    name: "Fiker Dereje",
    title: "Senior Project Manager",
    photo: teamFiker,
  },
];

const MeetTheTeam = () => (
  <>
    <SEOHead
      title="Meet the Team"
      description="Get to know the leadership and project management team behind 3BL Studios — engineering-led BIM professionals serving contractors in Europe and the Middle East."
      path="/team"
    />

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
          Meet the <span className="text-gradient-brand">Team</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 text-lg text-steel max-w-3xl mx-auto"
        >
          The people behind 3BL Studios — experienced engineers and project managers committed to execution certainty.
        </motion.p>
      </div>
    </section>

    {/* Team Grid */}
    <section className="py-20 bg-background bg-grid-pattern">
      <div className="container max-w-5xl">
        <SectionHeading title="Our Team" subtitle="Driven by discipline. Built on trust." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group rounded-lg border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 hover:border-accent/30 hover:-translate-y-1"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-heading font-semibold text-foreground text-sm md:text-base leading-tight">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm mt-1">
                  {member.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default MeetTheTeam;
