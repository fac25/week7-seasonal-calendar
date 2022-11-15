import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../pages/index.js'
import { loadVeg } from '../lib/loadVeg.js'

describe('h1 appears on homepage', () => {
    it('renders heading', async () => {
        const allMonths = await loadVeg()
        render(<Home allMonths={allMonths} />)
        const h1 = screen.getByRole('h1', { name: 'Seasonal Calendar' })
        expect(h1).toBeInTheDocument()
    })
})
