import {motion} from "framer-motion";
import React from "react";

type Props = {}

const Projects = ({}: Props) => {
    const projects: Array<number> = [1, 2, 3, 4, 5]

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

                <div className={"relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#99FF33]/80"}>
                    {projects.map((project, index) => (
                        <div
                            className={"w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"}>
                            <motion.img
                                initial={{
                                    y: -300,
                                    opacity: -10
                                }}
                                transition={{duration: 1.2}}
                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}
                                viewport={{once: true}}
                                className={"h-32 w-32 mx-auto"}
                                src="https://cdn.discordapp.com/attachments/1056264121240277032/1083154585876693002/image.png"
                                alt=""
                            />

                            <div className={"space-y-10 px-0 md:px-10 max-w-6xl"}>
                                <h4 className={"text-4xl font-semibold text-center"}>
                                    <span className={"underline decoration-[#99FF33]/50"}>
                                        Case Study {index + 1} of {projects.length}:
                                    </span> Netflix Clone
                                </h4>

                                <p className={"text-lg text-center md:text-left"}>
                                    Netflix 2.0 app that has a Log in and Log Out Authentication with Google. it has a
                                    beautiful Home Screen with all the movies looking Just like Netflix. There is also a
                                    subscription page where you can see your active monthly subscription. We also use
                                    Stripe Payments for the monthl) Netfix Subscriptions!
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={"w-full absolute top-[30%] bg-[#99FF33]/10 left-0 h-[500px] -skew-y-12"}>

                </div>
            </motion.div>
        </>
    )
}

export default Projects