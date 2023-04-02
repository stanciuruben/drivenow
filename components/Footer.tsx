import { type FC } from 'react';
import Image from 'next/image';

const Footer: FC = () => {
    const linkClasses: string = 'text-gray-400 hover:text-gray-200';

    return (
        <footer className='bg-[#171641]'>
            <div className='relative mx-20 md:mx-5 max-w-screen-lg lg:mx-auto flex flex-col md:flex-row justify-between items-start'>
                <div>
                    <ul className='text-sm md:text-base my-10 child:mb-3'>
                        <h3 className='text-base md:text-lg font-bold text-white'>
                            Vehicles
                        </h3>
                        <li>
                            <a href="#" className={linkClasses} >Cars</a>
                        </li>
                        <li>
                            <a href="#" className={linkClasses} >SUVs</a>
                        </li>
                        <li>
                            <a href="#" className={linkClasses} >Trucks</a>
                        </li>
                        <li>
                            <a href="#" className={linkClasses} >Vans & Minivans</a>
                        </li>
                        <li>
                            <a href="#" className={linkClasses} >Exotic Cars</a>
                        </li>
                    </ul>
                    <ul className='text-sm md:text-base text-gray-400 my-10 child:mb-3'>
                        <h3 className='text-base md:text-lg font-bold text-white'>
                            Customer Service
                        </h3>
                        <li>
                            <a href="#" className={linkClasses} >Help & FAQs</a>
                        </li>
                        <li>
                            <a href="#" className={linkClasses} >Customers with disabilities</a>
                        </li>
                        <li>
                            <a href="#" className={linkClasses} >Site Map</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className='text-sm md:text-base text-gray-400 my-10 child:mb-3'>
                        <h3 className='text-base md:text-lg font-bold text-white'>
                            Business
                        </h3>
                        <li>
                            <a href="#" className={linkClasses} >About Us</a>
                        </li>
                        <li>
                            <a href="#" className={linkClasses} >Meet Our People</a>
                        </li>
                        <li>
                            <a href="#" className={linkClasses} >Careers</a>
                        </li>
                        <li>
                            <a href="#" className={linkClasses} >Solutions</a>
                        </li>
                        <li>
                            <a href="#" className={linkClasses} >Franchise</a>
                        </li>
                        <li>
                            <a href="#" className={linkClasses} >Contact</a>
                        </li>
                        <li>
                            <a href="#" className={linkClasses} >Affiliate Programs</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className='text-sm md:text-base text-gray-400 my-10 child:mb-3'>
                        <h3 className='text-base md:text-lg font-bold text-white'>
                            Extras
                        </h3>
                        <li>
                            <a href="#" className={linkClasses} >Rental Car Products</a>
                        </li>
                        <li>
                            <a href="#" className={linkClasses} >Car Rental Services</a>
                        </li>
                        <li>
                            <a href="#" className={linkClasses} >Protections & Coverages</a>
                        </li>
                        <li>
                            <a href="#" className={linkClasses} >Loss Damage Waiver</a>
                        </li>
                        <li>
                            <a href="#" className={linkClasses} >Roadside Assistence</a>
                        </li>
                    </ul>
                    <ul className='text-sm md:text-base text-gray-400 my-10 child:mb-3'>
                        <h3 className='text-base md:text-lg font-bold text-white'>
                            Security & Privacy
                        </h3>
                        <li>
                            <a href="#" className={linkClasses} >Terms & Conditions</a>
                        </li>
                        <li>
                            <a href="#" className={linkClasses} >Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className={linkClasses} >Frauds & Scams</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='bg-white dark:bg-gray-900'>
                <div className='relative py-5 mx-5 max-w-screen-lg lg:mx-auto flex justify-between items-center'>
                    <div className='child:mr-3'>
                        <a href="#" className='relative inline-block w-8 h-8'>
                            <Image src='/icons/youtube.svg' alt='Youtube Icon' fill />
                        </a>
                        <a href="#" className='relative inline-block w-8 h-8'>
                            <Image src='/icons/facebook.svg' alt='Facebook Icon' fill />
                        </a>
                        <a href="#" className='relative inline-block w-8 h-8'>
                            <Image src='/icons/twitter.svg' alt='Twitter Icon' fill />
                        </a>
                        <a href="#" className='relative inline-block w-8 h-8'>
                            <Image src='/icons/instagram.svg' alt='Instagram Icon' fill />
                        </a>
                    </div>
                    <p className='dark:text-white'>
                        © Drivenow 2023
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer