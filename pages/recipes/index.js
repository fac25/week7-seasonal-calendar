import Head from 'next/head'
import { loadVeg } from '../../lib/loadVeg.js'
import { loadRecipes } from '../../lib/loadRecipes.js'

const currentMonth = new Date().getMonth()

export async function getStaticProps() {
    const allveg = await loadVeg()
    const currentMonthData = allveg[currentMonth]
    // console.log(currentMonthData)
    const allVegArray = currentMonthData.food.map((veg) => veg.name)
    // console.log(allVegArray) ['apple', 'lettuce', ...]

    const allrecipes = await loadRecipes(allVegArray)
    console.log('L.15')
    console.log(allrecipes)

    return {
        props: { allrecipes },
    }
}

export default function Home({}) {
    return (
        <div className="bg-pink-200">
            <Head>
                {/* <title>{currentMonthData.name}</title> */}
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>Recipes Page</h1>
                {/* <div>{allrecipes[0][0].id}</div> */}
            </main>

            <footer></footer>
        </div>
    )
}
