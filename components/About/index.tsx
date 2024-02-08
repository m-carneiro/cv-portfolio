import React from "react";
import {motion} from "framer-motion";

export default function About() {
    return (
        <>
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1.2}}
                className={"flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"}>
                <h3 className={"absolute top-10 uppercase tracking-[20px] text-2xl text-gray-500"}>
                    About
                </h3>

                <motion.img
                    initial={{
                        x: -200,
                        opacity: 0
                    }}
                    transition={{
                        duration: 1.2
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1
                    }}
                    src={"https://i.postimg.cc/4Nqc7cPj/eu.jpg"}
                    alt={"Also me"}
                    className={"-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-full md:2-64 md:h-96 xl:w-[500px] xl:h-[500px]"}/>

                <div className={"space-y-10 px-0 md:px-10"}>
                    <h4 className={"text-4xl font-semibold "}>Here is a <span
                        className={"underline decoration-[#99FF33]/50"}>little</span> background
                    </h4>
                    <p className="text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis tincidunt molestie. Aliquam
                        accumsan purus at nisl semper, nec commodo massa placerat. Integer tempus, justo ut porta
                        commodo, ligula libero consectetur dui, sed laoreet turpis nisi eu ante. Donec vulputate nec
                        libero et lacinia. Cras sollicitudin convallis pretium. Donec ex ligula, semper sed lorem non,
                        ullamcorper vulputate dolor. Nulla vel lorem velit. Fusce imperdiet mauris auctor, pharetra urna
                        vel, finibus mi. Aenean eros enim, blandit ac enim nec, dignissim mollis orci. Aliquam fermentum
                        leo ut risus dapibus, vitae malesuada orci egestas. Nunc commodo est quis volutpat accumsan.
                        Nulla id aliquam eros.
                    </p>
                </div>
            </motion.div>
        </>
    )
}