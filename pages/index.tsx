import Head from 'next/head'
import {Inter} from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {NextPage} from "next";
import Header from "@/components/Header";

const inter = Inter({subsets: ['latin']})

const Home: NextPage = () => {
    return (
        <>
            <div>
                <Head>
                    <title>Matheus Carneiro</title>
                    <meta name="description" content="Matheusin portfolio show"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>

                <Header />

                { /* Hero */}

                { /* About */}

                { /* Experience */}

                { /* Skills */}

                { /* Projects */}

                { /* Contact Me */}


            </div>
        </>
    )
}

export default Home
