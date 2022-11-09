// Fetch API

// Lisa's Key
// const APIKey = '6fd0e8c2b9b844d4bf8f118d6bb6ebe8'
// Abby's Key
// const APIKey = '66bcc079f58d40fb9e98d5a5e5c492dc'
// Abby's second Key (8th Nov 13:24)
// const APIKey = 'e301a3ce6bb142c0a34efe94ca54f4a9'
//Edamam API

const APIKey = 'd7dbb7ec7bbca26af0c2a02a77d30d9a'

export async function loadRecipes(allVegArray) {
    // const vegName = ['apple', 'lettuce']
    const vegArray = []
    // const myVeg = allVegArray
    for (const veg of allVegArray) {
        const res = await fetch(
            `https://api.edamam.com/api/recipes/v2?type=public&q=${veg}&app_id=79e5508c&app_key=${APIKey}&dishType=Main%20course&imageSize=THUMBNAIL&field=label&field=image&field=url&field=ingredientLines&field=totalCO2Emissions`
        )
        const recipeArray = await res.json()
        vegArray.push(recipeArray)
        return { fetched: vegArray }
    }
}
// const res = await fetch(
//     `https://api.spoonacular.com/recipes/complexSearch?includeIngredients=tomato&potato&apiKey=${APIKey}`
// )
// const res = await fetch(
//     `https://api.spoonacular.com/recipes/findByIngredients?ingredients=apple&apiKey=${APIKey}`
// )
// const data = await res.json()
// // https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+cabbage&number=2&apiKey=6fd0e8c2b9b844d4bf8f118d6bb6ebe8
// return data
// }
//https://api.edamam.com/api/recipes/v2?type=public&q=apple&app_id=79e5508c&app_key=%20d7dbb7ec7bbca26af0c2a02a77d30d9a%09&field=ingredients
//https://api.edamam.com/api/recipes/v2?type=public&q=apple&app_id=79e5508c&app_key=%20d7dbb7ec7bbca26af0c2a02a77d30d9a%09&dishType=Main%20course&imageSize=THUMBNAIL&field=label&field=image&field=url&field=ingredientLines&field=totalCO2Emissions
