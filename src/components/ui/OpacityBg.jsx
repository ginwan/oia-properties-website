import React from 'react'

const OpacityBg = ({ children, className }) => {
    return (
        <div className="relative">
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-10 border border-transparent md:rounded-md" />
            <div className={`relative z-20 sm:py-8 sm:px-8 py-6 px-4 ${className}`}>
                {children}
            </div>
        </div>
    )
}

export default OpacityBg