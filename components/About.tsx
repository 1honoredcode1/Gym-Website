import * as motion from "motion/react-client";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-24 relative">
      <div className="absolute inset-0 -z-10">
        <motion.video
          src="/video/bg-vid.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-black font-heading mb-4 text-white"
          >
            About{" "}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              SwoleGym
            </span>
          </motion.h2>
        </div>

        {/* ➜ Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* LEFT SIDE — TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl  leading-relaxed text-white">
              SwoleGym is built for everyday people who want to unlock their
              full potential.
            </p>

            <p className="text-lg md:text-xl text-white leading-relaxed">
              Our coaches combine proven strength training methods with a
              supportive, no-ego community. Every session is designed to help
              you build strength, move better, and develop long-term habits.
            </p>

            <p className="text-lg md:text-xl text-white leading-relaxed">
              At SwoleGym, progress isn&apos;t just physical — it&apos;s mental,
              emotional, and lifestyle-driven.
            </p>
          </motion.div>

          {/* RIGHT SIDE — CARD */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-background/90 border border-border rounded-2xl shadow-sm p-6 md:p-8 space-y-6 hover:scale-110 duration-300"
          >
            <h3 className="font-semibold text-lg md:text-xl mb-2">
              Why athletes choose{" "}
              <span className="text-primary font-bold">SwoleGym</span>
            </h3>

            <ul className="space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
              <li>• Small group and 1:1 coaching for every level</li>
              <li>• Progressive strength & conditioning programs</li>
              <li>• Form-focused training to keep you injury-free</li>
              <li>• Community events, challenges, and check-ins</li>
            </ul>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 text-center ">
              {[
                { value: "500+", label: "Members trained" },
                { value: "4x", label: "Weekly classes" },
                { value: "24/7", label: "Gym access" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                >
                  <p className="text-2xl md:text-3xl font-black text-primary">
                    {item.value}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
