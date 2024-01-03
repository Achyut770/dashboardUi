import React from 'react';
import { GoPlus } from "react-icons/go";
import "./styles/DashboardTop.css";

const DashboardTop = () => {
    return (
        <div className='dashBoardTopContainer'>
            <div>Dashboard</div>
            <button className='addButton'>
                <span className='plusIcon'><GoPlus /></span>
                <span className='add'>Add</span>
            </button>
        </div>
    )
}

export default DashboardTop