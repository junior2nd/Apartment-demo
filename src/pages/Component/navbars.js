export default function Navbars() {
    return (
        <body class="flex h-full flex-col text-white drop-shadow-md bg-gradient-to-r from-green-500 to-blue-500">
            <div>
                <header class="py-4 ">
                    <div class="mx-auto max-w-full px-4 sm:px-6">
                        <nav class="relative z-40 flex justify-between">
                            <div class="flex items-center gap-8">
                                <a aria-label="Home" href="/">
                                    <h1 class="font-bold">LOGO</h1>
                                </a>
                                {/* <p>หอพักมีสุข</p> */}
                            </div>
                            <div class="flex items-center gap-x-5 md:gap-x-8 text-lg">
                                <div class="hidden md:block">
                                    <a class="group inline-flex items-center justify-center rounded-full py-1 px-5  font-normal 
                                         focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white
                                         hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600 ring-2 ring-white"
                                        href="/#">
                                        <svg class="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <p class="ml-2">Supanut Meesuk</p> 
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>
        </body>
    )
}