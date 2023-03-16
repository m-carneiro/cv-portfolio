import React from "react";
import {motion} from "framer-motion";
import ExperienceCard from "@/components/ExperienceCard";

type Props = {}

const WorkExperience = ({}: Props) => {
    return (
        <>
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1.2}}
                className={"h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"}>
                <h3 className={"absolute top-14 uppercase tracking-[20px] text-2xl text-gray-500"}>
                    Experience
                </h3>

                <div className={"w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#99FF33]/80"}>
                    <ExperienceCard />
                    <ExperienceCard />
                    <ExperienceCard />

                </div>
            </motion.div>
        </>
    )
}

export default WorkExperience