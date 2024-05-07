import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import money from '../../assests/money_transfer.png'
const Pay = () => {
    const [complete, setComplete] = useState(false);

    const location = useLocation();
    console.log(location);
   
    return (
        <div className='Page mb-48'>
            <p className='mt-10'>1240 SAR</p>
            <div className='mx-24'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <div>
                        <p>Person 1</p>
                        <p><span className='font-bold'>Account:</span> SA XXX YYY ZZZZ</p>
                        <p><span className='font-bold'>Balance:</span> 13000 SAR</p>
                    </div>   
                    <div className='text-center mx-auto'>
                        <img className='' src={money}/>
                        <p className='btn btn-success py-3 px-20 mt-10'>Transfer</p>
                    </div> 
                    <div className=''>
                        <p>Person 2</p>
                        <p><span className='font-bold'>Account:</span> SA XXX YYY ZZZZ</p>
                        <p><span className='font-bold'>Balance:</span> 1200 SAR</p>
                    </div>   
                </div>
            </div>
        </div>
    );
};

export default Pay;