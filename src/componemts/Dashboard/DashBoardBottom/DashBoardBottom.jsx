import React from 'react'
import DashBoardBottomLeft from './DashBoardBottomLeft'
import DashBoardBottomRight from './DashBoardBottomRight'
import "./styles/DashBoardBottom.css"

const DashBoardBottom = () => {
    return (
        <div className='DashboardBottom'>
            <DashBoardBottomLeft />
            <DashBoardBottomRight />
        </div>
    )
}

export default DashBoardBottom