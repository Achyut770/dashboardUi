import React from 'react'
import "./styles/DashBoardBottomright.css"
import ViewAll from './ViewAll'
import RedGreen from '../../RedGreen'

const DashBoardBottomRight = () => {
    const datas = [
        {
            amount: 500.00,
            from: " Account Barclays 1948",
            date: "4 Jan",
            time: "15:41"
        },
        {
            amount: 234.00,
            from: " Account Barclays 1457",
            date: "7 April",
            time: "12:00"
        },
        {
            amount: -234.00,
            from: " Account Barclays 2345",
            date: "7 Feb",
            time: "15:41"
        }, {
            amount: 930.00,
            from: " Account Santander 1948",
            date: "5 jan",
            time: "10:19"
        }, {
            amount: 500.00,
            from: " Account Santander 1948",
            date: "7 oct",
            time: "01:00"
        },
        {
            amount: 500.00,
            from: " Account Santander 1948",
            date: "7 oct",
            time: "01:00"
        },
    ]
    return (
        // dashboardBottomLayout css in dashboardBottomLeft.css file
        <div className='dashBoardBottomRight dashboardBottomLayout'>
            <ViewAll topic="Transactions" />
            <div>
                {datas.map((items, index) => {
                    return <div className='transactionIndv' key={index}>
                        <div className='transactionLeft'>
                            <RedGreen green={items.amount >= 0} />
                            <div >
                                <div className={items.amount >= 0 ? "greenColor" : "redColor"}> {items.amount >= 0 ? `+$${items.amount}` : `-$${String(items.amount).slice(1)}`
                                }</div>
                                <div className='transactoLeftAmount'>{items.from}</div>
                            </div>
                        </div>
                        <div className='transactionRight'>
                            <div>{items.date}</div>
                            <div>{items.time}</div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default DashBoardBottomRight