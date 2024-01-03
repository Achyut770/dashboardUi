import React from 'react'
import DetailsView from './DetailsView'
import ScoreBoxContainer from './ScoreBoxContainer'
import "./styles/DashboardMiddleRight.css"

const DashboardMiddleRight = () => {

    const details = [
        {
            name: "Accounts",
            percent: 38,
            color: "skyblue"
        },
        {
            name: "Shares",
            percent: 17,
            color: "red"
        },
        {
            name: "Crypto",
            percent: 14,
            color: "yellow"
        },
        {
            name: "Building",
            percent: 11,
            color: "purple"
        },
        {
            name: "Bikes",
            percent: 10,
            color: "pink"

        },
        {
            name: "Others",
            percent: 10,
            color: "orange"
        },
    ]
    return (
        <div className='dashboardMiddleRight'>
            <div className='categories'>
                Categories
            </div>
            <div className='colorPercent'>
                {details.map((items, index) => {
                    const classNames = [
                        index === 0 ? 'firstItem' : '',
                        index === details.length - 1 ? 'lastItem' : '',
                    ].join(' ')

                    return (
                        <div
                            key={index}
                            className={classNames}
                            style={{
                                backgroundColor: items.color,
                                width: `${items.percent}%`,
                                height: '17px',
                            }}
                        ></div>
                    );
                })}
            </div>
            <DetailsView details={details.slice(0, 3)} />
            <DetailsView details={details.slice(3, 6)} />
            <div className='border'></div>

            <ScoreBoxContainer topic="Diversification Score" number="78" bgLight="bgLightGreen" bgColor="bgGreen" contains={{ 13: 13, 14: 14, 15: 15, }} />
            <ScoreBoxContainer topic="Top 1,3% Networth in Nepal" bgLight="bgLightYellow" bgColor="bgYellow" contains={{ 0: 0 }} />


        </div >
    )
}

export default DashboardMiddleRight