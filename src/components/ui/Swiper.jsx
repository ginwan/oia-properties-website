// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules'

import { useEffect, useRef } from 'react';
import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react';

const SwiperComponent = ({ images, className, children, childrenClassName, imgClassName }) => {
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

    return (
        <div className='relative'>
            {/* fixed content */}
            <div className={`${childrenClassName}`}>
                {children}
            </div>
            <Swiper
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                loop={true}
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                modules={[Navigation]}
                className={`mySwiper ${className}`}
            >
                {images.map((img, i) => (
                    <SwiperSlide key={i}>
                        <div className="relative w-full sm:h-full h-[600px]">
                            {/* Image */}
                            <img src={img} alt={`property ${i + 1}`} className={`w-full sm:h-full object-cover ${imgClassName}`} />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black opacity-40  z-10" />

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Custom Buttons */}
            <button
                ref={prevRef}
                onClick={handlePrevClick}
                className="absolute top-1/2 left-4 z-20 transform -translate-y-1/2 bg-black/35 text-gray-300/70 p-2 rounded-full shadow cursor-pointer"
            >
                <CaretLeftIcon size={32} />
            </button>
            <button
                ref={nextRef}
                onClick={handleNextClick}
                className="absolute top-1/2 right-4 z-20 transform -translate-y-1/2 bg-black/35 text-gray-300/70 p-2 rounded-full shadow cursor-pointer"
            >
                <CaretRightIcon size={32} />
            </button>
        </div>
    )
}

export default SwiperComponent