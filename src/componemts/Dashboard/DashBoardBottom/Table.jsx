import React from 'react';
import RedGreen from '../../RedGreen';
import './styles/Table.css';

const Table = ({ firstKey, tableData }) => {
    return (
        <div className='tableContainer'>
            <div className='keyTable'>
                <div className='firstKey'>{firstKey}</div>
                <div className='changeKey'>CHANGE</div>
                <div className='costKey'>COST</div>
                <div className='valueKey'>VALUE</div>
            </div>

            {tableData.map((item, index) => (
                <div className='indvTableContent'>
                    <div className='keyTable keyTableRes'>
                        <div className='firstKey'>{firstKey}</div>
                        <div className='changeKey'>CHANGE</div>
                        <div className='costKey'>COST</div>
                        <div className='valueKey'>VALUE</div>
                    </div>
                    <div className='valueTable valueTableRes' key={index}>
                        <div className='firstKey firstvalue'>
                            <div className='firstKeyContainer'>
                                <div className='iconTable'>{item.icon}</div>
                                <div className='costValue firstValueRight'>
                                    <div>{item.name}</div>
                                    <div className='buttom'>{item.nameButtom}</div>
                                </div>
                            </div>
                        </div>
                        <div className='changeKey changeValue'> <RedGreen text={`${item.changePercent}%`} green={item.changePercent >= 0} /> </div>
                        <div className='costKey costValues'>
                            <div className='costValue'>
                                <div>{item.cost}</div>
                                <div className='buttom'>{item.costButtom}</div>
                            </div>
                        </div>
                        <div className='valueKey valueValue'> <div className='costValue'>
                            <div>{item.value}</div>
                            <div className='buttom'>{item.valueButtom}</div>
                        </div></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Table;
