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
            <h1>{params}</h1>

            <div>
                {currentMonthsRecipes.fetched.map((recipe) => (
                    <Recipe key={recipe.label} props={recipe} />
                ))}
            </div>
        </div>
    )
}
