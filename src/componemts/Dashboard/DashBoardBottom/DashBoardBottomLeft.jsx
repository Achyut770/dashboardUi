import React from 'react'
import "./styles/DashBoardBottomLeft.css"
import ViewAll from './ViewAll'
import Table from './Table'
import { SiBarclays } from "react-icons/si";
import { SiPremierleague } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";




const DashBoardBottomLeft = () => {

    const tableData1 = [
        {
            icon: <SiBarclays />,
            name: "Barclays",
            nameButtom: "2349 2549 3489 1948",
            changePercent: 14,
            cost: "$87,592",
            costButtom: "74,423 GBP",
            value: "$103,478",
            valueButtom: "89,345 GBP",
        },
        {
            icon: <SiPremierleague />,
            name: "Santander",
            nameButtom: "2349 2549 3489 1948",
            changePercent: 40,
            cost: "$807,592",
            value: "$903,478",
        },

    ]
    const tableData2 = [
        {
            icon: <FaApple />,
            name: "APPL",
            nameButtom: "41 shares",
            changePercent: 14,
            cost: "$87,592",
            value: "$103,478",
        },
        {
            icon: <FaMicrosoft />,
            name: "MSFT",
            nameButtom: "39 shares",
            changePercent: -7,
            cost: "$807,592",
            value: "$903,478",
        },

    ]
    return (
        <div className='dashboardBottomLeft dashboardBottomLayout'>
            <ViewAll topic={"Assets"} />
            <Table firstKey="ACCOUNTS" tableData={tableData1} />
            <Table firstKey="STOCKS" tableData={tableData2} />
        </div>
    )
}

export default DashBoardBottomLeft