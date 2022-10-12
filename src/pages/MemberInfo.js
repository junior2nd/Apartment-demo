import {
    FaFileAlt,
} from "react-icons/fa"
import { RoomData } from './Component/DataTest/RoomData'

export default function MemberInfo() {
    const roomList = RoomData.map(room => {
        return (
            <div class="grid border-2 rounded-md p-2 drop-shadow-md" key={room.id}>
                <a href="/MemberInfo">
                    <p class="text-center bg-slate-200 rounded">ห้อง</p>
                    <p class="text-center text-4xl my-4">{room.room}</p>
                    <ChkStatus status={room.status}/>
                </a>
            </div>
        )
    })

    return (
        <div class="col-span-1 bg-white mt-1 text-slate-500 font-medium rounded-md drop-shadow-lg border border-slate-200 ">
            <div class="grid grid-cols-1 m-8 " >
                <div div class="grid" >
                    <span class="inline-flex text-2xl font-normal">
                        <span class="text-3xl mr-3"><FaFileAlt /></span>
                        <h2 class="">ข้อมูลผู้เช่า</h2>
                    </span>
                </div>
            </div >
            <div class="grid grid-cols-5 gap-4 mx-2 my-4 px-3">
                {roomList}
            </div>

        </div >
    )
}

function ChkStatus(props) {
    if (props.status === true) {
        return <p class="text-center bg-green-200 rounded">ว่าง</p>    
    }else{
        return <p class="text-center bg-red-500 text-white rounded">ไม่ว่าง</p>   
    }
}