import { useContext } from 'react'
import Head from 'next/head'
import { loadVeg } from '../lib/loadVeg.js'
import GlobalMonth from '../lib/GlobalMonth'
import Recipe from '../components/Recipe.js'
import VegNameGrid from '../components/VegNameGrid'
import { loadRecipes } from '../lib/loadRecipes.js'

export async function getStaticProps() {
    const allMonths = await loadVeg()
    const allRecipes = await loadRecipes(['apple', 'carrot'])
    return { props: { allMonths, allRecipes } }
}

export default function Home({ allMonths, allRecipes }) {
    const currentMonth = useContext(GlobalMonth)
    const currentMonthData = allMonths[currentMonth]
    // allMonths is an array of objects
    return (
        <div className="bg-pink-200">
            <Head>
                <title>Seasonal Calendar</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="container mx-auto">
                    <h1 className="text-2xl text-blue-600">
                        {' '}
                        Seasonal Calendar{' '}
                    </h1>
                    {/* <p>{currentMonthData.name}</p> */}
                    {/* <Recipe props={allRecipes} /> */}
                    <VegNameGrid allMonths={allMonths} index={currentMonth} />
                </div>
            </main>

            <footer></footer>
        </div>
    )
}
