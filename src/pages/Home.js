import Navbars from "./Component/navbars"
import Sidebar from './Component/sidebar'
import Content from './Component/content'

export default function Home() {
    return (
        <div>
            <Navbars />
            <div class="grid grid-cols-5 h-full ">
                <div class="bg-slate-50 p-2 h-screen drop-shadow-lg px-4">
                    <Sidebar />
                </div>
                <div class="col-span-4 m-2 rounded-md p-3">
                    <Content/>   
                </div>
            </div>

        </div>
    )
}
