'use client';
import { motion } from "framer-motion";
import ExperienceCard, { ExperienceProps } from "./ExperienceCard";
import experiences from '@/seed/experiences.json';

export default function WorkExperience() {
  const experiencesJson: ExperienceProps[] = experiences;
  
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className={"h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"}>
        <h3 className={"absolute top-14 uppercase tracking-[20px] text-xl text-gray-500"}>
                      Experiences
        </h3>
  
        <div className={"w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#99FF33]/80"}>
          {experiencesJson.map((exp, index) => (
            <ExperienceCard 
              key={index}
              imageUrl={exp.imageUrl}
              title={exp.title}
              org={exp.org}
              timestamp={exp.timestamp}
              description={exp.description}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
}