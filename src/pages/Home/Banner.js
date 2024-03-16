import React from 'react';
import banner_img from '../../assests/banner_img.jpg'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCoffee } from '@fortawesome/fontawesome-free-solid';
const Banner = () => {
    return (
        <section className='flex justify-evenly align-center'>

        <div>
            <img className='w-2/3 ml-auto' src={banner_img} />
        </div>
        <div className='text-left'>
            <p className='text-4xl my-10'>Welcome to <span className='text-lime-600'>Pay Manager</span></p>     

            <div className='my-5'>
                <p>We provide efficient and transparent way of salary management system. </p>
                <p>Organize your industry with more ease! 
</p>
            </div>          
        
        <Link className='inline-block mt-12 px-10 py-3 bg-lime-400 rounded-md' to=''>Explore <FontAwesomeIcon className='ml-4' icon={faArrowRight} /></Link>
        </div>
        </section>
    );
};

export default Banner;