import React, { useContext, useState } from 'react'
import GlobalMonth from '../lib/GlobalMonth'
import { loadVeg } from '../lib/loadVeg.js'
import Image from 'next/image'
import VegName from '../components/VegName'

//we need to figure out the type of the props

export async function getStaticProps() {
    const allMonths = await loadVeg()
    return { props: { allMonths } }
}

export default function Calendar({ allMonths }) {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleClick = (index) => setActiveIndex(index)
    const checkActive = (index, className) =>
        activeIndex !== index ? className : ''

    return (
        <>
            <div>
                <button
                    className={`${checkActive(1, 'opacity-25')}`}
                    onClick={() => handleClick(1)}
                >
                    Spring
                </button>

                <button
                    className={`${checkActive(2, 'opacity-25')}`}
                    onClick={() => handleClick(2)}
                >
                    Summer
                </button>

                <button
                    className={`${checkActive(3, 'opacity-25')}`}
                    onClick={() => handleClick(3)}
                >
                    Autmun
                </button>

                <button
                    className={`${checkActive(4, 'opacity-25')}`}
                    onClick={() => handleClick(4)}
                >
                    Winter
                </button>
            </div>

            <div>
                <div className={`${checkActive(1, 'hidden')}`}>
                    <div>{allMonths[3].name}</div>
                    <VegName vegs={allMonths} index={3} />
                    <div>{allMonths[4].name}</div>
                    <VegName vegs={allMonths} index={4} />
                </div>

                <div className={`${checkActive(2, 'hidden')}`}>
                    <div>{allMonths[5].name}</div>
                    <VegName vegs={allMonths} index={5} />
                    <div>{allMonths[6].name}</div>
                    <VegName vegs={allMonths} index={6} />
                    <div>{allMonths[7].name}</div>
                    <VegName vegs={allMonths} index={7} />
                </div>

                <div className={`${checkActive(3, 'hidden')}`}>
                    <div>{allMonths[8].name}</div>
                    <VegName vegs={allMonths} index={8} />
                    <div>{allMonths[9].name}</div>
                    <VegName vegs={allMonths} index={9} />
                    <div>{allMonths[10].name}</div>
                    <VegName vegs={allMonths} index={10} />
                </div>

                <div className={`${checkActive(4, 'hidden')}`}>
                    <div>{allMonths[11].name}</div>
                    <VegName vegs={allMonths} index={11} />
                    <div>{allMonths[0].name}</div>
                    <VegName vegs={allMonths} index={0} />
                    <div>{allMonths[1].name}</div>
                    <VegName vegs={allMonths} index={1} />
                </div>
            </div>
        </>
    )
}
