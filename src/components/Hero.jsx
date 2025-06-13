import React from 'react'
import SwiperComponent from './ui/Swiper'

import FpropertyImg from "../assets/img/first_property.jpg"
import SpropertyImg from "../assets/img/second_property.jpg"
import THpropertyImg from "../assets/img/third_property.jpg"
import OpacityBg from './ui/OpacityBg'
import Button from './ui/Button'
import { ArrowRightIcon } from '@phosphor-icons/react'
import SearchForm from './SearchForm'
import Toggle from './ui/Toggle'

const images = [THpropertyImg, SpropertyImg, FpropertyImg]

const Hero = () => {
    return (
        <div className='mt-1.5 text-white'>
            <SwiperComponent images={images} className='md:h-[100vh] h-[600px]' childrenClassName='md:mx-auto flex max-w-[1450px] items-center lg:px-8'>
                <div className='absolute top-17 z-30 md:right-20 md:left-20 left-2 right-2'>
                    <div className='font-semibold hidden text-5xl text-white leading-[1.2] max-w-4xl md:block'>
                        DISCOVER YOUR MOST COMFORT PLACE FOR YOUR FUTURE LIFE
                    </div>
                    <div className='font-semibold md:hidden text-3xl text-white leading-[1.2] text-center sm:max-w-2xl'>
                        DISCOVER YOUR MOST COMFORT PLACE FOR YOUR FUTURE LIFE
                    </div>
                    <div className='md:hidden flex items-center justify-center mt-10'>
                        <Button text="All Projects" icon={<ArrowRightIcon aria-hidden="true" className="size-3.5" />} className={"text-white px-8 py-3"} />
                    </div>
                    <div className='mt-10 md:flex hidden gap-4 items-center justify-between w-full'>
                        <OpacityBg className='flex items-center justify-between md:gap-5 gap-3'>
                            <div className='text-white flex items-center gap-1.5'>
                                <span className='text-4xl font-semibold'>5+</span>
                                <div className='max-w-sm w-full text-sm leading-5 ml-2'>
                                    POPULAR<br />AREAS
                                </div>
                            </div>
                            <div className='border border-r border-gray-300 h-10'></div>
                            <div className='text-white flex items-center gap-1.5'>
                                <span className='text-2xl'></span>
                                <div className='max-w-sm w-full text-sm leading-5 ml-4'>PROJECTS</div>
                            </div>
                            <div className='border border-r border-gray-300 h-10'></div>
                            <div className='text-white flex items-center gap-1.5'>
                                <span className='text-4xl font-semibold'>11+</span>
                                <div className='max-w-sm w-full text-sm leading-5 ml-5'>YEARS <br /> EXPERIENCE</div>
                            </div>
                            <div className='border border-r border-gray-300 h-10'></div>
                            <div className='text-white flex items-center gap-1.5'>
                                <span className='text-4xl font-semibold'>6+</span>
                                <div className='max-w-sm w-full text-sm leading-5'></div>
                            </div>
                        </OpacityBg>
                        <Button text="All Projects" icon={<ArrowRightIcon aria-hidden="true" className="size-3.5" />} className={"text-white py-1.5 px-4"} />
                    </div>
                </div>
                <div className='absolute bottom-10 z-30 md:right-10 md:left-10 md:w-auto w-full'>
                    <div className='flex items-center justify-center md:hidden mb-10'>
                        <Toggle />
                    </div>
                    <OpacityBg>
                        <SearchForm />
                    </OpacityBg>
                </div>
            </SwiperComponent>
        </div>
    )
}

export default Hero