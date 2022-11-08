import React, { useContext, useState } from 'react'
import GlobalMonth from '../lib/GlobalMonth'
import { loadVeg } from '../lib/loadVeg.js'
import Image from 'next/image'
import VegName from '../components/VegName'

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
                    <VegName props={allMonths} />
                    {/* {allMonths[2].name}
                    {allMonths[2].food.map((veg) => (
                        <div
                            key={veg.name}
                            className="flex flex-col justify-center items-center"
                        >
                            <div className="h-24 w-24 md:w-40 md:h-40 lg:w-48 lg:h-48 2xl:w-64 2xl:h-64">
                                <Image
                                    src={veg.imageUrlSmall}
                                    width={300}
                                    height={300}
                                    alt={veg.name}
                                    className="object-cover h-full w-full rounded-full"
                                />
                            </div>

                            <h2>{veg.name}</h2>
                        </div>
                    ))} */}
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
