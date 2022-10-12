import {
    FaUserPlus,
} from "react-icons/fa"

export default function MemberRegister() {
    return (
        <div class="col-span-1 bg-white mt-1 text-slate-500 font-medium rounded-md drop-shadow-lg border border-slate-200 ">
            <div class="grid grid-cols-1 m-8 ">
                {/* Title */}
                <div class="grid">
                    <span class="inline-flex text-2xl font-normal">
                        <span class="text-3xl mr-3"><FaUserPlus /></span>
                        <h2 class="">เพิ่มข้อมูลสมาชิก</h2>
                    </span>
                </div>
                {/* InputBox */}
                <form>
                    <div class=" mx-2 mt-4 px-3 py-2 border-l-2 border-slate-500">
                        <div class="grid grid-cols-3 ml-2 gap-6">
                            <div class="col-span-1">
                                <div class="p-2 mb-2 rounded bg-slate-200">
                                    <p>
                                        <span class="block text-center">เลือกห้องว่าง</span>
                                        <select class="form-select w-full p-1 rounded-md border" >
                                            <option>ห้อง 2</option>
                                        </select>
                                    </p>
                                </div>
                                <p>
                                    <span class="block ">ชื่อ</span>
                                    <input type="text" class="form-input w-full p-1 rounded-md border placeholder:text-center placeholder:font-normal" ></input>
                                </p>
                                <p>
                                    <span class="block ">นามสกุล</span>
                                    <input type="text" class="form-input w-full p-1 rounded-md border placeholder:text-center placeholder:font-normal" ></input>
                                </p>
                                <p>
                                    <span class="block ">วันเดือนปีเกิด</span>
                                    <input type="date" class="form-input w-full p-1 rounded-md border"></input>
                                </p>
                                <p>
                                    <span class="block ">เบอร์โทรศัพท์</span>
                                    <input type="text" class="form-input w-full p-1 rounded-md border placeholder:text-center placeholder:font-normal" ></input>
                                </p>
                                <p>
                                    <span class="block">ที่อยู่</span>
                                    <textarea class="form-textarea w-full p-1 rounded-md border placeholder:text-center placeholder:font-normal" ></textarea>
                                </p>
                                <p >
                                    <span class="block ">จังหวัด</span>
                                    <select class="form-select text-cen w-full p-1 rounded-md border" >
                                        <option>BKK</option>
                                        <option>Korat</option>
                                    </select>
                                </p>
                                <p>
                                    <span class="block">อำเภอ</span>
                                    <select class="form-select w-full p-1 rounded-md border" >
                                        <option>อำเภอ</option>
                                    </select>
                                </p>
                                <p>
                                    <span class="block">ตำบล</span>
                                    <select class="form-select w-full p-1 rounded-md border" >
                                        <option>ตำบล</option>
                                    </select>
                                </p>
                                <p>
                                    <span class="block">รหัสไปรษณีย์</span>
                                    <input type="text" class="form-input w-full p-1 rounded-md border placeholder:text-center placeholder:font-normal" ></input>
                                </p>

                            </div>
                            <div>
                                <p class="px-2">
                                    <span class="block text-center">บัตรประชาชน</span>
                                    <div class="flex justify-center">
                                        <img src="https://via.placeholder.com/150" class="w-full h-96 p-3 rounded-xl border-2 drop-shadow-md " alt="Profile" />

                                    </div>
                                    <div class="flex justify-center">
                                        <label class="block mt-2 mx-4">
                                            <span class="sr-only">Choose profile photo</span>
                                            <input type="file" class="block w-full text-sm text-slate-500
                                        file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
                                        file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700                                  
                                        hover:file:bg-violet-100"/>
                                        </label>
                                    </div>
                                </p>
                                <a class="mt-4 text-xl inline-flex w-full justify-center col-span-1 bg-gradient-to-r from-emerald-600 to-emerald-900 hover:from-emerald-900 
                                 hover:to-emerald-600 text-white border-2 border-solid border-green-500  rounded-lg drop-shadow-sm py-2" href="/#">
                                    <FaUserPlus class="w-6 mt-1 mr-2" />
                                    <p class="ml-1 mr-1">เพิ่มข้อมูลสมาชิก</p>
                                </a>
                            </div>

                        </div>

                    </div>
                </form>
            </div>
        </div>

    )
}