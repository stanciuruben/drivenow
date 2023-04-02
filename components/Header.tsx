import { FC } from 'react';
import Image from 'next/image';
import Background from '../public/images/road2.jpg';
import MainForm from './MainForm';

const Header: FC = () => {

    return (
        <header className='block relative top-[4.5rem] mb-32'>
            <div className='relative w-full h-[20rem] lg:h-[25rem] overflow-hidden'>
                <Image src={Background} alt='Picture of a curvy road from above' className='absolute top-0 left-0 h-full object-cover' />
            </div>
            <MainForm />
            <ul className='mx-5 flex flex-col md:flex-row justify-center items-center gap-20 text-black font-medium dark:text-white'>
                <li className='flex items-center gap-5'>
                    <Image src='/icons/best-price.svg' alt='Price tag icon' width={70} height={40} />
                    <p>
                        Find Great Deals
                    </p>
                </li>
                <li className='flex items-center gap-5'>
                    <Image src='/icons/approved.svg' alt='Price tag icon' width={40} height={40} />
                    <p>
                        A trusted brand
                    </p>
                </li>
                <li className='flex items-center gap-5'>
                    <Image src='/icons/steps.svg' alt='Price tag icon' width={40} height={40} />
                    <p>
                        Book in 3 easy steps
                    </p>
                </li>
            </ul>
        </header>
    );

}

export default Header;