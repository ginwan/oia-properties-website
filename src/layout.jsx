import React from 'react'
import Header from './components/Header'
import Langheader from './components/Langheader'

const Layout = ({ children }) => {
    return (
        <div>
            <Langheader />
            <Header />
            {children}
        </div>
    )
}

export default Layout