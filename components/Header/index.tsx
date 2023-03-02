import { motion } from "framer-motion";
import React from "react";
import {SocialIcon} from "react-social-icons";

type Props = {}

const Header = ({}: Props) => {
    return (
        <>
            <header className={"sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center"}>
                {/* Social Icons */}
                <motion.div
                    initial={{
                        x: -500,
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 1.5
                    }}
                    className={"flex flex-row items-center"}>

                    <SocialIcon url={"https://www.linkedin.com/in/mtscarneiro23/"}
                                target={"_blank"} fgColor={"gray"}
                                bgColor={"transparent"}/>
                    <SocialIcon url={"https://www.linkedin.com/in/mtscarneiro23/"}
                                target={"_blank"} fgColor={"gray"}
                                bgColor={"transparent"}/>
                    <SocialIcon url={"https://www.linkedin.com/in/mtscarneiro23/"}
                                target={"_blank"} fgColor={"gray"}
                                bgColor={"transparent"}/>

                </motion.div>

                {/* Nav */}
                <motion.div
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 1
                    }}

                    className={"flex flex-row items-center text-gray-300 cursor-pointer"}>
                    <SocialIcon className={"cursor-pointer"}
                                network={"email"}
                                target={"_blank"} fgColor={"gray"}
                                bgColor={"transparent"}/>

                    <p className={"uppercase hidden md:inline-flex text-sm text-gray-400"}>
                        Get In Touch
                    </p>
                </motion.div>
            </header>
        </>
    )
}

export default Header
