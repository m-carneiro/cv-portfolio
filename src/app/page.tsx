'use client';
import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <>
      <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#99FF33]/80">
        <Header/>

        <section id={"hero"} className={"snap-center"}>
          <Hero/>
        </section>

        <section id={"about"} className={"snap-center"}>
          <About/>
        </section>

        <section id={"experience"} className={"snap-center"}>
          <WorkExperience />
        </section>

        <section id={"skills"} className={"snap-center"}>
          <Skills />
        </section>

        <section id={"projects"} className={"snap-center"}>
          <Projects />
        </section>

        <section id={"contact-me"} className={"snap-center"}>
          <ContactMe />
        </section>

      </div>
    </>
  );
}
