// https://api.edamam.com/api/nutrition-data?app_id=cd596177&app_key=%20d3aae1ee2f6f3ae55aebc8f0d4c2662c&nutrition-type=logging&ingr=beetroot
import { loadVeg } from '../lib/loadVeg.js'
import Nutrition from '../components/Nutrition.js'

const currentMonth = new Date().getMonth()
export async function getStaticPaths() {
    const allveg = await loadVeg()
    const currentMonthData = allveg[currentMonth]
    const allVegArray = currentMonthData.food.map((veg) => veg.name)

    const path = allVegArray.map((veg) => ({
        params: { id: String(veg).toLocaleLowerCase() },
    }))

    return {
        paths: path,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    // console.log(params.id)
    const res = await fetch(
        `https://api.edamam.com/api/nutrition-data?app_id=cd596177&app_key=%20d3aae1ee2f6f3ae55aebc8f0d4c2662c&nutrition-type=logging&ingr=${params.id}`
    )

    const vegetables = await res.json()

    return {
        props: vegetables['ingredients'][0]['parsed'][0]['nutrients'],
        revalidate: 6000,
    }
}

export default function SingleVeg({
    VITD,
    ENERC_KCAL,
    VITA_RAE,
    PROCNT,
    TOCPHA,
    CHOCDF,
    FIBTG,
    VITB6A,
    VITB12,
    K,
    NA,
    SUGAR,
    CA,
}) {
    const arr = [
        VITD,
        ENERC_KCAL,
        VITA_RAE,
        PROCNT,
        TOCPHA,
        CHOCDF,
        FIBTG,
        VITB6A,
        VITB12,
        K,
        NA,
        SUGAR,
        CA,
    ]
    //console.log(arr[0].label)
    // console.log(obj.VITD.label)
    // const nutritionArray = []
    // for (const value of arguments) {
    //     nutritionArray.push(value)
    // }
    // console.log(nutritionArray)
    // {Object.keys(obj).map((k, index) => (
    //     <Nutrition key={index} nutrition={k} />
    // ))}
    return (
        <>
            <h2>Nutrition Facts</h2>
            <table>
                <tbody>
                    {arr.map((el, index) => (
                        <tr key={index}>
                            <td>
                                <Nutrition nutrition={el} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

// "ingredients": [
//     {
//     "text": "apple",
//     "parsed": [
//     {
//     "quantity": 1,
//     "measure": "serving",
//     "foodMatch": "apple",
//     "food": "apple",
//     "foodId": "food_a1gb9ubb72c7snbuxr3weagwv0dd",
//     "weight": 242,
//     "retainedWeight": 242,
//     "nutrients": {
//////     "VITD": {
//     "label": "Vitamin D",
//     "quantity": 0,
//     "unit": "IU"
//     },
//////     "ENERC_KCAL": {
//     "label": "Energy",
//     "quantity": 125.84,
//     "unit": "kcal"
//     },
//     "FASAT": {
//     "label": "Fatty acids, total saturated",
//     "quantity": 0.06776,
//     "unit": "g"
//     },
/////     "VITA_RAE": {
//     "label": "Vitamin A, RAE",
//     "quantity": 7.26,
//     "unit": "µg"
//     },
/////     "PROCNT": {
//     "label": "Protein",
//     "quantity": 0.6292,
//     "unit": "g"
//     },
/////     "TOCPHA": {
//     "label": "Vitamin E (alpha-tocopherol)",
//     "quantity": 0.43559999999999993,
//     "unit": "mg"
//     },
//     "CHOLE": {
//     "label": "Cholesterol",
//     "quantity": 0,
//     "unit": "mg"
//     },
//     "CHOCDF": {
/////     "label": "Carbohydrate, by difference",
//     "quantity": 33.4202,
//     "unit": "g"
//     },
//     "FAT": {
//     "label": "Total lipid (fat)",
//     "quantity": 0.4114,
//     "unit": "g"
//     },
/////     "FIBTG": {
//     "label": "Fiber, total dietary",
//     "quantity": 5.808,
//     "unit": "g"
//     },
//     "RIBF": {
//     "label": "Riboflavin",
//     "quantity": 0.06292,
//     "unit": "mg"
//     },
//     "THIA": {
//     "label": "Thiamin",
//     "quantity": 0.041139999999999996,
//     "unit": "mg"
//     },
//     "FAPU": {
//     "label": "Fatty acids, total polyunsaturated",
//     "quantity": 0.12341999999999999,
//     "unit": "g"
//     },
//     "NIA": {
//     "label": "Niacin",
//     "quantity": 0.22021999999999997,
//     "unit": "mg"
//     },
//     "VITC": {
/////     "label": "Vitamin C, total ascorbic acid",
//     "quantity": 11.131999999999998,
//     "unit": "mg"
//     },
//     "FAMS": {
//     "label": "Fatty acids, total monounsaturated",
//     "quantity": 0.01694,
//     "unit": "g"
//     },
//     "VITB6A": {
/////     "label": "Vitamin B-6",
//     "quantity": 0.09922,
//     "unit": "mg"
//     },
//     "VITB12": {
/////     "label": "Vitamin B-12",
//     "quantity": 0,
//     "unit": "µg"
//     },
//     "WATER": {
//     "label": "Water",
//     "quantity": 207.0552,
//     "unit": "g"
//     },
//     "K": {
/////     "label": "Potassium, K",
//     "quantity": 258.94,
//     "unit": "mg"
//     },
//     "P": {
//     "label": "Phosphorus, P",
//     "quantity": 26.62,
//     "unit": "mg"
//     },
//     "NA": {
/////     "label": "Sodium, Na",
//     "quantity": 2.42,
//     "unit": "mg"
//     },
//     "ZN": {
//     "label": "Zinc, Zn",
//     "quantity": 0.0968,
//     "unit": "mg"
//     },
//     "SUGAR": {
//////     "label": "Sugars, total",
//     "quantity": 25.143800000000002,
//     "unit": "g"
//     },
//     "CA": {
/////     "label": "Calcium, Ca",
//     "quantity": 14.52,
//     "unit": "mg"
//     },
//     "MG": {
//     "label": "Magnesium, Mg",
//     "quantity": 12.1,
//     "unit": "mg"
//     },
//     "FE": {
//     "label": "Iron, Fe",
//     "quantity": 0.2904,
//     "unit": "mg"
//     },
//     "VITK1": {
//     "label": "Vitamin K (phylloquinone)",
//     "quantity": 5.324000000000001,
//     "unit": "µg"
//     },
//     "FOLFD": {
//     "label": "Folate, food",
//     "quantity": 7.26,
//     "unit": "µg"
//     },
//     "FOLAC": {
//     "label": "Folic acid",
//     "quantity": 0,
//     "unit": "µg"
//     },
//     "FOLDFE": {
//     "label": "Folate, DFE",
//     "quantity": 7.26,
//     "unit": "µg"
//     }
//     },
//     "measureURI": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
//     "status": "OK"
//     }
//     ]
//     }
