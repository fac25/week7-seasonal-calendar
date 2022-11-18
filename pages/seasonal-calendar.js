import React, { useState } from 'react'
import { loadVeg } from '../lib/loadVeg.js'
import VegNameGrid from '../components/VegNameGrid'
import { currentMonth, currentSeason } from '../lib/currentData'
//currentSeason is a function that take currentMonth as argument and return data = { season: 'autumn', seasonIndex: 3 }

export async function getStaticProps() {
    const allMonths = await loadVeg()
    return { props: { allMonths } }
}

export default function Calendar({ allMonths }) {
    const currentSeasonData = currentSeason(currentMonth)
    const [activeIndex, setActiveIndex] = useState(
        currentSeasonData.seasonIndex
    )
    const handleClick = (index) => setActiveIndex(index)
    const checkActive = (index, className) =>
        activeIndex !== index ? className : ''

    const seasons = ['Spring', 'Summer', 'Autumn', 'Winter']

    return (
        <div className="container mx-auto">
            <div className="flex justify-between max-w-lg mx-auto mb-8">
                {seasons.map((season, index) => {
                    return (
                        <button
                            key={index}
                            className={` text-lg border-b-4 border-dotted hover:border-black transition hover:duration-500 ${checkActive(
                                index + 1,
                                'border-transparent opacity-75'
                            )}`}
                            onClick={() => handleClick(index + 1)}
                        >
                            {season}
                        </button>
                    )
                })}
            </div>
            <div>
                <div className={`${checkActive(1, 'hidden')}`}>
                    <VegNameGrid allMonths={allMonths} index={2} />
                    <VegNameGrid allMonths={allMonths} index={3} />
                    <VegNameGrid allMonths={allMonths} index={4} />
                </div>
                <div className={`${checkActive(2, 'hidden')}`}>
                    <VegNameGrid allMonths={allMonths} index={5} />
                    <VegNameGrid allMonths={allMonths} index={6} />
                    <VegNameGrid allMonths={allMonths} index={7} />
                </div>
                <div className={`${checkActive(3, 'hidden')}`}>
                    <VegNameGrid allMonths={allMonths} index={8} />
                    <VegNameGrid allMonths={allMonths} index={9} />
                    <VegNameGrid allMonths={allMonths} index={10} />
                </div>
                <div className={`${checkActive(4, 'hidden')}`}>
                    <VegNameGrid allMonths={allMonths} index={11} />
                    <VegNameGrid allMonths={allMonths} index={0} />
                    <VegNameGrid allMonths={allMonths} index={1} />
                </div>
            </div>
        </div>
    )
}
