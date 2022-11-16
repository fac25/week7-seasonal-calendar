import { useContext } from 'react'
import Head from 'next/head'
import { loadVeg } from '../lib/loadVeg.js'
import GlobalMonth from '../lib/GlobalMonth'
import Recipe from '../components/Recipe.js'
import VegNameGrid from '../components/VegNameGrid'
import { loadRecipes } from '../lib/loadRecipes.js'

const currentMonth = new Date().getMonth()

export async function getStaticProps() {
    const allMonths = await loadVeg()
    const currentMonthData = allMonths[currentMonth]
    const currentMonthVegArray = currentMonthData.food.map((veg) => veg.name)
    const currentMonthsRecipes = await loadRecipes(currentMonthVegArray)
    
    return { props: { allMonths, currentMonthsRecipes }, revalidate: 604800 } //revalidate once every week
}

export default function Home({ allMonths, currentMonthsRecipes }) {
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
                   
                    <VegNameGrid allMonths={allMonths} index={currentMonth} />
                    <h2>Recipes</h2>
                    {currentMonthsRecipes.fetched.map((recipe) => (
                        <Recipe key={recipe.label} props={recipe} />
                    ))}
                </div>
            </main>

            <footer></footer>
        </div>
    )
}
