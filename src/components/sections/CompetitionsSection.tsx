import React from "react";
import { motion } from "motion/react";
import { Trophy, Award, Medal, Compass, CheckCircle } from "lucide-react";
import { competitions } from "../../data";
import SectionTag from "../ui/SectionTag";
import SectionTitle from "../ui/SectionTitle";

export default function CompetitionsSection() {
  // Badges color configuration representing real tactile seals
  const badges = {
    gold: {
      bg: "bg-[#FFF2CC] border-[#F5D76E] text-[#B25E00]",
      icon: <Trophy className="w-5 h-5 text-amber animate-bounce duration-3000" />,
      label: "Gold Laurels"
    },
    silver: {
      bg: "bg-[#EAECF0] border-[#D0D5DD] text-[#344054]",
      icon: <Medal className="w-5 h-5 text-wood-mid" />,
      label: "Silver Laurels"
    },
    green: {
      bg: "bg-[#E6F4EA] border-[#A8DAB5] text-[#137333]",
      icon: <Award className="w-5 h-5 text-sage" />,
      label: "Honorary Tag"
    },
    blue: {
      bg: "bg-[#E8F0FE] border-[#ADCCF9] text-[#174EA6]",
      icon: <Award className="w-5 h-5 text-blue-accent" />,
      label: "Excellence Badge"
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <section id="competitions" className="py-20 max-w-6xl mx-auto px-6 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full">
        {/* Left Side: Title and Competition values (4 columns in desktop layout) */}
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
          <SectionTag icon="🏆">Beyond Classrooms</SectionTag>
          <SectionTitle
            title="Challenge and Growth"
            subtext="Joining competition is my way to test my knowledge and to know how far can i cope down. Oftenly, i blindly shoot the shot and join a match where i have nearly 0 experiece in. Fueled up by ambition to nailed up something"
          />

          {/* Quick takeaway checklist */}
          <div className="bg-card-warm border border-wood-light/20 p-5 rounded-md space-y-3 shadow-xs">
            <h4 className="font-display font-medium text-sm text-wood-dark border-b border-wood-light/10 pb-2">
              Values Learned :
            </h4>
            <ul className="space-y-2.5">
              {[
                "To stay calm in various situation",
                "Adaptively learn new things",
                "Coping up and solve problems with teammate",
                "Time management"
              ].map((text) => (
                <li key={text} className="flex gap-2 items-start text-xs font-body text-ink">
                  <CheckCircle className="w-3.5 h-3.5 text-sage shrink-0 mt-0.5" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side: Certified Competition Awards Grid list (8 columns in desktop layout) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-8 space-y-6"
        >
          {competitions.map((comp) => (
            <motion.div
              key={comp.id}
              whileHover={{ x: 6 }}
              className="bg-card-warm border border-wood-light/25 rounded-md p-6 shadow-xs flex flex-col md:flex-row gap-5 items-start justify-between relative group hover:border-wood-light/45 hover:shadow-sm transition-all duration-300"
            >
              {/* Achievement Badge (Left corner sticker) */}
              <div className="flex gap-4 items-start flex-grow">
                {/* Visual Seal Icon */}
                <div className={`p-3 rounded-full border ${badges[comp.badge].bg} shrink-0`}>
                  {badges[comp.badge].icon}
                </div>

                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-wood-dark">
                      {comp.achievement}
                    </span>
                    {comp.scope && (
                      <>
                        <span className="w-1 h-1 bg-ink-muted rounded-full" />
                        <span className="font-sans text-xs text-ink-muted">{comp.scope}</span>
                      </>
                    )}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-wood-dark leading-tight">
                    {comp.name}
                  </h3>
                  <p className="font-body text-base text-ink-light leading-relaxed">
                    {comp.description}
                  </p>
                </div>
              </div>

              {/* Year Stamp */}
              <div className="md:self-start lg:self-center font-mono text-xs text-wood-dark bg-paper/50 px-2 py-1 rounded">
                🏆 {comp.year}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
