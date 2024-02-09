'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";


export default function Header() {
    return (
      <>
        <header className={"sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center"}>
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
            <SocialIcon url={"https://github.com/m-carneiro"}
              target="_blank" fgColor={"gray"} 
              bgColor={"transparent"}/>
            <SocialIcon url={"https://www.instagram.com/entwicklersec/"}
              target={"_blank"} fgColor={"gray"}
              bgColor={"transparent"}/>
  
          </motion.div>
  
          <Link href="#contact-me">
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
  
              <div>
                <SocialIcon
                  className={"cursor-pointer"}
                  network={"email"}
                  fgColor={"gray"}
                  bgColor={"transparent"}/>
                <p className={"uppercase hidden md:inline-flex text-sm text-gray-400"}>
                                  Get In Touch
                </p>
              </div>
            </motion.div>
          </Link>
        </header>
      </>
    );
  }