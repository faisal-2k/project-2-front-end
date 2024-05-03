import React from 'react';
import admin_panel from '../assests/cliparts/admin_support.png'
import wolrd from '../assests/cliparts/world.png'
import language from '../assests/cliparts/language.png'
import security from '../assests/cliparts/security.png'
import responsive from '../assests/cliparts/responsive.png'
import report from '../assests/cliparts/report.png'
import easy from '../assests/cliparts/easy.png'
const Services = () => {
    return (
        <div className='Page mb-48'>
        <div className='px-32'>
            <p className='my-10 text-xl'>Our Services</p>
            <div>
                <p>We provide wolrd's easiest and best services in salary management</p>
            </div> 
            <div className='mt-12 grid gap-5 grid-cols-1 md:grid-cols-3'>
                <div className='text-center mx-auto'>
                    <img className='mx-auto' src={admin_panel}/>
                    <p className='text-xl text-green-600 font-bold'>Admin Panel</p>
                    <p>Our application offers admin section for managers.</p>
                </div>
                <div className='text-center mx-auto'>
                    <img className='mx-auto' src={easy}/>
                    <p className='text-xl text-green-600 font-bold'>Easy</p>
                    <p>Our application is easy and simple.</p>
                </div>
                <div className='text-center mx-auto'>
                    <img className='mx-auto w-28' src={wolrd}/>
                    <p className='text-xl text-green-600 font-bold'>Worldwide</p>
                    <p>Our application is accessible thought the wolrd.</p>
                </div>
                <div className='text-center mx-auto'>
                    <img className='mx-auto' src={report}/>
                    <p className='text-xl text-green-600 font-bold'>Statictical Report</p>
                    <p>Our application generates statictical reports of the employees.</p>
                </div>
                <div className='text-center mx-auto'>
                    <img className='mx-auto' src={responsive}/>
                    <p className='text-xl text-green-600 font-bold'>responsive</p>
                    <p>Our application is Responsive on different devices.</p>
                </div>
                <div className='text-center mx-auto'>
                    <img className='mx-auto' src={language}/>
                    <p className='text-xl text-green-600 font-bold'>Lanugage</p>
                    <p>Our application supports multiple languages.</p>
                </div>
                <div className='text-center mx-auto'>
                    <img className='mx-auto' src={security}/>
                    <p className='text-xl text-green-600 font-bold'>Security</p>
                    <p>Our application is secure and safe</p>
                </div>
            </div>            
           
        </div>
    </div>
    );
};

export default Services;