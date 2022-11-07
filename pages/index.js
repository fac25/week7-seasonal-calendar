import Head from 'next/head'
import { loadVeg } from '../lib/loadVeg.js'

const currentMonth = new Date().getMonth()

export async function getStaticProps() {
    const allMonths = await loadVeg()
    const currentMonthData = allMonths[currentMonth]
    console.log(currentMonthData)
    return { props: { currentMonthData } }
}

export default function Home({ currentMonthData }) {
    // console.log(allMonths)
    return (
        <div className="bg-pink-200">
            <Head>
                <title>{currentMonthData.name}</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
    
            <main>
                <div></div>

                <h1 className="text-2xl text-blue-600">
                    {currentMonthData.name}
                </h1>
            </main>

            <footer></footer>
        </div>
    )
}
