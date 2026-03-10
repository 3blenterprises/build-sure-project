import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import teamChris from "@/assets/team-chris.png";
import teamGelila from "@/assets/team-gelila.png";
import teamYayne from "@/assets/team-yayne.png";
import teamFiker from "@/assets/team-fiker.png";

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

const TeamSection = () => (
  <section className="py-20 bg-background bg-grid-pattern">
    <div className="container max-w-5xl">
      <SectionHeading title="Meet the Team" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {teamMembers.map((member, i) => (
          <motion.div
            key={member.name}
            variants={fadeUp}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group rounded-lg border border-border bg-card overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:shadow-accent/10 hover:border-accent/30"
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
);

export default TeamSection;
