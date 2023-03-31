import { useState, type FC } from 'react';

const Info: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <article
            id="accordion-collapse"
            data-accordion="collapse"
            className='my-20 w-full flex flex-col items-center justify-start bg-gray-100 dark:bg-gray-900'
        >
            <h2 id="accordion-collapse-heading-1" className='w-full max-w-[60rem]' >
                <button
                    type="button"
                    className="flex items-center justify-between w-full p-5 text-left text-gray-500 dark:text-gray-200
                            hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-2xl font-bold
                              focus:outline-none focus:border-0 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-600"
                    data-accordion-target="#accordion-collapse-body-1"
                    aria-expanded={isOpen}
                    aria-controls="accordion-collapse-body-1"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span>What you need to know about renting a car</span>
                    <svg
                        data-accordion-icon className={"w-6 h-6 shrink-0 transition-transform duration-200 " + (isOpen ? 'rotate-180' : '')}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        >
                        </path>
                    </svg>
                </button>
            </h2>
            <div
                id="accordion-collapse-body-1"
                className={"w-full max-w-[60rem] px-5 py-10 " + (isOpen ? '' : 'hidden')}
                aria-labelledby="accordion-collapse-heading-1"
            >
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Need to rent a car for your next vacation? Before booking, take a look at the following answers to questions commonly asked by our customers.
                </p>
                <h3 className='text-black dark:text-white font-bold text-lg mb-3 mt-5'>
                    Do car rental locations accept debit cards?
                </h3>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Yes, some rental companies accept debit cards for reservations, though they may ask for additional identification and proof of insurance when you book. Even if you can pay with a debit card, some car rental locations require a credit card for the deposit. Be sure to check the terms and conditions. If you don&apos;t own a credit card, you may not be permitted to rent a car. Cash, prepaid cards, and gift cards are never accepted for reservations
                </p>
                <h3 className='text-black dark:text-white font-bold text-lg mb-3 mt-5'>
                    Do I need insurance to rent a vehicle?
                </h3>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Yes, you must be an insured driver in order to drive a rental car. If you have personal car insurance, you should check to see whether it covers rental vehicles (and be sure to ask if there are any restrictions, such as vehicle size or international pickups). If you don&apos;t have personal insurance coverage, consider checking your credit card – it may offer a rental car policy if you use it to pay for the rental.
                    As a U.S. citizen, you can purchase insurance with CarRentals.com at checkout since it&apos;s not included in the base rental car rate. When reserving a car rental in some international locations, such as Mexico, you must buy additional local insurance.
                </p>
                <h3 className='text-black dark:text-white font-bold text-lg mb-3 mt-5'>
                    Do all rental car companies require a deposit?
                </h3>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Many car rental companies do ask for a deposit, and deposit amounts will differ by company and car class. Luxury rentals will require a higher deposit than minivans or economy car rentals. Be sure to have a credit card available if you think you&apos;ll need to cover a deposit.
                </p>
                <h3 className='text-black dark:text-white font-bold text-lg mb-3 mt-5'>
                    How old do I have to be to get a rental car?
                </h3>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                    In most countries, you must be between 25 and 65 years old to rent cars. You might be able to get cheap car rentals or discounts if you&apos;re outside of this age range, but you may need to pay an additional fee or purchase additional insurance.
                </p>
            </div>
        </article>

    );

}

export default Info;