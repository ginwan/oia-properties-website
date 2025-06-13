import { useEffect, useState } from 'react'

const Toggle = () => {
    const [value, setValue] = useState("for_rent");
    const [isMobile, setIsMobile] = useState(false); // To check screen size

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 640) // sm breakpoint
        }

        checkScreenSize() // run initially
        window.addEventListener("resize", checkScreenSize)

        return () => {
            window.removeEventListener("resize", checkScreenSize)
        }
    }, [])

    return (
        <div
            className="group relative flex cursor-pointer rounded-full bg-white p-1 ease-in-out focus:not-data-focus:outline-none data-checked:bg-white/10 data-focus:outline data-focus:outline-white"
        >
            <button
                aria-hidden="true"
                onClick={() => setValue("for_sale")}
                className={`${value === "for_sale" ? "md:bg-blue-950 bg-black text-white shadow-lg" : "bg-white text-black"} cursor-pointer md:px-5 px-8 md:py-1 py-2.5 inline-block  translate-x-0 rounded-full ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-7`}
            >
                {isMobile ? "SALE" : "FOR SALE"}
            </button>
            <button
                aria-hidden="true"
                onClick={() => setValue("for_rent")}
                className={`${value === "for_rent" ? "md:bg-blue-950 bg-black text-white shadow-lg" : "bg-white text-black"} cursor-pointer md:px-5 px-8 md:py-1 py-2.5 inline-block  translate-x-0 rounded-full ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-7`}
            >
                {isMobile ? "RENT" : "FOR RENT"}
            </button>
        </div>
    )
}

export default Toggle;
