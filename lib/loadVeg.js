// Fetch API
export async function loadVeg() {
    const res = await fetch('http://localhost:3000/api/vegdata')
    const data = await res.json()
    return data
}
