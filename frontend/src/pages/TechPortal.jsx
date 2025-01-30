import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import TechNavbar from '../components/TechNavbar'

function TechPortal() {
    return (
        <div>
            <TechNavbar />
            <h1>Welcome to TechPortal</h1>
            <Outlet />
        </div>
    )
}

export default TechPortal
