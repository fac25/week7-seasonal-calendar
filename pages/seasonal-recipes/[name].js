import Recipe from '../../components/Recipe.js'
import { loadRecipes } from '../../lib/loadRecipes.js'

export async function getServerSideProps({ params }) {
    const currentMonthVegRecipeArray = [params.name]
    const currentMonthsRecipes = await loadRecipes(currentMonthVegRecipeArray)

    return {
        props: {
            params: params.name,
            currentMonthsRecipes: currentMonthsRecipes,
        },
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
