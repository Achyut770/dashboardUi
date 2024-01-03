import React from 'react';
import "./styles/DetailsView.css";

const DetailsView = ({ details }) => {
    return (
        <div className='limitedDetailsContainer'>
            {details.map((items, index) => {
                return (
                    <div className='indvDetails' key={index}>
                        <div
                            style={{
                                backgroundColor: items.color,
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                            }}
                        ></div>
                        <div className='namePercent'>
                            <div className='name'>{items.name}</div>
                            <div className='percent'>{items.percent}%</div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default DetailsView