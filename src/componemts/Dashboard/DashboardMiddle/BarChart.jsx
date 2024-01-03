import React from 'react'
import "./styles/BarChart.css"
import { maxValue, minValue } from './DashboardMiddleleft'

const BarChart = ({ data, horizontalData }) => {

    const rightData = ['730k', '720k', '710k', '700k', '690k']

    return (
        <div className='barChartMainContainer'>
            <div className='barChartContainer'>
                <div className='barMainContainer'>
                    {data.map((items, index) => {
                        return <div key={index} style={{ width: `${80 / data.length}%` }} className='barContainer'>
                            <div
                                style={{
                                    height: `${(items.amount - minValue) / (maxValue - minValue) * 100}%`
                                }}
                                className='barExtend'
                            >
                                <div className='hoverShow'>
                                    <div className='hoverShowData'> {items.time}</div>
                                    <div className='hoverShowData'> {items.amount}</div>
                                </div>
                            </div>
                        </div>

                    })}
                </div >
                <div className='barContainerRightData'>
                    {rightData.map((items) => {
                        return <div key={items} className='barRightIndvData'>{items}</div>
                    })}
                </div>
            </div>
            <div className='horizontalData'> {horizontalData.map((items) => {
                return <div key={items}>{items}</div>
            })}</div>
        </div >

    )
}

export default BarChart