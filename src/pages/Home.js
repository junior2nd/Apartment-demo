import WaterChart from './Component/Chart/waterChart'
import ElectricChart from './Component/Chart/electricChart'
import { UserData } from './Component/Chart/dataTest'
import { useState } from 'react'

export default function Home() {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [{
            label: "User Gained",
            data: UserData.map((data) => data.userGain),
            backgroundColor: ["#2B6CB6", "#3989E5"]

        }]
    })

    return (
        <div class="md:grid grid-flow-row-dense grid-cols-6 grid-rows-1 gap-2">
            <div class="col-span-2 border-2 rounded-lg drop-shadow-md p-2 ">
                <div class="grid grid-rows-1 ">
                    <a href="/#">
                        <p class="bg-gradient-to-r from-green-500 to-blue-500 font-semibold 
                         text-white text-center rounded-md py-2 my-1 ">จำนวนห้องว่าง</p>
                        <div class="flex flex-auto justify-center my-3">
                            <p class="text-5xl font-bold">1</p>
                            <p class="absolute bottom-2 right-6">ห้อง</p>
                        </div>
                    </a>
                </div>
            </div>
            <div class="col-span-2 border-2 rounded-lg drop-shadow-md p-2">
                <div class="grid grid-rows-1">
                    <a href="/#">
                        <p class="bg-gradient-to-r from-green-500 to-blue-500 font-semibold
                        text-white text-center rounded-md py-2 my-1">กำไรสุทธิ (ปี 2565)</p>
                        <div class="flex flex-auto justify-center my-3">
                            <p class="text-4xl font-bold">15,000,000</p>
                            <p class="absolute bottom-2 right-6">บาท</p>
                        </div>
                    </a>
                </div>
            </div>
            <div class="col-span-2 border-2 rounded-lg drop-shadow-md p-2">
                <div class="grid grid-rows-1">
                    <a href="/#">
                        <p class="bg-gradient-to-r from-red-500 to-red-900 font-semibold
                        text-white text-center rounded-md py-2 my-1">แจ้งซ่อม</p>
                        <div class="flex flex-auto justify-center my-3">
                            <p class="text-5xl font-bold">1</p>
                            <p class="absolute bottom-2 right-6">เรื่อง</p>
                        </div>
                    </a>
                </div>
            </div>
            <div class="col-span-3 border-2 rounded-lg drop-shadow-md p-2">
                <div class="grid grid-rows-1">
                    <a href="/#">
                        <p class="bg-gradient-to-r from-blue-900 to-blue-600 font-semibold
                         text-white text-center rounded-md py-2 my-1">ค่าน้ำ</p>
                        <div class="flex flex-auto justify-center my-3">
                            <WaterChart chartData={userData} />
                        </div>
                    </a>
                </div>
            </div>
            <div class="col-span-3 border-2 rounded-lg drop-shadow-md p-2">
                <div class="grid grid-rows-1">
                    <a href="/#">
                        <p class="bg-gradient-to-r from-yellow-500 to-yellow-800 font-semibold
                         text-white text-center rounded-md py-2 my-1">ค่าไฟ</p>
                        <div class="flex flex-auto justify-center my-3">
                            <ElectricChart chartData={userData} />
                        </div>
                    </a>
                </div>
            </div>

        </div>
    )
}
