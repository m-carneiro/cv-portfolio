import React from "react";
import {motion} from "framer-motion";

type Props = {}

const ExperienceCard = ({}: Props) => {
    return (
        <>
            <article className={"flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transaction-opacity duration-200 overflow-hidden"}>
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
                    src={"https://www.stickersdevs.com.br/wp-content/uploads/2020/09/google-logo-sticker-adesivo.jpg"}
                    alt={""}
                />
                <div className={"flex-col px-0 md:px-10 justify-center items-center"}>
                    <h4 className={"text-3xl font-light"}>Application Security Specialist</h4>
                    <p className={"font-bold text-1xl mt-1"}>VIA Ehub</p>
                    <div className={"flex space-x-2 my-2"}>
                        {/* Tech Used */}
                    </div>

                    <p className={"uppercase py-5 text-gray-300"}>
                        OCT 21 2022 - present
                    </p>

                    <ul className={"list-disc space-y-4 ml-5 text-sm "}>
                        <li>Summary pointsSummary pointsSummary points</li>
                        <li>Summary pointsSummary pointsSummary points</li>
                        <li>Summary pointsSummary pointsSummary points</li>
                        <li>Summary pointsSummary pointsSummary points</li>
                        <li>Summary pointsSummary pointsSummary points</li>
                    </ul>
                </div>

            </article>
        </>
    )
}

export default ExperienceCard