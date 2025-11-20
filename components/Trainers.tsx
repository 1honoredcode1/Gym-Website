import * as motion from "motion/react-client";
import TrainersContent from "./TrainersContent";

const Trainers = () => {
  return (
    <section id="trainers" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-black font-heaidng mb-4 text-foreground"
          >
            Meet Our Coaches
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Meet with your future coaches.
          </motion.p>
        </div>
        <TrainersContent />
      </div>
    </section>
  );
};

export default Trainers;
