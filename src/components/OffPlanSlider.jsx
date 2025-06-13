import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react'
import { useEffect, useRef, useState } from 'react'
import { Autoplay, Navigation } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import Button from './ui/Button';
import SaadiyatLagoons from "../assets/img/saadiyat_lagoons.jpeg"

import "swiper/css";

const OffPlanSlider = () => {
    const [isMobile, setIsMobile] = useState(false); // To check screen size
    const [isTablet, setIsTablet] = useState(false);

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    const handlePrevClick = () => {
        if (swiperRef.current) swiperRef.current.slidePrev();
    };

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
    }, []);

    return (
        <div className='mt-12'>
            {/* Section title */}
            <div className='px-4 lg:px-16'>
                <div className='text-2xl md:text-6xl font-semibold border-l-8 border-yellow-500 px-4 inline-block'>
                    OFF-PLAN PROJECT
                </div>
            </div>

            {/* Section content */}
            <div className='mt-8 bg-gray-200 pt-4 md:pt-10 lg:px-16 md:pb-12 pb-0'>
                <div className='relative'>
                    <div className='text-3xl font-bold text-center'>SAADIYAT LAGOONS</div>
                    <Swiper
                        slidesPerView={isMobile ? 2.5 : isTablet ? 3.5 : 4.5}
                        spaceBetween={13}
                        // loop={true}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                        // autoplay={{
                        //     delay: 1000,
                        //     disableOnInteraction: false,
                        // }}
                        // speed={2000}
                        modules={[Navigation]}
                    >
                        {Array.from({ length: 10 }).map((_, i) => (
                            <SwiperSlide key={i} className='text-sm md:text-lg pt-4 sm:pt-10 pl-4'>
                                {i + 1} BHK VILLA + MADI'S
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <button
                        ref={prevRef}
                        onClick={handlePrevClick}
                        className="absolute top-1/4 left-4 z-20 transform -translate-y-1/2 bg-black/10 text-black p-2 md:p-4 rounded-full md:rounded-lg cursor-pointer"
                    >
                        <CaretLeftIcon size={18} />
                    </button>
                    <button
                        ref={nextRef}
                        onClick={handleNextClick}
                        className="absolute top-1/4 right-4 z-20 transform -translate-y-1/2 bg-black/10 text-black p-2 md:p-4 rounded-full md:rounded-lg cursor-pointer"
                    >
                        <CaretRightIcon size={18} />
                    </button>
                </div>

                <div className='bg-white border-t-2 md:border-2 border-gray-300 rounded-t-lg md:rounded-lg z-50 mt-5 md:flex gap-20 overflow-hidden'>
                    <div className='p-6'>
                        <div className='capitalize text-gray-600 md:text-lg text-md max-w-[850px]'>
                            Explore the adventure park, stroll access the stunning eco-corniche
                            ,soak in unparalleled culture experiences-in A choice of 4 to 6-bed
                            villas surrounded by Over 900,000m2 of protected wilderness.
                        </div>

                        <div className='mt-6 md:mt-10 md:text-lg text-md'>
                            <div className="flex space-x-2">
                                <span className='font-bold text-gray-800'>Starting Prices:</span>
                                <span className='font-bold text-yellow-500'>AED 6,200,000 </span>
                            </div>
                            <div className="flex space-x-2">
                                <span className='font-bold text-gray-800'>Number of Bedrooms: </span>
                                <span className='font-bold text-yellow-500'> 4, 5, 6 </span>
                            </div>
                            <div className="flex space-x-1">
                                <span className='font-bold text-gray-800'>Area Size From </span>
                                <span className='font-bold text-yellow-500'>4,960 SQ.FT</span>
                            </div>
                        </div>

                        <Button text='Book Your Property' className='mt-6 md:mt-10 w-full md:w-[40%] bg-yellow-500 text-white py-3 text-md cursor-pointer' />

                    </div>

                    <div className='w-full bg-amber-400'>

                        <img alt='img' src={SaadiyatLagoons} className='w-full h-[300px] sm:h-full md:h-[450px] object-cover' />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default OffPlanSlider