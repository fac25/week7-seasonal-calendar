export async function loadNutritionFacts({ params }) {
    const res = await fetch(
        `https://api.edamam.com/api/nutrition-data?app_id=cd596177&app_key=%20d3aae1ee2f6f3ae55aebc8f0d4c2662c&nutrition-type=logging&ingr=${params.id}`
    )

    if (!res.ok) {
        const message = `An error has occured: ${res.status}`
        throw new Error(message)
    }
    // console.log(res)
    const myNutritionFacts = await res.json()

    return myNutritionFacts
}

loadNutritionFacts().catch((error) => {
    error.message
})
