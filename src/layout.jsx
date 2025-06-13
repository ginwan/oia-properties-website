import React from 'react'
import Header from './components/Header'
import Langheader from './components/Langheader'

const Layout = ({ children }) => {
    return (
        <div>
            <Langheader />
            <Header />
            <div className=''>
                {children}
            </div>
        </div>
    )
}

export default Layout