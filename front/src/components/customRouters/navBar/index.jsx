import React from 'react'
import { NavBar } from './../../logoMenu/index'
import { Outlet } from 'react-router-dom'

const CustomNavBar = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default CustomNavBar;