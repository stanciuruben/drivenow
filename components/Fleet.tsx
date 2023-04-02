import { useRef, type FC, useState, useEffect } from "react";
import Image from "next/image";

const Fleet: FC = () => {
    const labels = useRef<string[]>([
        'Economy',
        'Economy Plus',
        'Compact',
        'Compact Plus',
        'Cross City',
        'Luxury',
        'SUV',
    ]);
    const list = useRef<HTMLUListElement>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const handleResize = (): void => {
            if (window.innerWidth < 640) {
                list.current!.scrollLeft = (currentIndex) * 16 * 25;
            } else {
                list.current!.scrollLeft = (currentIndex) * 16 * 45;
            }
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [currentIndex])

    useEffect(() => {
        if (window.innerWidth < 640) {
            list.current!.scrollLeft = (currentIndex) * 16 * 25;
        } else {
            list.current!.scrollLeft = (currentIndex) * 16 * 45;
        }
    }, [])

    const prev = (): void => {
        if (currentIndex > 0) {
            if (window.innerWidth < 640) {
                list.current!.scrollTo({ left: (currentIndex - 1) * 16 * 25, behavior: 'smooth' });
            } else {
                list.current!.scrollTo({ left: (currentIndex - 1) * 16 * 45, behavior: 'smooth' });
            }
            setCurrentIndex(currentIndex - 1);
        }
    }

    const next = (): void => {
        if (currentIndex < labels.current.length) {
            if (window.innerWidth < 640) {
                list.current!.scrollTo({ left: (currentIndex + 1) * 16 * 25, behavior: 'smooth' });
            } else {
                list.current!.scrollTo({ left: (currentIndex + 1) * 16 * 45, behavior: 'smooth' });
            }
            setCurrentIndex(currentIndex + 1);
        }
    }

    return (
        <article className="relative my-32">
            <h2 className="text-center text-4xl font-extrabold dark:text-white">
                Meet the fleet
            </h2>
            <div aria-hidden className="absolute bottom-0 w-full h-[5rem] sm:h-[10rem] bg-gradient-to-t from-gray-100 to-gray-300 dark:from-gray-700 dark:to-gray-900"></div>
            <ul
                ref={list}
                aria-labelledby="slide-show-heading-1"
                id="slide-show"
                tabIndex={-1}
                className='w-full my-20 flex items-center flex-nowrap child:mr-[5rem] overflow-x-scroll scrollbar-hide'
            >
                {
                    [
                        { src: '/images/208.png', alt: 'A silver Peugeot 208, city car in the category of economy', classes: 'h-[9rem] basis-[20rem] sm:h-[18rem] sm:basis-[40rem]' },
                        { src: '/images/panda.png', alt: 'A gray Fiat Panda, in the category of economy plus', classes: 'h-[10rem] basis-[20rem] sm:h-[20rem] sm:basis-[40rem] mt-[1rem] sm:mt-[2rem]' },
                        { src: '/images/golf.webp', alt: 'A navy Volkswagen Golf, city car in the category of compact', classes: 'h-[11.5rem] basis-[20rem] sm:h-[23rem] sm:basis-[40rem]' },
                        { src: '/images/jetta.webp', alt: 'A silver Volkswagen Jetta, in the category of compact plus', classes: 'h-[11.5rem] basis-[20rem] sm:h-[23rem] sm:basis-[40rem]' },
                        { src: '/images/cross.png', alt: 'A paprica orage Fiat Typo, hatchback in the category of cross city', classes: 'h-[11rem] basis-[20rem] sm:h-[22rem] sm:basis-[40rem]' },
                        { src: '/images/serie3.png', alt: 'A white BMW Serie 3, in the category of luxury', classes: 'h-[10rem] basis-[20rem] sm:h-[20rem] sm:basis-[40rem] mb-[1rem] sm:mb-[2rem]' },
                        { src: '/images/tiguan.webp', alt: 'A silver Volkswagen Tiguan, in the category of SUV', classes: 'h-[11.5rem] basis-[20rem] sm:h-[23rem] sm:basis-[40rem]' },
                    ].map((item, index: number) => (
                        <li
                            key={'car-item-' + index}
                            aria-current={currentIndex === index}
                            className={"relative first:ml-[calc(50%-10rem)] last:mr-[calc(50%-10rem)] sm:first:ml-[calc(50%-20rem)] sm:last:mr-[calc(50%-20rem)] grow-0 shrink-0 " + item.classes}
                        >
                            <Image src={item.src} alt={item.alt} fill />
                        </li>
                    ))
                }
            </ul>
            <div
                data-slide-show-target="#slide-show"
                aria-controls="slide-show"
                id="slide-show-heading-1"
                className="absolute -bottom-2 sm:bottom-2 left-1/2 -translate-x-1/2 w-full max-w-xs flex items-center justify-between"
            >
                <button
                    onClick={prev}
                    aria-label="go-to-previous-item"
                    type="button"
                    title={"Previous" + (currentIndex === 0 ? ' | Disabled' : '')}
                    className="rounded-full px-5 py-4 hover:bg-primary dark:hover:bg-primary/70 hover:shadow-lg disabled:opacity-50
                                transition-all duration-200 flex items-center justify-center
                                focus:outline-none focus:border-0 focus:ring-4 focus:ring-gray-300"
                    disabled={currentIndex === 0}
                >
                    <div className="relative w-6 h-7 rotate-180 bg-[url(/icons/chev.svg)] dark:bg-[url(/icons/chev-dark.svg)] bg-no-repeat" ></div>
                </button>
                <p className="text-lg font-bold dark:text-white">
                    {labels.current[currentIndex]}
                </p>
                <button
                    onClick={next}
                    title={"Next" + (currentIndex === labels.current.length - 1 ? ' | Disabled' : '')}
                    aria-label="go-to-next-item"
                    type="button"
                    className="rounded-full px-5 py-4 hover:bg-primary dark:hover:bg-primary/70 hover:shadow-lg disabled:opacity-50
                                transition-all duration-200 flex items-center justify-center
                                focus:outline-none focus:border-0 focus:ring-4 focus:ring-gray-300"
                    disabled={currentIndex === labels.current.length - 1}
                >
                    <div className="relative w-6 h-7 bg-[url(/icons/chev.svg)] dark:bg-[url(/icons/chev-dark.svg)] bg-no-repeat" ></div>
                </button>
            </div>
        </article>
    )
}
export default Fleet;