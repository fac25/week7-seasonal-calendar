import Image from 'next/image'
import Link from 'next/link'

export default function Recipe({ props }) {
    return (
        <div className="flex bg-pale_yellow  rounded-lg">
            <div className="h-full w-24 md:w-40 md:h-40 lg:w-48 lg:h-48 shrink-0">
                <Image
                    className="object-cover h-full w-full rounded-l-lg"
                    src={props.image}
                    alt={props.label}
                    width="300"
                    height="300"
                />
            </div>
            <div className="p-4 grow rounded-r-lgkk">
                <h3 className="text-xl mb-3">{props.label}</h3>

                <Link
                    className="border-b-0 border-transparent border-dotted hover:border-b-4 hover:border-black transition hover:duration-500"
                    href={props.url}
                    passHref
                >
                    read full recipe
                </Link>
            </div>
        </div>
    )
}
