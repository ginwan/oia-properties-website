import React from 'react'

const Button = ({ text, icon, className }) => {
    return (
        <button type='button' className={`${className} flex items-center justify-center gap-2 font-semibold bg-yellow-500 border border-transparent hover:border-yellow-500 rounded-full cursor-pointer`}>
            {text} {icon ? icon : null}
        </button>
    )
}

export default Button