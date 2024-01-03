import React from 'react';
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import "./styles/RedGreen.css";


const RedGreen = ({ text, green }) => {
    return (
        <div className={green ? "greenRed green" : "greenRed red"}>
            <span className='iconRedGreen'>{green ? <FaArrowUp /> : <FaArrowDown />}</span>
            {text && <span>{text}</span>}
        </div>
    )
}

export default RedGreen