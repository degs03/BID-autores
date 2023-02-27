import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {

    return (
        <>
            <div className='container'>
                <h1>Favorites Authors</h1>
                <Outlet />
            </div>
        </>
    )
}

export default Layout