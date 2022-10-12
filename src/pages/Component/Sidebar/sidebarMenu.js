import React from 'react'
import { SidebarData } from './sidebarData'
import {Link} from 'react-router-dom'

export default function SidebarMenu() {
    return (
        <div>
            {SidebarData.map(sidebarData => {
                return (
                        <div class="grid grid-cols-1 divide-y" key={sidebarData.id}>
                            <Link class="inline-flex p-3 hover:bg-slate-600 hover:text-white " to={sidebarData.path}>
                                <span class="w-3 pt-1 mr-2 ml-1">{sidebarData.icon}</span>
                                <p class="ml-3">{sidebarData.title}</p>
                            </Link>
                        </div>
                )
            })}
        </div>
    )
}