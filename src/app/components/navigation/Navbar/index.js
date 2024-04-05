import Link from "next/link"
import Logo from "./Logo/Logo"
import CallButton from "../../smallCompponents/Buttons/CallButton"
import { usePathname } from "next/navigation"

function Navbar({toggle}) {
    const navLinks = [
        {id:1, name:'our products', path:'/our-products'},
        {id:2, name:'company', path:'/company'},
        {id:3, name:'our clients', path:'/our-clients'},
        {id:4, name:'contact us', path:'/Contact-us'}
    ]
    const pathname = usePathname();

    const isActive = (path) => path === pathname;
    return (
        <nav className="bg-white sticky dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
                <Logo />
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <CallButton title='Call Now'/>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false" onClick={toggle}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col items-center p-4 md:p-0 mt-4 capitalize border text-[#008A27] border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {
                            navLinks.map((links,index) => {
                                return(
                                    <li key={index} className={isActive(links.path) ? 'rounded-3xl border px-3 py-2 border-[#0075E6]' : ''}>
                                        <Link className={`text-sm block py-2 px-3  rounded md:p-0 ${isActive(links.path) ? 'font-bold' : 'font-semibold' }`} href={links.path}>
                                            {links.name}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
