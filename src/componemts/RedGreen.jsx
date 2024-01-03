import React from 'react'
import "./styles/RedGreen.css"
import { FaArrowDown, FaArrowUp } from "react-icons/fa";


const RedGreen = ({ text, green }) => {
    return (
        <div className={green ? "greenRed green" : "greenRed red"}>
            <span className='iconRedGreen'>{green ? <FaArrowUp /> : <FaArrowDown />}</span>
            {text && <span>{text}</span>}
        </div>
    )
}

export default RedGreen