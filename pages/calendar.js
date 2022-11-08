// create seasons component .. summer , winter etc
// filter seasonal data by month - asign jun, july, aug to summer - etc...
// get month based on app(global) component - It has the number represting month
// use getstaticprops to get data of current month from api
import React, { useContext, useState } from 'react'
import GlobalMonth from '../lib/GlobalMonth'
import { loadVeg } from '../lib/loadVeg.js'

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
                    <div>{allMonths[2].name}</div>
                    <div>{allMonths[3].name}</div>
                    <div>{allMonths[4].name}</div>
                </div>

                <div className={`${checkActive(2, 'hidden')}`}>
                    <div>{allMonths[5].name}</div>
                    <div>{allMonths[6].name}</div>
                    <div>{allMonths[7].name}</div>
                </div>

                <div className={`${checkActive(3, 'hidden')}`}>
                    <div>{allMonths[8].name}</div>
                    <div>{allMonths[9].name}</div>
                    <div>{allMonths[10].name}</div>
                </div>

                <div className={`${checkActive(4, 'hidden')}`}>
                    <div>{allMonths[11].name}</div>
                    <div>{allMonths[0].name}</div>
                    <div>{allMonths[1].name}</div>
                </div>
            </div>
        </>
    )
}
