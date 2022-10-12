import React from 'react'
import Navbars from "./pages/Component/navbars"
import Sidebar from './pages/Component/Sidebar/sidebar'
import Content from './pages/Component/content'

export default function App() {
    return (
        <div className="App">
            <Navbars />
            <div class="grid grid-cols-5 ">
                <div class="ml-3 ">
                    <Sidebar />
                </div>
                <div class="col-span-4 m-2 rounded-md p-2">
                    <Content/>   
                </div>
            </div>
        </div>
    )
}
