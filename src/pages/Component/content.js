import { Outlet,useLocation } from 'react-router-dom'
import React from 'react'
import Home from '../Home'

export default function Content() {

    const location = useLocation();

    if ( location.pathname === "/") {
        return(
            <div>
                <Home/>
            </div>
        )
    }else{     
        return(
            <div>
                <Outlet />
            </div>
        )
    }
}