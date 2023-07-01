import { Dispatch, FC, SetStateAction, useRef } from "react";
import Image from 'next/image';
import Link from "next/link";

const Navbar: FC<{
    isDarkMode: boolean | null,
    setIsDarkMode: Dispatch<SetStateAction<boolean | null>>;
}> = ({
    isDarkMode,
    setIsDarkMode
}) => {
        const subMenu = useRef<HTMLDivElement>(null);

        const switchTheme = (): void => {
            // if set via local storage previously
            if (localStorage.getItem('color-theme')) {
                if (localStorage.getItem('color-theme') === 'light') {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                } else {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                }

                // if NOT set via local storage previously
            } else {
                if (document.documentElement.classList.contains('dark')) {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                } else {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                }
            }
            setIsDarkMode(!isDarkMode);
        }

        const toggleSubMenu = (): void => {
            subMenu.current!.classList.toggle('hidden');
        }

        return (
            <nav className="fixed top-0 left-0 w-full h-fit z-50 bg-white border-b border-gray-200 dark:border-gray-600 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a
                        href="#"
                        className="w-fit h-fit"
                        aria-current="page"
                    >
                        <Image src="/images/logo.jpg" width={100} height={32} alt="Company Logo" />
                    </a>
                    <button
                        onClick={toggleSubMenu}
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" ></path></svg>
                    </button>
                    <div
                        ref={subMenu}
                        className="hidden fixed top-[4.5rem] left-0 w-full h-[calc(100%-4.5rem)] md:static md:block md:w-auto md:h-fit"
                        id="navbar-default"
                    >
                        <ul
                            className="font-medium text-center flex flex-col-reverse justify-center gap-2 p-4 md:p-0 border border-gray-100 bg-gray-50 md:flex-row h-full md:h-fit
                                    items-center md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
                        >
                            <li>
                                <button
                                    onClick={() => {
                                        switchTheme();
                                        toggleSubMenu();
                                    }}
                                    id="theme-toggle"
                                    type="button"
                                    className="focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 w-full md:w-fit
                                            flex items-center justify-center"
                                >
                                    <span className="inline-block font-semibold mr-3 md:hidden text-gray-500 dark:text-white">
                                        Switch Theme
                                    </span>
                                    <span className='inline-block w-6 h-6 bg-[url(/drivenow/icons/darkmode.svg)] dark:bg-[url(/drivenow/icons/lightmode.svg)]' ></span>
                                </button>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    onClick={toggleSubMenu}
                                    className="block py-2 pl-3 pr-4 text-secondary rounded md:bg-transparent md:text-black md:p-2 dark:text-white 
                                        focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700"
                                >
                                    Business
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    onClick={toggleSubMenu}
                                    className="block py-2 pl-3 pr-4 text-secondary rounded md:bg-transparent md:text-black md:p-2 dark:text-white 
                                        focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700"
                                >
                                    Support
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    onClick={toggleSubMenu}
                                    className="block py-2 pl-3 pr-4 text-secondary rounded md:bg-transparent md:text-black md:p-2 dark:text-white 
                                        focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700"
                                >
                                    Sign in
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
export default Navbar;