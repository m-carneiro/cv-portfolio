import Head from 'next/head'
import {Inter} from 'next/font/google'
import {NextPage} from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";

const inter = Inter({subsets: ['latin']})

const Home: NextPage = () => {
    return (
        <>
            <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
                <Head>
                    <title>Matheus Carneiro</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>

                <Header/>

                { /* Hero */}
                <section id={"hero"} className="snap-start">
                    <Hero/>
                </section>

                { /* About */}
                <About />

                { /* Experience */}

                { /* Skills */}

                { /* Projects */}

                { /* Contact Me */}


            </div>
        </>
    )
}

export default Home
