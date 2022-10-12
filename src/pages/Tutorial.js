import {
    FaBook,
} from "react-icons/fa"

export default function Tutorial() {
    return (

        <div class="col-span-1 bg-white mt-1 text-slate-500 font-medium rounded-md drop-shadow-lg border border-slate-200 ">
            <div class="grid grid-cols-1 m-8 ">
                {/* Title */}
                <div class="grid">
                    <span class="inline-flex text-2xl font-normal">
                        <span class="text-3xl mr-3"><FaBook /></span>
                        <h2 class="">ข้อมูลผู้เช่า</h2>
                    </span>
                </div>
                {/* InputBox */}
                <div class=" mx-2 mt-4 px-3 py-2 border-l-2 border-slate-500">

                </div>

            </div>
        </div>

    )
}