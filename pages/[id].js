// https://api.edamam.com/api/nutrition-data?app_id=cd596177&app_key=%20d3aae1ee2f6f3ae55aebc8f0d4c2662c&nutrition-type=logging&ingr=beetroot
import { loadVeg } from '../lib/loadVeg.js'
import Nutrition from '../components/Nutrition.js'
import VegName from '../components/VegName.js'

export async function getStaticPaths() {
    const allveg = await loadVeg()
    const allYearArray = []
    for (const month of allveg) {
        allYearArray.push(month.food.map((veg) => veg.name))
    }
    const flatPath = allYearArray.flat()
    const path = flatPath.map((veg) => ({
        params: {
            id: String(veg).toLowerCase().replace(' ', '-'),
        },
    }))

    return {
        paths: path,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    // console.log(params)

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

    return (
        <>
            <h2>Nutrition Facts</h2>

            <div> {/* <SingleVeg /> */}</div>
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
