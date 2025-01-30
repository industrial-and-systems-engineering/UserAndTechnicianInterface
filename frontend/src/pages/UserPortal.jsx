import React from 'react'
import UserNavbar from '../components/UserNavbar'
import { Outlet, Navigate } from 'react-router-dom'
const UserPortal = () => {

    return (
        <div>
            <UserNavbar />
            <h1>welcome to user portal</h1>
            <Outlet />
        </div>
    )

}

export default UserPortal
