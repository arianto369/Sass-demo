import React from 'react';

import './Sidebar.scss';

import { FaUser } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { RiLuggageDepositFill } from "react-icons/ri";
import { IoLogOutSharp } from "react-icons/io5";

const SideBar = () => {
    return (
        <ul className='sidebar blue-theme'>
            <li> <FaUser/> </li>
            <li> <RiDashboardFill/> </li>
            <li> <FaMoneyBillTrendUp/> </li>
            <li> <RiLuggageDepositFill/> </li>
            <li> <IoLogOutSharp/> </li>
        </ul>
    );
};

export default SideBar;