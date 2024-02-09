import Link from "next/link";
import Image from "next/image";
import profilePic from "../../public/images/me.jpeg";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

const Hero = () => {
    const [text] = useTypewriter({
      words: [
        "Hello, My Name is Matheus",
        "Let's make everything secured",
        "Leading teams to the next level",
      ],
      loop: true,
      delaySpeed: 2000
    });
  
    return (
      <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles/>
        <Image className={"relative rounded-full h-32 w-32 mx-auto object-cover"} src={profilePic} alt={"Me"}/>
        <div className={"z-20"}>
          <h2 className={"text-sm uppercase text-gray-500 pb-2 tracking-[10px]"}>Application Security Specialist</h2>
          <h1 className={"text-2xl lg:text-5xl font-semibold px-10"}>
            <span className={"mr-3 text-2xl"}>{text}</span>
            <Cursor cursorColor={"#ebf20c"}/>
          </h1>
  
          <div className={"pt-5"}>
            <Link href={"#about"}>
              <button type='button' className={"heroButton"}>About</button>
            </Link>
            <Link href={"#experience"}>
              <button type='button' className={"heroButton"}>Experience</button>
            </Link>
            <Link href={"#skills"}>
              <button type='button' className={"heroButton"}>Skills</button>
            </Link>
            <Link href={"projects"}>
              <button type='button' className={"heroButton"}>Projects</button>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;
  