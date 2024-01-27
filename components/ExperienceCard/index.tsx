import React from "react";
import {motion} from "framer-motion";

export type ExperienceProps = {
    imageUrl: string,
    title: string,
    org: string,
    timestamp: string,
    description: string,
}

const ExperienceCard = ({imageUrl, title, org, timestamp, description}: ExperienceProps) => {
    return (
        <>
            <article className={"flex flex-col text-center rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transaction-opacity duration-200 overflow-hidden"}>
                <motion.img
                    initial={{
                        y: -100,
                        opacity: 0
                    }}
                    transition={{
                        duration: 1.2
                    }}
                    viewport={{once: true}}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    className="w-32 h-32 rounded-full xl:w-[200px] wl:h-[200px] object-cover object-center"
                    src={imageUrl}
                    alt={""}
                />
                <div className={"flex-col px-0 md:px-10 justify-center items-center"}>
                    <h4 className={"text-3xl font-light"}>{title}</h4>
                    <p className={"font-bold text-1xl mt-1"}>@ {org}</p>

                    <p className={"uppercase py-5 text-gray-300"}>
                        {timestamp}
                    </p>

                    <p className={"space-y-4 ml-5 text-sm "}>
                        {description}
                    </p>
                </div>

            </article>
        </>
    )
}

export default ExperienceCard