import Head from 'next/head'
import {NextPage} from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import React from "react";
import ContactMe from "@/components/ContactMe";

const Home: NextPage = () => {
    return (
        <>
            <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#99FF33]/80">
                <Head>
                    <title>Matheus Carneiro</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>

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

                { /* Skills */}
                <section id={"skills"} className={"snap-center"}>
                    <Skills />
                </section>

                { /* Projects */}
                <section id={"projects"} className={"snap-center"}>
                    <Projects />
                </section>

                { /* Contact Me */}
                <section id={"contact-me"} className={"snap-center"}>
                    <ContactMe />
                </section>


            </div>
        </>
    )
}

export default Home
