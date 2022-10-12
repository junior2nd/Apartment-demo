import {
    FaHome,
    FaUserPlus,
    FaFileAlt,
    FaHotel,
    FaPowerOff,
    FaCogs,
    FaBook
} from "react-icons/fa"

export const SidebarData = [
    {
        id: 1,
        title: 'หน้าแรก',
        path: 'Home',
        icon: <FaHome />
    },
    {
        id: 2,
        title: 'เพิ่มข้อมูลผู้เช่าใหม่',
        path: 'MemberRegister',
        icon: <FaUserPlus />
    },
    {
        id: 3,
        title: 'ข้อมูลผู้เช่า',
        path: 'MemberInfo',
        icon: <FaFileAlt/>
    },
    {
        id: 4,
        title: 'ข้อมูลหอพัก',
        path: 'ApartmentInfo',
        icon: <FaHotel/>
    },
    {
        id: 5,
        title: 'คู่มือการใช้งาน',
        path: 'Tutorial',
        icon: <FaBook/>
    },
    {
        id: 6,
        title: 'ตั้งค่าระบบ',
        path: 'Setting',
        icon: <FaCogs/>
    },
    {
        id: 7,
        title: 'ออกจากระบบ',
        path: '/',
        icon: <FaPowerOff/>
    },

];