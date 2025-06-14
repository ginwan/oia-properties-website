import React, { useEffect, useRef, useState } from 'react'
import Card from './ui/Card';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import { Navigation } from 'swiper/modules';
import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react';
import Whatsapp from "../assets/animation/whatsapp.json"
import Lottie from 'react-lottie';


const PropertyCard = () => {
    const [value, setValue] = useState("for_sale");

    const [isMobile, setIsMobile] = useState(false); // To check screen size
    const [isTablet, setIsTablet] = useState(false);

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (
            swiperRef.current &&
            prevRef.current &&
            nextRef.current
        ) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    // const handlePrevClick = () => {
    //     if (swiperRef.current) swiperRef.current.slidePrev();
    // };

    const handleNextClick = () => {
        if (swiperRef.current) swiperRef.current.slideNext();
    };

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 640) // sm breakpoint
            setIsTablet(window.innerWidth < 1024)
        }

        checkScreenSize() // run initially
        window.addEventListener("resize", checkScreenSize)

        return () => {
            window.removeEventListener("resize", checkScreenSize)
        }
    }, [])

    return (
        <div className='mt-8 md:mt-16 pl-4 lg:pl-16 relative'>
            <div className="absolute -top-3 right-4 hidden md:block cursor-pointer">
                <Lottie
                    options={{
                        loop: true,
                        autoplay: true,
                        animationData: Whatsapp,
                        rendererSettings: {
                            preserveAspectRatio: "xMidYMid slice",
                        },
                    }}
                />
            </div>
            {/* Section title */}
            <div className='text-2xl md:text-5xl font-semibold border-l-8 border-yellow-500 px-4 inline-block'>
                LATEST PROPERTIES
            </div>
            {/* Button section */}
            <div className="mt-6 md:mt-8">
                <div
                    className="group relative flex md:w-[450px] sm:w-[340px] w-[310px] items-center justify-start bg-white ease-in-out focus:not-data-focus:outline-none data-checked:bg-white/10 data-focus:outline data-focus:outline-white"
                >
                    <button
                        aria-hidden="true"
                        onClick={() => setValue("for_sale")}
                        className={`${value === "for_sale" ? " text-black bg-yellow-500 rounded-l-lg border-2 border-transparent" : "bg-white text-blue-800 border-r-transparent border-2 border-gray-200 rounded-l-lg"} w-full font-semibold cursor-pointer px-8 md:px-16 md:py-2 py-2.5 inline-block  translate-x-0 ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-7`}
                    >
                        FOR SALE
                    </button>
                    <button
                        aria-hidden="true"
                        onClick={() => setValue("for_rent")}
                        className={`${value === "for_rent" ? " text-black bg-yellow-500 rounded-r-lg border-2 border-transparent" : "bg-white text-blue-800 border-l-transparent border-2 border-gray-200 rounded-r-lg"} w-full font-semibold cursor-pointer px-8 md:px-16 md:py-2 py-2.5 inline-block  translate-x-0 ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-7`}
                    >
                        FOR RENT
                    </button>
                </div>
            </div>
            <div className="mt-6 md:mt-8">
                <Swiper
                    slidesPerView={isMobile ? 1.1 : isTablet ? 1.8 : 3.2}
                    spaceBetween={11}
                    grabCursor={true}
                    loop={true}
                    onInit={(swiper) => {
                        swiperRef.current = swiper;
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    modules={[Navigation]}
                >
                    {Array.from({ length: 5 }).map((_, i) => (
                        <SwiperSlide key={i}>
                            <Card />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div>

                    <button
                        ref={nextRef}
                        onClick={handleNextClick}
                        className="absolute md:flex hidden top-1/2 left-4 z-20 transform -translate-y-1/2 bg-white text-gray-600 border border-gray-300 p-1 rounded-full shadow cursor-pointer"
                    >
                        <CaretLeftIcon size={24} />
                    </button>

                    {/* <button
                    ref={nextRef}
                    onClick={handleNextClick}
                    className="absolute md:flex hidden top-1/2 right-4 z-20 transform -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full shadow cursor-pointer"
                >
                    <CaretRightIcon size={32} />
                </button> */}
                </div>

            </div>
            <button
                type="button"
                className="flex md:hidden mx-auto mt-2 mb-18 items-center justify-center gap-2 font-semibold text-md py-2 px-6 bg-white border border-gray-800 hover:bg-gray-800 hover:text-white rounded-full cursor-pointer">
                All Properties
            </button>
        </div>
    )
}

export default PropertyCard