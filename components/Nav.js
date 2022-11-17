import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { MdHome, MdSearch, MdFoodBank } from 'react-icons/md'
import { IoCalendarNumber } from 'react-icons/io5'
export default function Nav() {
    const [navbar, setNavbar] = useState(false)
    const navMenu = [
        {
            name: 'home',
            icon: MdHome,
            route: '/',
        },
        {
            name: 'seasonal calendar',
            icon: IoCalendarNumber,
            route: '/calendar',
        },
        {
            name: 'seasonal recepies',
            icon: MdFoodBank,
            route: '/recepies',
        },
    ]

    return (
        <>
            <nav className=" bg-transparent shadow w-full">
                <div className="justify-between px-4 mx-auto container md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <Link
                                href="/"
                                passHref
                                className="flex items-center"
                            >
                                <Image
                                    src="/logo.svg"
                                    height={60}
                                    width={50}
                                    alt="Seasonal Calendar Logo"
                                    className="mr-3 h-6 sm:h-9"
                                />
                                <span className="self-center text-xl font-semibold whitespace-nowrap ">
                                    Seasonal Calendar
                                </span>
                            </Link>
                            <div className="md:hidden">
                                <button
                                    aria-label="Menu Button"
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    <div className="space-y-2">
                                        <div className="w-8 h-0.5 bg-gray-600"></div>
                                        <div className="w-8 h-0.5 bg-gray-600"></div>
                                        <div className="w-8 h-0.5 bg-gray-600"></div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                                navbar ? 'block' : 'hidden'
                            }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                {navMenu.map((menu) => (
                                    <li key={menu.name}>
                                        <Link
                                            href={menu.route}
                                            className="flex items-center border-b-4 border-transparent border-dotted hover:border-black transition hover:duration-500"
                                        >
                                            {
                                                <menu.icon className="inline-block mr-1 h-5 w-5 md:hidden" />
                                            }
                                            <span>{menu.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
