import React, { useState } from 'react'
import "./styles/DashboardMiddleLeft.css"
import RedGreen from '../../RedGreen'
import BarChart from './BarChart';

export const maxValue = 730000
export const minValue = 690000

const makeArrayData = (number, horizontalData) => {
    let array = [];
    for (let i = 0; i < number; i++) {
        let timeIndex = i / 3;
        timeIndex = Math.floor(timeIndex)
        let time = horizontalData[timeIndex];
        let amount = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        array.push({ time, amount });
    }

    return array;
};

const navChart = ["Live", "1 Week", "1 Month", "1 Year", "All"];
const liveHorizontalArray = ["JUST NOW", "1 MIN AGO", "5 MIN AGO", "10 MIN AGO", "15 MIN AGO"];
const weekHorizontalArray = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const monthHorizontalArray = ["1 DAY", "5 DAY", "10 DAY", "15 DAY", "20 DAY", "25 DAY", "30 DAY"];
const yearHorizontalArray = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const allHorizontalArray = ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"];

const chartDatas = {
    "Live": {
        dataArray: makeArrayData(15, liveHorizontalArray),
        horizontalData: liveHorizontalArray
    },
    "1 Week": {
        dataArray: makeArrayData(21, weekHorizontalArray),
        horizontalData: weekHorizontalArray
    },
    "1 Month": {
        dataArray: makeArrayData(21, monthHorizontalArray),
        horizontalData: monthHorizontalArray
    },
    "1 Year": {
        dataArray: makeArrayData(36, yearHorizontalArray),
        horizontalData: yearHorizontalArray
    },
    "All": {
        dataArray: makeArrayData(24, allHorizontalArray),
        horizontalData: allHorizontalArray
    }
};


const DashboardMiddleleft = () => {
    const [navItem, setNavItem] = useState(navChart[3])
    return (
        <div className='dashboardMiddleLeft'>
            <div className='dashboardMiddleLeft_Top'>
                <div className='dashboardMiddleLeft_Top_Left'>
                    <div className='totalNetWorth'>Total Net Worth</div>
                    <div className='amountDollar'> <span className='dollarSign'>$</span> <span className='amount'>728,510</span> </div>
                </div>
                <div className='dashboardMiddleLeft_Top_Right'>
                    <RedGreen text="+543.42 ( 0.18% )" green />
                </div>
            </div>
            <div className='dashboardMiddleLeft_Bottom'>
                <div className='chartNavContainer'>{navChart.map((items) => <div onClick={() => setNavItem(() => items)} key={items} className={navItem === items ? 'chartNavIndv selectedChartNavIndex' : "chartNavIndv "}>{items}</div>)}</div>
                <BarChart data={chartDatas[navItem].dataArray} horizontalData={chartDatas[navItem].horizontalData} />
            </div>
            <div className='dashboardMiddleLeft_Bottom_Res'>Charts cant be shown in this small device</div>
        </div>
    )
}

export default DashboardMiddleleft