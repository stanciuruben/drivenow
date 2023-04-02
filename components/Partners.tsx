import { type FC } from "react";
import Image from "next/image";

const Partners: FC = () => {
    return (
        <article className="my-40 bg-secondary py-20">
            <h2 className="text-center text-4xl font-extrabold text-white">
                Our Partners
            </h2>
            <ul className='mx-5 w-[calc(100%-2.5rem)] lg:mx-auto lg:w-full max-w-screen-lg mt-10 flex gap-10 lg:gap-0 items-center justify-center lg:justify-between flex-wrap' >
                {
                    [
                        { src: '/icons/toyota.svg', alt: 'A silver Peugeot 208, city car in the category of economy', classes: 'w-14' },
                        { src: '/icons/bmw.svg', alt: 'A gray Fiat Panda, in the category of economy plus', classes: 'w-14' },
                        { src: '/icons/ford.svg', alt: 'A navy Volkswagen Golf, city car in the category of compact', classes: 'w-28' },
                        { src: '/icons/peugeot.svg', alt: 'A silver Volkswagen Jetta, in the category of compact plus', classes: 'w-16' },
                        { src: '/icons/volkswagen.svg', alt: 'A paprica orage Fiat Typo, hatchback in the category of cross city', classes: 'w-14' },
                        { src: '/icons/fiat.svg', alt: 'A white BMW Serie 3, in the category of luxury', classes: 'w-14' },
                    ].map((item, index: number) => (
                        <li
                            key={'partner-' + index}
                            className={"relative h-14 grow-0 shrink-0 " + item.classes}
                        >
                            <Image src={item.src} alt={item.alt} fill />
                        </li>
                    ))
                }
            </ul>
        </article>
    )
}

export default Partners;