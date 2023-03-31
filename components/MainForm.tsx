import { useRef, type FC, useState } from 'react';
import {
    Formik,
    Form,
} from 'formik';
import DatepickerField from './DatepickerField';
import { getAmadeusData } from '@/lib/amadeus';
import { uuid } from 'uuidv4';
import capitalizeString from '@/lib/capitalizeString';

const MainForm: FC = () => {
    const [pickUpSearch, setPickUpSearch] = useState<any[]>([]);
    const [returnSearch, setReturnSearch] = useState<any[]>([]);
    const ageLabel = useRef<HTMLLabelElement>(null);
    const pickUpLabel = useRef<HTMLLabelElement>(null);
    const dropOffLabel = useRef<HTMLLabelElement>(null);
    const pickUpField = useRef<HTMLFieldSetElement>(null);
    const dropOffField = useRef<HTMLFieldSetElement>(null);
    const startDateLabel = useRef<HTMLLabelElement>(null);
    const endDateLabel = useRef<HTMLLabelElement>(null);

    const handleInputFocus = (ref: any): void => {
        ref.current.classList.remove('top-2');
        ref.current.classList.add('text-sm', '-top-4', 'font-bold', 'bg-white', 'dark:bg-gray-900');
    }

    const handleMoblieFocus = (ref: any, field: any): void => {
        if (window.innerWidth <= 640) {
            field.current.classList.remove('relative');
            field.current.classList.add('fixed', 'top-4', 'left-0', 'z-50', 'bg-white', 'dark:bg-gray-900', 'w-full', 'h-full', 'p-5');
            ref.current.classList.add('top-1', 'left-6');
        }
    }

    const handleMoblieBlur = (ref: any, field: any, force: boolean = false): void => {
        if (pickUpSearch.length === 0 && returnSearch.length === 0 || force) {
            field.current!.classList.remove('fixed', 'top-4', 'left-0', 'z-50', 'bg-white', 'dark:bg-gray-900', 'w-full', 'h-full', 'p-5');
            field.current!.classList.add('relative');
            ref.current.classList.remove('top-1', 'left-6');
        }
    }

    const handleInputBlur = (input: HTMLInputElement, ref: any): void => {
        if (input.value.length < 1) {
            ref.current.classList.remove('text-sm', '-top-4', 'font-bold', 'bg-white', 'dark:bg-gray-900');
            ref.current.classList.add('top-2');
        }
    }

    return (
        <div
            className='relative -top-[10rem] mx-auto w-[calc(100%-2.5rem)] lg:w-full max-w-screen-lg p-5 bg-white border border-gray-200 
                    dark:bg-gray-900 dark:border-gray-600 rounded-2xl'
        >
            <hgroup className='mb-5 flex flex-col sm:flex-row justify-between items-center dark:text-white'>
                <h1 className="text-2xl sm:text-3xl font-bold">
                    Find the best Deal
                </h1>
                <small className='text-xs leading-10'>
                    *all fields are required
                </small>
            </hgroup>
            <Formik
                initialValues={{
                    age: '',
                    'pick-up': '',
                    'drop-off': '',
                    'return-elsewhere': false,
                    'start-date': '',
                    'end-date': '',

                }}
                onSubmit={(values, actions) => {

                }}
            >
                {({ handleChange, values, setValues }) => (
                    <Form>
                        <fieldset className='my-10 md:my-5 relative' ref={pickUpField} >
                            <label
                                ref={pickUpLabel}
                                htmlFor="pick-up"
                                className='absolute top-2 left-2 dark:text-gray-400 flex items-end px-2'
                            >
                                <span>{values['return-elsewhere'] ? 'Pick-up Location' : 'Pick-up & Return Location'}</span>
                                <span aria-hidden className='inline-block ml-2 w-4 h-5 bg-[url("/icons/location.svg")] dark:bg-[url("/icons/location-dark.svg")] bg-no-repeat' ></span>
                            </label>
                            <input
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.code === 'NumPadEnter' || e.code === 'Enter') {
                                        setPickUpSearch([]);
                                        handleInputBlur(e.target as HTMLInputElement, pickUpLabel);
                                        handleMoblieBlur(pickUpLabel, pickUpField);
                                    }
                                }}
                                onFocus={(e) => {
                                    handleInputFocus(pickUpLabel);
                                    handleMoblieFocus(pickUpLabel, pickUpField);
                                }}
                                onBlur={(e) => {
                                    handleInputBlur(e.target, pickUpLabel);
                                    handleMoblieBlur(pickUpLabel, pickUpField);
                                    setTimeout(() => {
                                        if (window.innerWidth >= 640) {
                                            setPickUpSearch([]);
                                        }
                                    }, 1000);
                                }}
                                onChange={(e) => {
                                    if (e.target.value.match(/^(\p{L}|\p{N}|\s)*$/u,) !== null) {
                                        handleChange(e);
                                        getAmadeusData({ keyword: e.target.value.toLowerCase() }).then(res => {
                                            setPickUpSearch(res.data.data ?? []);
                                        });
                                    }
                                }}
                                value={values['pick-up']}
                                type="text"
                                name='pick-up'
                                id='pick-up'
                                className='bg-transparent border border-gray-200 dark:border-gray-500 rounded-lg p-2 w-appearance-none m-0
                                            dark:text-gray-400 w-full focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-500 focus:outline-none focus:border-0'
                            />
                            <ul
                                aria-label='search-results'
                                className='sm:absolute sm:top-[3rem] sm:left-0 w-full sm:mx-0 bg-white z-20'
                            >
                                {
                                    pickUpSearch.map(result =>
                                        <li key={uuid()} >
                                            <button
                                                type='button'
                                                className='flex items-center justify-between w-full border border-gray-200 text-left px-2 py-1 hover:bg-gray-100'
                                                onClick={() => {
                                                    setValues({
                                                        ...values,
                                                        "pick-up": result.name,
                                                    });
                                                    setTimeout(() => {
                                                        setPickUpSearch([]);
                                                        handleMoblieBlur(pickUpLabel, pickUpField, true);
                                                        handleInputBlur(pickUpField.current?.childNodes[1] as HTMLInputElement, pickUpLabel);
                                                        handleInputFocus(pickUpLabel);
                                                    }, 0);
                                                }}
                                            >
                                                <span className='text-gray-600 font-xs'>
                                                    <strong>{capitalizeString(result.name)}</strong> |{' '}
                                                    {capitalizeString(result.address.countryName)}
                                                </span>
                                                <span className='text-xs font-bold'>{result.iataCode}</span>
                                            </button>
                                        </li>
                                    )
                                }
                            </ul>
                        </fieldset>
                        {
                            values['return-elsewhere'] &&
                            <fieldset className='my-10 md:my-5 relative' ref={dropOffField} >
                                <label
                                    ref={dropOffLabel}
                                    htmlFor="drop-off"
                                    className='absolute top-2 left-2 dark:text-gray-400 flex items-end px-2'
                                >
                                    <span>Return Location</span>
                                    <span aria-hidden className='inline-block ml-2 w-4 h-5 bg-[url("/icons/location.svg")] dark:bg-[url("/icons/location-dark.svg")] bg-no-repeat' ></span>
                                </label>
                                <input
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.code === 'NumPadEnter' || e.code === 'Enter') {
                                            setReturnSearch([]);
                                            handleInputBlur(e.target as HTMLInputElement, dropOffLabel);
                                            handleMoblieBlur(dropOffLabel, dropOffField);
                                        }
                                    }}
                                    onFocus={(e) => {
                                        handleInputFocus(dropOffLabel);
                                        handleMoblieFocus(dropOffLabel, dropOffField);
                                    }}
                                    onBlur={(e) => {
                                        handleInputBlur(e.target, dropOffLabel);
                                        handleMoblieBlur(dropOffLabel, dropOffField);
                                    }}
                                    onChange={(e) => {
                                        if (e.target.value.match(/^(\p{L}|\p{N}|\s)*$/u,) !== null) {
                                            handleChange(e);
                                            getAmadeusData({ keyword: e.target.value.toLowerCase() }).then(res => {
                                                setReturnSearch(res.data.data ?? []);
                                            });
                                        }
                                    }}
                                    value={values['drop-off']}
                                    type="text"
                                    name='drop-off'
                                    id='drop-off'
                                    className='bg-transparent border border-gray-200 dark:border-gray-500 rounded-lg p-2 w-appearance-none m-0
                                            dark:text-gray-400 w-full focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-500 focus:outline-none focus:border-0'
                                />
                                <ul
                                    aria-label='search-results'
                                    className='sm:absolute sm:top-[3rem] sm:left-0 w-full sm:mx-0 bg-white z-10'
                                >
                                    {
                                        returnSearch.map(result =>
                                            <li key={uuid()} >
                                                <button
                                                    type='button'
                                                    className='flex items-center justify-between w-full border border-gray-200 text-left px-2 py-1 hover:bg-gray-100'
                                                    onClick={() => {
                                                        setValues({
                                                            ...values,
                                                            "drop-off": result.name,
                                                        });
                                                        setTimeout(() => {
                                                            setReturnSearch([]);
                                                            handleMoblieBlur(dropOffLabel, dropOffField, true);
                                                            handleInputBlur(pickUpField.current?.childNodes[1] as HTMLInputElement, dropOffLabel);
                                                            handleInputFocus(dropOffLabel);
                                                        }, 0);
                                                    }}
                                                >
                                                    <span className='text-gray-600 font-xs'>
                                                        <strong>{capitalizeString(result.name)}</strong> |{' '}
                                                        {capitalizeString(result.address.countryName)}
                                                    </span>
                                                    <span className='text-xs font-bold'>{result.iataCode}</span>
                                                </button>
                                            </li>
                                        )
                                    }
                                </ul>
                            </fieldset>
                        }
                        <fieldset className='my-10 md:my-5 flex flex-col items-start gap-10 md:gap-5 sm:flex-row sm:items-center justify-between'>
                            <div className='flex items-center'>
                                <input
                                    onChange={handleChange}
                                    checked={values['return-elsewhere']}
                                    type="checkbox"
                                    name="return-elsewhere"
                                    id='return-elsewhere'
                                    className='w-5 h-5 mr-3 outline-none border bg-transparent border-gray-200 dark:border-gray-500 rounded-lg focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-500
                                                focus:border-none focus:outline-none'
                                />
                                <label htmlFor="return-elsewhere" className='text-xs md:text-base dark:text-gray-400' >
                                    Return to a different location
                                </label>
                            </div>
                            <div className='relative' >
                                <label
                                    ref={ageLabel}
                                    htmlFor="age"
                                    className='absolute top-2 left-2 dark:text-gray-400 px-2'
                                >
                                    Renter Age
                                </label>
                                <input
                                    onFocus={() => handleInputFocus(ageLabel)}
                                    onBlur={(e) => handleInputBlur(e.target, ageLabel)}
                                    onChange={(e) => {
                                        if ((e.target.value.match(/^\d*$/) !== null && parseInt(e.target.value) < 100 && parseInt(e.target.value) > 0) || e.target.value === '') {
                                            handleChange(e);
                                        }
                                    }}
                                    value={values.age}
                                    type="text"
                                    inputMode='numeric'
                                    name='age'
                                    id='age'
                                    className='bg-transparent border border-gray-200 dark:border-gray-500 rounded-lg p-2 w-appearance-none m-0
                                            dark:text-gray-400 w-28 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-500 focus:outline-none focus:border-0'
                                />
                            </div>
                        </fieldset>
                        <fieldset className='mt-5 mb-7 flex flex-col md:flex-row gap-10 md:gap-5' >
                            <div className='relative w-full'>
                                <DatepickerField
                                    name='start-date'
                                    id='start-date'
                                    onFocus={() => handleInputFocus(startDateLabel)}
                                    onBlur={(e: any) => handleInputBlur(e.target, startDateLabel)}
                                />
                                <label
                                    ref={startDateLabel}
                                    htmlFor="start-date"
                                    className='absolute top-2 left-2 dark:text-gray-400 flex items-center px-2'
                                >
                                    <span>Pick-up Date & Time</span>
                                    <span aria-hidden className='inline-block ml-2 w-4 h-5 bg-[url("/icons/calendar.svg")] dark:bg-[url("/icons/calendar-dark.svg")] bg-no-repeat' ></span>
                                </label>
                            </div>
                            <div className='relative w-full'>
                                <DatepickerField
                                    name='end-date'
                                    id='end-date'
                                    onFocus={() => handleInputFocus(endDateLabel)}
                                    onBlur={(e: any) => handleInputBlur(e.target, endDateLabel)}
                                />
                                <label
                                    ref={endDateLabel}
                                    htmlFor="end-date"
                                    className='absolute top-2 left-2 dark:text-gray-400 flex items-center px-2'
                                >
                                    <span>Drop-off Date & Time</span>
                                    <span aria-hidden className='inline-block ml-2 w-4 h-5 bg-[url("/icons/calendar.svg")] dark:bg-[url("/icons/calendar-dark.svg")] bg-no-repeat' ></span>
                                </label>
                            </div>
                        </fieldset>
                        <button
                            type="button"
                            className="focus:outline-none font-bold text-white bg-primary hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 rounded-lg 
                            text-lg px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 transition-colors duration-200 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
                        >
                            Search
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );

}

export default MainForm;