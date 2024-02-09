'use client';
import { motion } from "framer-motion";
import Skill from "./Skill";

export default function Skills() {
  const skills = [
    {
      language: "java",
      proficiency: "100%",
      frameworks: ["spring", "spring boot", "spring cloud", "spring security"]
    },
    {
      language: "typescript",
      proficiency: "100%",
      frameworks: ["react", "nextjs", "express", "nestjs"]
    },
    {
      language: "go",
      proficiency: "100%",
      frameworks: ["gin", "fiber", "echo"]
    },
    {
      language: "python",
      proficiency: "100%",
      frameworks: ["flask", "django", "fastapi"]
    },
    {
      language: "rust",
      proficiency: "30%",
      frameworks: ["actix", "rocket", "warp"]
    },
    {
      language: "SAST",
      proficiency: "100%",
      frameworks: ["fortify", "checkmarx", "veracode"]
    },
    {
      language: "DAST",
      proficiency: "100%",
      frameworks: ["burp", "tenable", "acunetix"]
    },
    {
      language: "Pentest",
      proficiency: "100%",
      frameworks: ["nmap", "metasploit", "sqlmap", "..."]
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
              frameworks={skill.frameworks}
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
