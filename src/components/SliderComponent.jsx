import Button from './ui/Button';
import SaadiyatLagoons from "../assets/img/saadiyat_lagoons.jpeg"

const SliderComponent = () => {

    return (
        <div className=''>
            <div className='md:text-3xl text-[1.7rem] font-bold flex justify-center md:pt-7 pt-4'>SAADIYAT LAGOONS</div>
            <div className="overflow-hidden whitespace-nowrap pl-8 pt-4 sm:pt-10 sm:flex justify-center">
                <div className="flex gap-4 md:gap-12 text-md md:text-lg ">
                    <div className="inline-block">4 BHK VILLA + MADI'S</div>
                    <div className="inline-block">5 BHK VILLA + MADI'S</div>
                    <div className="inline-block">6 BHK VILLA + MADI'S</div>
                </div>
            </div>


            <div className='bg-white border-t-2 md:border-2 border-gray-300 rounded-t-lg md:rounded-lg mt-5 md:mt-8 md:flex gap-15 overflow-hidden'>
                <div className='p-6'>
                    <div className='capitalize text-gray-600 md:text-lg text-md max-w-[850px] md:pt-4 pt-0'>
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

                <div>
                    <img alt='img' src={SaadiyatLagoons} sizes={100} className='w-full h-full md:h-[400px] md:w-[1000px] relative object-cover' />
                </div>

            </div>

        </div>
    )
}

export default SliderComponent