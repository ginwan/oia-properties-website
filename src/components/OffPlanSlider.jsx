import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react'
import { useEffect, useRef, useState } from 'react'
import { Autoplay, Navigation } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';

import "swiper/css";
import SliderComponent from "./SliderComponent"

const OffPlanSlider = () => {
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
            <div className='mt-8 bg-gray-200 pt-4 md:pt-10 lg:px-16 md:pb-12 pb-0 relative'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={13}
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
                            <SliderComponent />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button
                    ref={prevRef}
                    onClick={handlePrevClick}
                    className="absolute top-12 md:left-16 left-6 z-50 bg-black/10 backdrop-blur-sm text-black p-2 md:p-4 rounded-full md:rounded-2xl cursor-pointer"
                >
                    <CaretLeftIcon size={isMobile || isTablet ? 18 : 32} />
                </button>
                <button
                    ref={nextRef}
                    onClick={handleNextClick}
                    className="absolute  top-12 md:right-16 right-6 z-50 bg-black/10 backdrop-blur-sm text-black p-2 md:p-4 rounded-full md:rounded-2xl cursor-pointer"
                >
                    <CaretRightIcon size={isMobile || isTablet ? 18 : 32} />
                </button>

            </div>
        </div>
    )
}

export default OffPlanSlider