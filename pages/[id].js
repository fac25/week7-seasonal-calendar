// https://api.edamam.com/api/nutrition-data?app_id=cd596177&app_key=%20d3aae1ee2f6f3ae55aebc8f0d4c2662c&nutrition-type=logging&ingr=beetroot
import { loadVeg } from '../lib/loadVeg.js'
import Nutrition from '../components/Nutrition.js'
import { loadNutritionFacts } from '../lib/loadNutritionFacts.js'
import { camalize } from '../lib/utils.js'
import Image from 'next/image.js'
import Recipe from '../components/Recipe.js'
import { loadRecipes } from '../lib/loadRecipes.js'

export async function getServerSideProps({ params }) {
    const vegetables = await loadNutritionFacts({ params })
    const allMonths = await loadVeg()
    const currentMonthVegRecipeArray = [params.id]
    const currentMonthsRecipes = await loadRecipes(currentMonthVegRecipeArray)
    if (vegetables['ingredients'][0]['parsed'] === undefined) {
        return { notFound: true } //return 404 page
    } else {
        return {
            props: {
                vegetables:
                    vegetables['ingredients'][0]['parsed'][0]['nutrients'],
                params: params.id,
                vegapi: allMonths,
                currentMonthsRecipes: currentMonthsRecipes,
            },
        }
    }
}

export default function SingleVeg({
    vegetables,
    params,
    vegapi,
    currentMonthsRecipes,
}) {
    // iterating through all the vegs in food array and return only if matches current Veg
    // to render the image
    const currentVeg = []
    vegapi.map((month) => {
        month.food.map((veg) => {
            if (veg.name === camalize(params)) {
                return currentVeg.push({
                    name: veg.name,
                    image: veg.imageUrlSmall,
                })
            }
        })
    })
    // console.log(currentVeg)
    const arr = [
        vegetables.VITD,
        vegetables.ENERC_KCAL,
        vegetables.VITA_RAE,
        vegetables.PROCNT,
        vegetables.TOCPHA,
        vegetables.CHOCDF,
        vegetables.FIBTG,
        vegetables.VITB6A,
        vegetables.VITB12,
        vegetables.K,
        vegetables.NA,
        vegetables.SUGAR,
        vegetables.CA,
    ]

    return (
        <div className="container mx-auto">
                <div className="flex flex-row py-6">
                    <div className=" h-24 w-24 md:w-40 md:h-40 lg:w-48 lg:h-48 2xl:w-64 2xl:h-64">
                        <Image
                            src={currentVeg[0].image}
                            width={300}
                            height={300}
                            alt={currentVeg[0].name}
                            className="object-cover h-full w-full rounded-full"
                        />
                    </div>
                    <div className="w-64">
                        <h1 className="text-2xl">~~ {camalize(params)}</h1>
                        <p>
                            Veggies es bonus vobis, proinde vos postulo essum
                            magis kohlrabi welsh onion daikon amaranth tatsoi
                            tomatillo melon azuki bean garlic. Gumbo bite greens
                            corn soko endive gumbo gourd. Parsley shallot
                            zucchini tatsoi pea sprouts fava bean collard greens
                            dandelion okra wakame tomato. Dandelion cucumber
                            earthnut pea peanut soko zucchini.
                        </p>
                    </div>
                </div>
            <section>
                <h2 className="text-xl">Nutrition Facts</h2>
                <table>
                    <tbody>
                        {arr.map((el, index) =>
                            el !== undefined ? (
                                <tr key={index}>
                                    <td>
                                        <Nutrition nutrition={el} />
                                    </td>
                                </tr>
                            ) : (
                                ''
                            )
                        )}
                    </tbody>
                </table>
                <h2>Recipes</h2>
                {currentMonthsRecipes.fetched.map((recipe) => (
                    <Recipe key={recipe.label} props={recipe} />
                ))}
            </section>
        </div>
    )
}
