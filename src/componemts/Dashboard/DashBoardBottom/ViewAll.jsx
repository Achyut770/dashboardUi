import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import "./styles/ViewAll.css";


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