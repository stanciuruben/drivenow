import { type FC } from 'react';

const Cards: FC = () => {

    return (
        <article className='relative my-40 mx-5 max-w-screen-lg lg:mx-auto'>
            <h2 className='text-4xl font-extrabold dark:text-white mb-10'>
                Good to Know
            </h2>
            <ul className='flex flex-wrap gap-10 justify-center items-center lg:justify-between'>
                <li
                    className="block w-[13rem] py-10 bg-white border border-gray-200 rounded-2xl shadow
                            dark:bg-gray-800 dark:border-gray-700 text-center"
                >
                    <h3 className='text-secondary font-semibold mb-5'>
                        Months to be aware of
                    </h3>
                    <p className="font-bold text-black dark:text-white">
                        July & August
                    </p>
                </li>
                <li
                    className="block w-[13rem] py-10 bg-white border border-gray-200 rounded-2xl shadow
                            dark:bg-gray-800 dark:border-gray-700 text-center"
                >
                    <h3 className='text-secondary font-semibold mb-5'>
                        Most popular car type
                    </h3>
                    <p className="font-bold text-black dark:text-white">
                        Economy
                    </p>
                </li>
                <li
                    className="block w-[13rem] py-10 bg-white border border-gray-200 rounded-2xl shadow
                            dark:bg-gray-800 dark:border-gray-700 text-center"
                >
                    <h3 className='text-secondary font-semibold mb-5'>
                        Average Price
                    </h3>
                    <p className="font-bold text-black dark:text-white">
                        52$/day
                    </p>
                </li>
                <li
                    className="block w-[13rem] py-10 bg-white border border-gray-200 rounded-2xl shadow
                            dark:bg-gray-800 dark:border-gray-700 text-center"
                >
                    <h3 className='text-secondary font-semibold mb-5'>
                        Good deal
                    </h3>
                    <p className="font-bold text-black dark:text-white">
                        38$/day
                    </p>
                </li>
            </ul>
        </article>
    );

}

export default Cards;