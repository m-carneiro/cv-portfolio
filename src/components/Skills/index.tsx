import { motion } from "framer-motion";
import Skill from "./Skill";

export default function Skills() {
  const skills = [
    {
      language: "java",
      proficiency: "100%",
    },
    {
      language: "typescript",
      proficiency: "100%",
    },
    {
      language: "go",
      proficiency: "100%",
    },
    {
      language: "python",
      proficiency: "100%",
    },
    {
      language: "rust",
      proficiency: "30%",
    },
    {
      language: "SAST",
      proficiency: "100%",
    },
    {
      language: "DAST",
      proficiency: "100%",
    },
    {
      language: "Pentest",
      proficiency: "100%",
    },
  ];

  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className={
          "h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
        }
      >
        <h3
          className={
            "absolute top-24 uppercase tracking-[20px] text-2xl text-gray-500"
          }
        >
          Skills
        </h3>

        <h3
          className={
            "absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm"
          }
        >
          Hover over a skill for current proficiency
        </h3>

        <div className={"grid grid-cols-4 gap-5 "}>
          {skills.map((skill, index) => (
            <Skill
              directionLeft={index % 2 === 0}
              key={index}
              language={skill.language}
              proficiency={skill.proficiency}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
}
