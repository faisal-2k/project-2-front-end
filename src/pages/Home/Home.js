import React from 'react';
import Banner from './Banner';
import stack_of_files from '../../assests/stack_of_files.png'
import auto_report from '../../assests/digital_report.jpg'
import application from '../../assests/digital_letter.jpg'
const Home = () => {
    return (
        <div className="Page">
            <Banner/>
            <div className='mt-24 flex justify-around'>
                <div className='my-auto'>
                    <p className='text-3xl text-blue-600'>You can get auto-generated report anytime!</p>
                </div>
                <div>
                    <img src={auto_report}/>
                </div>
            </div>
            <div className='mt-24 flex justify-around'>
                <div>
                    <img src={application}/>
                </div>
                <div className='my-auto'>
                    <p className='text-3xl text-green-600'>You can apply for a leave within few seconds!</p>
                </div>                
            </div>
            <div className='mt-24 flex justify-around'>
                <div className='my-auto'>
                    <p className='text-3xl text-orange-600'>No need to store the records on files anymore!</p>
                </div>
                <div>
                    <img src={stack_of_files}/>
                </div>
            </div>
        </div>
    );
};

export default Home;