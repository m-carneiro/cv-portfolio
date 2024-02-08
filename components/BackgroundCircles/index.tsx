import React from 'react';
import { motion } from "framer-motion";

type Props = {}
const BackgroundCircles = ({}: Props) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                scale: [1,2,2,2,1],
                opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
            }}
            transition={{
                duration: 1.5
            }}

            className={"relative flex items-center justify-center mt-[120px]"}>
            <div className="absolute border border-[#99FF33] h-[200px] mt-52 rounded-full w-[200px] animate-ping" />
            <div className="absolute border border-[#333333] h-[300px] mt-52 rounded-full w-[300px]" />
            <div className="absolute border border-[#333333] h-[500px] mt-52 rounded-full w-[500px]"/>
            <div className="absolute border border-[#99FF33] h-[650px] mt-52 rounded-full w-[650px] animate-pulse opacity-20"/>
        </motion.div>
    );
};

export default BackgroundCircles;
