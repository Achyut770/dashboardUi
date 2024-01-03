import React from 'react'
import "./styles/Dashboard.css"
import DashboardTop from './DashboardTop'
import DashboardMiddle from './DashboardMiddle/DashboardMiddle'
import DashBoardBottom from './DashBoardBottom/DashBoardBottom'

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