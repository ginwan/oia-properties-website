import { BathtubIcon, BedIcon, HeartIcon, MapPinIcon, NotchesIcon } from "@phosphor-icons/react"
import FVilla from "../../assets/img/first_villa.jpg"
import SVilla from "../../assets/img/second_villa.jpg"
import THVilla from "../../assets/img/third_villa.jpg"
import SwiperComponent from "./Swiper"
import Button from "./Button"

const images = [THVilla, SVilla, FVilla]
const Card = () => {
    return (
        <div className="overflow-hidden border border-gray-400 rounded-lg bg-white shadow-sm mb-6">
            <SwiperComponent images={images} className='h-[240px]'>
                <div className="absolute top-4 z-30 left-6 right-6 flex items-center justify-between">
                    <div className="flex flex-col items-start gap-2">
                        <div className="rounded-lg bg-yellow-500 px-2 py-1 text-md text-white">For Sale</div>
                        <div className="rounded-lg bg-black/30 px-2 py-1 text-md text-white">Under Construction</div>
                    </div>
                    <div className="flex items-center justify-center border-b border-gray-900/5 bg-black/50 p-2 rounded-full">
                        <HeartIcon aria-hidden="true" className="size-6 text-yellow-500" />
                    </div>
                </div>
                <div className="absolute bottom-3 z-30 left-6 right-6 text-white text-xl">
                    $1.249.000
                </div>
            </SwiperComponent>
            <div className="px-6 pt-4 pb-2">
                {/* Content goes here */}
                <div className="text-lg font-semibold text-gray-900">BUILDING NAME</div>
                <div className="text-md text-gray-500 flex items-center mt-2">
                    <MapPinIcon size={20} weight="fill" className="mr-2 text-yellow-500" />
                    Abu Dhabi, Yas Island
                </div>
                <div className="flex items-center mt-2 gap-2">
                    <div className=" text-gray-800 flex items-center border-r border-gray-400 pr-2">
                        <BedIcon size={24} weight="fill" className="mr-2 text-yellow-500" />
                        3 Bed
                    </div>
                    <div className=" text-gray-800 flex items-center border-r border-gray-400 px-3">
                        <BathtubIcon size={24} weight="fill" className="mr-2 text-yellow-500" />
                        3 Bath
                    </div>
                    <div className=" text-gray-800 flex items-center">
                        <NotchesIcon size={24} weight="fill" className="mr-2 text-yellow-500" />
                        1.142 FT
                    </div>
                </div>
                <div className="flex items-center mt-2.5 gap-4 w-full">
                    <button
                        type="button"
                        className="flex w-full items-center justify-center gap-2 font-semibold text-md py-2 bg-white border border-gray-800 hover:bg-gray-800 hover:text-white rounded-md cursor-pointer">
                        Call
                    </button>
                    <button
                        type="button"
                        className="flex w-full items-center justify-center gap-2 font-semibold text-md py-2 bg-white border border-gray-800 hover:bg-gray-800 hover:text-white rounded-md cursor-pointer">
                        E-mail
                    </button>
                </div>
            </div>
            <div className="border-t border-gray-300 mx-6" />
            <div className="px-6 pb-4 pt-2 flex items-center justify-between">
                {/* Content goes here */}
                {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
                <div>
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="relative z-20 inline-block size-12 h-10 w-10 mr-3 rounded-full ring-2 ring-white"
                    />
                    <span className="text-md text-gray-700 font-semibold">Jane Smith</span>
                </div>
                <button
                    type="button"
                    className="flex items-center justify-center gap-2 font-semibold text-md py-2 px-9 text-yellow-500 bg-white border border-yellow-500 hover:bg-yellow-500 hover:text-white rounded-full cursor-pointer">
                    Details
                </button>
            </div>
        </div>
    )
}

export default Card;
