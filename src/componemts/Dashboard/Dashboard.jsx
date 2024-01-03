import React from 'react'
import DashBoardBottom from './DashBoardBottom/DashBoardBottom'
import DashboardMiddle from './DashboardMiddle/DashboardMiddle'
import DashboardTop from './DashboardTop'
import "./styles/Dashboard.css"

const Dashboard = () => {
    return (
        <div className='dashboardContainer'>
            <DashboardTop />
            <DashboardMiddle />
            <DashBoardBottom />
        </div>
    )
}

export default Dashboard