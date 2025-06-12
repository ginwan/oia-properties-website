import React from 'react'

const Button = ({ text, icon, className }) => {
    return (
        <button type='button' className={`${className} flex items-center justify-center gap-2 font-semibold text-sm bg-yellow-500 border border-transparent hover:border-yellow-500 py-1.5 px-4 rounded-full`}>
            {text} {icon ? icon : null}
        </button>
    )
}

export default Button