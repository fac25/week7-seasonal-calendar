import Image from 'next/image'
import Link from 'next/link'

export default function VegNameGrid({ allMonths, index }) {
    return (
        <>
            <h2 className="text-2xl text-center font-bold">
                {allMonths[index].name}
            </h2>
            <div className="grid gap-3 grid-cols-3 lg:grid-cols-4 py-12">
                {allMonths[index].food.map((veg) => (
                    <div
                        key={veg.name}
                        className="flex flex-col justify-center items-center p-4 hover:bg-primary_green-400 transition hover:duration-300 rounded"
                    >
                        <Link
                            href={
                                '/veggies/' +
                                veg.name.toLowerCase().replace(' ', '-')
                            }
                        >
                            <div className="text-center">
                                <div className="h-24 w-24 md:w-40 md:h-40 lg:w-48 lg:h-48 2xl:w-64 2xl:h-64">
                                    <Image
                                        src={veg.imageUrlSmall}
                                        width={300}
                                        height={300}
                                        alt={veg.name}
                                        className="object-cover h-full w-full rounded-full"
                                    />
                                </div>

                                <h3 className="font-semibold pt-2">
                                    {veg.name}
                                </h3>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}
