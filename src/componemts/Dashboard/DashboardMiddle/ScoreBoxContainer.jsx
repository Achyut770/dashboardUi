import React from 'react';
import './styles/ScoreBox.css';

const ScoreBoxContainer = ({ topic, number, bgLight, bgColor, contains }) => {
    return (
        <div className='scoreBoxContainer'>
            <div className='boxesTop'>
                <div className='boxesTopic'>{topic}</div>
                <div className='makeGreen'>{number}</div>
            </div>
            <div className='boxContainer'>
                {[...Array(16)].map((_, index) => {
                    const isLast = index === 15;
                    const isFirst = index === 0;
                    const containsIndex = contains && contains.hasOwnProperty(index);
                    const lastClassname = isLast ? "lastBox" : ""
                    const firstClassname = isFirst ? "firstBox" : ""
                    const bgColorClassName = containsIndex ? bgLight : bgColor
                    const classNames = `${lastClassname} ${firstClassname} ${bgColorClassName} smallBox`
                    return <div key={index} className={classNames}></div>;
                })}
            </div>
        </div>
    );
};

export default ScoreBoxContainer;
