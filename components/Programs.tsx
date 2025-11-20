import { gymPrograms } from "@/lib/constants";
import * as motion from "motion/react-client";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

const Programs = () => {
  return (
    <section id="programs" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-black font-heaidng mb-4 text-foreground"
          >
            Our Programs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Our programs combine strength, cardio, and mobility training to help
            members of all levels reach their fitness goals.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {gymPrograms.map((program, index) => (
            <motion.div className="group cursor-pointer" key={program.title}>
              <Card className="p-0 transition-shadow shadow-primary/40 duration-300 hover:shadow-2xl group-hover:scale-105 ">
                <div className="relative overflow-hidden rounded-t-lg w-full h-60 md:h-40 lg:h-40">
                  <Image
                    src={program.image}
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={program.title}
                  />
                </div>
                <CardContent className="p-6 pt-0">
                  <motion.h3
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: index * 0.2,
                    }}
                    className="text-xl font-bold font-heading mb-3 text-foreground group-hover:text-primary transition-colors"
                  >
                    {program.title}{" "}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: index * 0.3,
                    }}
                    className="text-muted-foreground mb-4 leading-relaxed"
                  >
                    {program.description}{" "}
                  </motion.p>
                  <Button
                    variant={"primary"}
                    className="w-full transition-colors duration-300 group-hover:bg-primary"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
