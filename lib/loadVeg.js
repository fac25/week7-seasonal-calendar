export async function loadVeg() {
    const res = await fetch(
        'https://week7-seasonal-calendar-git-depolyment-seasonal-calendar2.vercel.app/api/vegdata'
    )

    const data = await res.json()
    return data
}
