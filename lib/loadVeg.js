// Fetch API
export async function loadVeg() {
    const res = await fetch(
        'https://6usraevcmc.execute-api.eu-west-2.amazonaws.com/prod/v2/season-with-food/'
    )
    const data = await res.json()
    console.log(data)
    return data
}
