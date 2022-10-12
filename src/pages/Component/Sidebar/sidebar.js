import SidebarMenu from "./sidebarMenu"

export default function sidebar() {
    return (
        <div>
            <div class="p-2">
                <div class="flex justify-center">
                    <img src="https://via.placeholder.com/150" class="w-40 p-3 rounded-full border-2 drop-shadow-md " alt="Profile" />
                </div>
                <p class="text-center text-xl mt-3 font-medium">หอพักมีสุข</p>
                <p class="text-center text-sm mb-2 font-normal text-slate-400">วันพฤหัสบดี 30 ตุลาคม 2565</p>
                <a class="text-xl inline-flex w-full justify-center col-span-1 bg-gradient-to-r from-emerald-600 to-emerald-900 hover:from-emerald-900 
                 hover:to-emerald-600 text-white border-2 border-solid border-green-500  rounded-lg drop-shadow-sm py-2" href="/#">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p class="ml-1 mr-1">เก็บค่าเช่า</p>
                </a>

            </div>
            <div class="col-span-1 bg-white mt-1 text-slate-500 font-medium rounded-md drop-shadow-lg border border-slate-200">
                <div class="grid grid-cols-1 py-2">
                    <SidebarMenu/>
                </div>
            </div>
        </div>

    )
}

