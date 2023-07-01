import { type FC } from 'react';
import Image from 'next/image';

const Cards: FC = () => {

    return (
        <article className='relative mt-60 mb-32 mx-5 flex flex-nowrap gap-10 overflow-x-auto justify-start lg:justify-center items-center scrollbar-hide'>
            <div
                className="block min-w-[15rem] w-[30rem] p-6 bg-white border border-gray-200 rounded-2xl shadow
                        dark:bg-gray-800 dark:border-gray-700"
            >
                <a
                    href='#'
                    className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white flex gap-3 items-center 
                                justify-center hover:gap-5 transition-all duration-200 rounded-lg
                                focus:outline-none focus:border-0 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-600"
                >
                    <b>Business Rentals</b>
                    <span
                        aria-hidden
                        className='w-3 h-2.5 bg-no-repeat bg-[url(/drivenow/icons/chev.svg)] dark:bg-[url(/drivenow/icons/chev-dark.svg)]'
                    ></span>
                </a>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Our customized rental programs are designed specifically to meet your company’s needs, saving you time and money.
                </p>
                <div className='relative block h-[10rem] mt-5' aria-label='Image container'>
                    <Image
                        src='/images/cars.jpg'
                        alt='Industrial parking lot filled with cars'
                        fill
                        className='object-cover'
                    />
                </div>
            </div>
            <div
                className="block min-w-[15rem] w-[30rem] p-6 bg-white border border-gray-200 rounded-2xl shadow
                        dark:bg-gray-800 dark:border-gray-700"
            >
                <a
                    href='#'
                    className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white flex gap-3 items-center 
                                justify-center hover:gap-5 transition-all duration-200 rounded-lg
                                focus:outline-none focus:border-0 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-600"
                >
                    <b>Replacement Rentals</b>
                    <span
                        aria-hidden
                        className='w-3 h-2.5 bg-no-repeat bg-[url(/drivenow/icons/chev.svg)] dark:bg-[url(/drivenow/icons/chev-dark.svg)]'
                    ></span>
                </a>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Is your vehicle in the shop? After an accident the average time for repair is two weeks. We have the vehicle you need to keep your life moving.
                </p>
                <div className='relative block h-[10rem] mt-5' aria-label='Image container'>
                    <Image
                        src='/images/mechanic.jpg'
                        alt='Car mechanic working under a car'
                        fill
                        className='object-cover'
                    />
                </div>
            </div>
            <div
                className="block min-w-[15rem] w-[30rem] p-6 bg-white border border-gray-200 rounded-2xl shadow
                        dark:bg-gray-800 dark:border-gray-700"
            >
                <a
                    href='#'
                    className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white flex gap-3 items-center 
                                justify-center hover:gap-5 transition-all duration-200 rounded-lg
                                focus:outline-none focus:border-0 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-600"
                >
                    <b>Current Deals</b>
                    <span
                        aria-hidden
                        className='w-3 h-2.5 bg-no-repeat bg-[url(/drivenow/icons/chev.svg)] dark:bg-[url(/drivenow/icons/chev-dark.svg)]'
                    ></span>
                </a>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Explore our current deals and promotions or start a reservation to find the right vehicle at everyday low rates.
                </p>
                <div className='relative block h-[10rem] mt-5' aria-label='Image container'>
                    <Image
                        src='/images/car-keys.jpg'
                        alt='Car keys'
                        fill
                        className='object-cover'
                    />
                </div>
            </div>

        </article>
    );

}

export default Cards;