//Abby
//id = 028ddd50
//key = c92dadc543313ce1263b60e163e014d0

//Joe
// id = 335bf1df
//key= 17461be20e941887107014ce72c1fc2e

export async function loadNutritionFacts({ params }) {
    const res = await fetch(
        `https://api.edamam.com/api/nutrition-data?app_id=335bf1df&app_key=17461be20e941887107014ce72c1fc2e &nutrition-type=logging&ingr=${params.id}`
    )

    // if (!res.ok) {
    //     const message = `An error has occured: ${res.status}`
    //     throw new Error(message)
    // }
    // console.log(res)
    const myNutritionFacts = await res.json()

    return myNutritionFacts
}

// loadNutritionFacts().catch((error) => {
//     error.message
// })
