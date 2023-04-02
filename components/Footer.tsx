import { type FC } from 'react';
import Image from 'next/image';

const Footer: FC = () => {
    return (
        <footer className='bg-[#171641]'>
            <div className='relative mx-20 md:mx-5 max-w-screen-lg lg:mx-auto flex flex-col md:flex-row justify-between items-start'>
                <div>
                    <ul className='text-sm md:text-base text-gray-400 my-10 child:mb-3'>
                        <h3 className='text-base md:text-lg font-bold text-white'>
                            Vehicles
                        </h3>
                        <li>
                            <a href="#">Cars</a>
                        </li>
                        <li>
                            <a href="#">SUVs</a>
                        </li>
                        <li>
                            <a href="#">Trucks</a>
                        </li>
                        <li>
                            <a href="#">Vans & Minivans</a>
                        </li>
                        <li>
                            <a href="#">Exotic Cars</a>
                        </li>
                    </ul>
                    <ul className='text-sm md:text-base text-gray-400 my-10 child:mb-3'>
                        <h3 className='text-base md:text-lg font-bold text-white'>
                            Customer Service
                        </h3>
                        <li>
                            <a href="#">Help & FAQs</a>
                        </li>
                        <li>
                            <a href="#">Customers with disabilities</a>
                        </li>
                        <li>
                            <a href="#">Site Map</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className='text-sm md:text-base text-gray-400 my-10 child:mb-3'>
                        <h3 className='text-base md:text-lg font-bold text-white'>
                            Business
                        </h3>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Meet Our People</a>
                        </li>
                        <li>
                            <a href="#">Careers</a>
                        </li>
                        <li>
                            <a href="#">Solutions</a>
                        </li>
                        <li>
                            <a href="#">Franchise</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">Affiliate Programs</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className='text-sm md:text-base text-gray-400 my-10 child:mb-3'>
                        <h3 className='text-base md:text-lg font-bold text-white'>
                            Extras
                        </h3>
                        <li>
                            <a href="#">Rental Car Products</a>
                        </li>
                        <li>
                            <a href="#">Car Rental Services</a>
                        </li>
                        <li>
                            <a href="#">Protections & Coverages</a>
                        </li>
                        <li>
                            <a href="#">Loss Damage Waiver</a>
                        </li>
                        <li>
                            <a href="#">Roadside Assistence</a>
                        </li>
                    </ul>
                    <ul className='text-sm md:text-base text-gray-400 my-10 child:mb-3'>
                        <h3 className='text-base md:text-lg font-bold text-white'>
                            Security & Privacy
                        </h3>
                        <li>
                            <a href="#">Terms & Conditions</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#">Frauds & Scams</a>
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