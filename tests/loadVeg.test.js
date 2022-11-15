import { loadVeg } from '../lib/loadVeg'

describe('check we get seasonal vegetable data', () => {
    test.todo('check if we receive data from api'),
        async () => {
            const seasonalVeg = await loadVeg()
            expect(seasonalVeg === 'hello').toBeTruthy()
        }
    // test.todo('check if first object key name is January'),
    //     async () => {
    //         const seasonalVeg = await loadVeg()
    //         const month = seasonalVeg[0].name
    //         expect(month).toEqual('February')
    //     }
})
