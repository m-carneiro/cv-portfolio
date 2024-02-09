'use client';
import { motion } from "framer-motion";
import ag from "../../public/images/ag.png";
import projectsJson from '@/seed/projects.json';

type ProjectsProps = {
  id: string,
  imageUrl: string,
  title: string,
  description: string,
};


export default function Projects() {
  const projects: ProjectsProps[] = projectsJson;

  return (
    <>
      <motion.div
        initial={{
          opacity: 0
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className={"h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"}>
        <h3 className={"absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl"}>
                    Projects
        </h3>

        <div className={"relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#99FF33]/80"}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={"w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen gap-12"}>

              {project.id === "agrigoldens-coin-hub" ? (
                <motion.img
                  initial={{
                    y: -300,
                    opacity: -10
                  }}
                  transition={{ duration: 1.2 }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  viewport={{ once: true }}
                  className={"h-40 w-40 mx-auto rounded-full"}
                  src={ag.src}
                  alt={project.title}
                />
              ): (

                <motion.img
                  initial={{
                    y: -300,
                    opacity: -10
                  }}
                  transition={{ duration: 1.2 }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  viewport={{ once: true }}
                  className={"h-32 w-32 mx-auto rounded-full"}
                  src={project.imageUrl}
                  alt={project.title}
                />
              )}

              <div className={"space-y-10 px-0 md:px-10 max-w-3xl flex flex-col text-center w-3/3 xl:items-center"}>
                <h4 className="text-2xl">
                  <span className={"underline decoration-[#99FF33]/50"}>
                                        Case #{index + 1}/{projects.length}: <br></br>
                  </span>
                </h4>
                <h4 className={"text-3xl font-semibold text-center"}>
                  {project.title}
                </h4>

                <p className={"text-md md:text-left xl:w-2/3 xl:text-center"}>
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={"w-full absolute top-[30%] bg-[#99FF33]/10 left-0 h-[500px] -skew-y-12"}>

        </div>
      </motion.div>
    </>
  );
}