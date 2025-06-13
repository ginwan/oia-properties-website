import { ArrowClockwiseIcon, MagnifyingGlassIcon } from "@phosphor-icons/react"
import { useForm, Controller } from "react-hook-form"
import DropMenu from "./ui/Menu"
import Button from "./ui/Button"
import Toggle from "./ui/Toggle"
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline"

const SearchForm = () => {
    const { register, handleSubmit, control, reset } = useForm()

    const onSubmit = (data) => {
        console.log(data) // all values from inputs and dropdowns
    }

    const handleReset = () => {
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="md:flex items-center w-full gap-10 mb-8 hidden">
                <Toggle />
                <button
                    type="button"
                    onClick={handleReset}
                    className="flex items-center gap-2 text-white px-2 py-1 border-b border-white cursor-pointer"
                >
                    <ArrowClockwiseIcon size={18} />
                    RESET
                </button>
            </div>

            <div className="flex items-center justify-between w-full gap-2 sm:flex-wrap">
                <div className="relative flex-1 min-w-[200px]">
                    <input
                        {...register("search")}
                        type="text"
                        placeholder="City, community, area"
                        className="block w-full rounded-md border border-transparent bg-white py-2 pr-3 pl-10 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-none sm:text-sm"
                    />
                    <MagnifyingGlassIcon
                        aria-hidden="true"
                        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        size={18}
                    />
                </div>

                <div className="flex-1 min-w-[180px] hidden md:block">
                    <Controller
                        control={control}
                        name="propertyType"
                        render={({ field }) => (
                            <DropMenu
                                {...field}
                                title="Property type"
                                items={["Apartment", "Villa", "Townhouse", "Office", "Duplex"]}
                                className="w-full"
                            />
                        )}
                    />
                </div>

                <div className="flex-none hidden md:block">
                    <Controller
                        control={control}
                        name="bedrooms"
                        render={({ field }) => (
                            <DropMenu
                                {...field}
                                title="Bedrooms"
                                items={["1", "2", "3", "4", "5"]}
                                className="w-36"
                            />
                        )}
                    />
                </div>

                <div className="flex-none hidden md:block">
                    <Controller
                        control={control}
                        name="propertySize"
                        render={({ field }) => (
                            <DropMenu
                                {...field}
                                title="Property size"
                                items={["100", "200", "300", "400", "500"]}
                                className="w-36"
                            />
                        )}
                    />
                </div>

                <div className="flex-none hidden md:block">
                    <Controller
                        control={control}
                        name="price"
                        render={({ field }) => (
                            <DropMenu
                                {...field}
                                title="Price"
                                items={["10000", "20000", "300000", "40000", "50000"]}
                                className="w-36"
                            />
                        )}
                    />
                </div>

                <div className="md:hidden block">
                    <button type="button" className="bg-white border border-transparent rounded-md p-1.5 flex items-center justify-center cursor-pointer">
                        <AdjustmentsHorizontalIcon
                            aria-hidden="true"
                            className="text-black h-7 w-7"
                        />
                    </button>

                </div>

                <div className="md:block flex-none">
                    <Button text="Search" className="text-white hidden md:flex py-2 px-4 text-sm" />
                    <Button icon={<MagnifyingGlassIcon
                        aria-hidden="true"
                        // className="h-10 w-10"
                        size={20}
                    />} className="text-white md:hidden h-12 w-12 py-1 px-1 text-sm" />
                </div>
            </div>
        </form>
    )
}

export default SearchForm
