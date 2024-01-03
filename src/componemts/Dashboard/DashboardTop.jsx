import React from 'react'
import "./styles/DashboardTop.css"
import { GoPlus } from "react-icons/go";

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