import React from "react";
import { motion } from "motion/react";
import { User, ShieldCheck, Cpu, Lightbulb } from "lucide-react";
import SectionTag from "../ui/SectionTag";
import SectionTitle from "../ui/SectionTitle";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section id="about" className="py-20 bg-paper/20 border-y border-wood-light/10 relative overflow-hidden">
      {/* Subtle Dot Grid pattern in background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none notebook-grid" />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Column: Personalized Narrative Story */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-7 space-y-6"
        >
          <SectionTag icon="🌱">A Little About Me</SectionTag>

          <SectionTitle
            title="Building Curious Mindset in Mind"
            subtext="Curiousity make me the person i am today"
          />

          <div className="font-body text-lg text-ink space-y-4 leading-relaxed max-w-2xl">
            <p>
              Hi, Myra speaking here, ...
            </p>
            <p>
              I came from Tanjung Balai Karimun, small island from Kepulauan Riau. My curiousity of growth led me to Kudus, Jawa Tengah to continue my study at SMK Raden Umar Said Kudus. 
              Being faaaar from home has taught me many things about getting on my own, adaptability with surroundings, even managing my own personal life with responsibility.
              Kind of experience that make me realize how important it is to make sure my future life stay in shape.
            </p>
            <p>
              Since entering Vocational Highschool back in 2024, I tend to take my highschool era as "Opportunity" to grow myself up and learning new things
              {" "}
              <strong className="text-wood-dark font-medium font-display italic">
                “Theres strong urge to make sure using all facilities for my growth"
              </strong>{" "} 
              Thus, since 10th grade, i've tried many things with main goal is to push myself growing and growing. I once joined Game Design Document making competition about Virtual Reality Game despite that "I havent even play Virtual Reality game once", 
              i just believe in my imagination and just shoot the shot. Well, made it to Top 10 final and having discussion with judges makes me believe to try even more in learning.
            </p>
            <p>
              Another time i also assigned for LKS Cloud Computing while having 0 knowledge about it. Thank God, mentors in my school are supportive that they believe in me. This was a big challenge knowing that i need to make sure having consistency in learning this so new field for me.
              Glad to say i made it to region stage and given Medallion of Excellence title for it. Again, i learnt how to keep consistency thru competition.
            </p>
            <p>
              I also like to challenge myself handing communication and social by joining a project with my mentor, there i learn how to discuss with clients about needs and make a product based on it. 
            </p>
            <strong className="text-wood-dark font-medium font-display italic">
                “Cuz for me, theres no lose if the main goal is for experience"
            </strong>
          </div>
        </motion.div>

        {/* Right Column: Dynamic Binder Notebook Sheet displaying her Core Principles */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 85 }}
          className="lg:col-span-5 relative"
        >
          {/* Notebook binder container */}
          <div className="bg-card-warm border border-wood-light/25 rounded-md p-6 shadow-md relative overflow-hidden">
            {/* Binder rings illustration on the left margin */}
            <div className="absolute left-0 top-0 bottom-0 w-4 flex flex-col justify-space-around items-center py-4 border-r border-dashed border-wood-light/15 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-5 h-2.5 bg-zinc-300 border border-zinc-400 rounded-full my-auto transform -translate-x-1.5" />
              ))}
            </div>

            {/* Content within notebooks margin */}
            <div className="pl-6 space-y-6">
              <div className="border-b border-wood-light/20 pb-3">
                <h3 className="font-display font-semibold italic text-lg text-wood-dark">
                  Myra's Desk Principles
                </h3>
                <span className="font-mono text-[10px] text-ink-muted">FIND OUT · LEARN · ADAPT</span>
              </div>

              {/* Principle 1 */}
              <div className="flex gap-4 items-start">
                <div className="p-2 rounded bg-amber/5 text-amber">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-medium text-sm text-wood-dark leading-tight">ALWAYS ask why</h4>
                  <p className="font-body text-xs text-ink-light">Find out why should it be done that way, why not the other way? can i build my own way?</p>
                </div>
              </div>

              {/* Principle 2 */}
              <div className="flex gap-4 items-start">
                <div className="p-2 rounded bg-sage/10 text-sage">
                  <Cpu className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-medium text-sm text-wood-dark leading-tight">Much to learn if you look up</h4>
                  <p className="font-body text-xs text-ink-light">Learn smart, not just hard</p>
                </div>
              </div>

              {/* Principle 3 */}
              <div className="flex gap-4 items-start">
                <div className="p-2 rounded bg-blue-accent/10 text-blue-accent">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-medium text-sm text-wood-dark leading-tight">Be Adaptable, why would you limit yourself?</h4>
                  <p className="font-body text-xs text-ink-light">Sticking to one method only, seriously? in this big 2026?</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky badge overlay */}
          <div className="absolute -bottom-4 right-1 bg-wood-dark text-cream font-mono text-xxs px-2.5 py-1 shadow-xs border border-white/10 rounded-sm rotate-2">
            STABLE EDITION
          </div>
        </motion.div>
      </div>
    </section>
  );
}
