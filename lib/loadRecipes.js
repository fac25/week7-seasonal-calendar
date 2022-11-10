// Fetch API

// Lisa's Key
// const APIKey = '6fd0e8c2b9b844d4bf8f118d6bb6ebe8'
// Abby's Key
// const APIKey = '66bcc079f58d40fb9e98d5a5e5c492dc'
// Abby's second Key (8th Nov 13:24)
// const APIKey = 'e301a3ce6bb142c0a34efe94ca54f4a9'
//Edamam API
//b28b6060
//056872a5b10ed2e9bf8ac6cf8ce732c4

// const APIKey = 'd7dbb7ec7bbca26af0c2a02a77d30d9a'
// id 79e5508c
const APIKey = '056872a5b10ed2e9bf8ac6cf8ce732c4'

export async function loadRecipes(allVegArray) {
    // const vegName = ['apple', 'lettuce']
    const allRecipes = []
    const filterData = []

    // const myVeg = allVegArray
    for (const veg of allVegArray) {
        const res = await fetch(
            `https://api.edamam.com/api/recipes/v2?type=public&q=${veg}&app_id=b28b6060&app_key=${APIKey}&imageSize=THUMBNAIL&field=label&field=image&field=url&field=ingredientLines&field=totalCO2Emissions`
        )
        const recipeArray = await res.json()
        allRecipes.push(recipeArray)
        // console.log(allRecipes[0].count)&dishType=Main%20course
    }

    //loop here
    allRecipes.map((el, index) => {
        // console.log(`el => ${el}`)

        for (const key in el) {
            if (key == 'hits') {
                filterData.push({
                    label: el[key][0].recipe.label,
                    image: el[key][0].recipe.image,
                    ingredientLines: el[key][0].recipe.ingredientLines,
                    url: el[key][0].recipe.url,
                })
                // console.log(`${key} => ${el[key][0].recipe.label}`)
            }
        }
    })

    // console.log(filterData)
    // console.log('veggie')
    // console.log(myRecipe)
    return { fetched: filterData }
}
