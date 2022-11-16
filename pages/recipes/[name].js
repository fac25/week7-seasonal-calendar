// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//     res.status(200).json({ name: 'John Doe' })
//   }

// https://api.edamam.com/api/nutrition-data?app_id=cd596177&app_key=%20d3aae1ee2f6f3ae55aebc8f0d4c2662c&nutrition-type=logging&ingr=beetroot
// import { loadVeg } from '../lib/loadVeg.js'
import Image from 'next/image.js'
import Recipe from '../../components/Recipe.js'
import { loadRecipes } from '../../lib/loadRecipes.js'

export async function getServerSideProps({ params }) {
    // const allMonths = await loadVeg()
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
