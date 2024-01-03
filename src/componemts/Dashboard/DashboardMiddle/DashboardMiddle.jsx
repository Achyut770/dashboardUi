import React from 'react'
import DashboardMiddleRight from './DashboardMiddleRight'
import DashboardMiddleleft from './DashboardMiddleleft'
import "./styles/DashBoardMiddle.css"

const DashboardMiddle = () => {
    return (
        <div className='dashBoardMiddle'>
            <DashboardMiddleleft />
            <DashboardMiddleRight />
        </div>
    )
}

export default DashboardMiddle