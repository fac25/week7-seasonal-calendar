import Recipe from '../../components/Recipe.js'
import { loadRecipes } from '../../lib/loadRecipes.js'
import { loadVeg } from '../../lib/loadVeg.js'
import { camalize } from '../../lib/utils.js'

export async function getServerSideProps({ params }) {
    const currentMonthVegRecipeArray = [params.name]
    const currentMonthsRecipes = await loadRecipes(currentMonthVegRecipeArray)
    const allMonths = await loadVeg()

    const allYearVegArray = []

    allMonths.map((month) => {
        month.food.map((veg) => {
            allYearVegArray.push(veg.name)
        })
    })

    if (allYearVegArray.includes(camalize(params.name)) == false) {
        return { notFound: true }
    } else {
        return {
            props: {
                params: params.name,
                currentMonthsRecipes: currentMonthsRecipes,
            },
        }
    }
}

export default function RecipeSearch({ params, currentMonthsRecipes }) {
    return (
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold">{params}</h1>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto my-12">
                {currentMonthsRecipes.fetched.map((recipe) => (
                    <Recipe key={recipe.label} props={recipe} />
                ))}
            </div>
        </div>
    )
}
