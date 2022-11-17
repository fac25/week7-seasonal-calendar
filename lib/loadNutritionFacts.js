const APIKey = process.env.API_Key_Nutrition
const APIId = process.env.API_Id_Nutrition

export async function loadNutritionFacts({ params }) {
    const res = await fetch(
        `https://api.edamam.com/api/nutrition-data?app_id=${APIId}&app_key=${APIKey}&nutrition-type=logging&ingr=${params.id}`
    )

    const myNutritionFacts = await res.json()

    return myNutritionFacts
}
