import React from 'react'
import "./styles/ViewAll.css"
import { FaArrowRight } from "react-icons/fa6";


const ViewAll = ({ topic }) => {
    return (
        <div className='viewAllContainer'>
            <div className='viewAllTopic'>{topic}</div>
            <button>
                <span>View All</span>
                <FaArrowRight />
            </button>
        </div>
    )
}

export default ViewAll