import React from 'react'
import DashboardMiddleleft from './DashboardMiddleleft'
import DashboardMiddleRight from './DashboardMiddleRight'
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