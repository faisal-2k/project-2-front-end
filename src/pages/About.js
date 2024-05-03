import React from 'react';
import logo from '../assests/logo/project_log.png'

const About = () => {
    return (
        <div className='Page mb-48'>
            <div className='px-32'>
                <p className='my-10 text-xl'>About Us</p>             
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    <div className='md:col-span-2'>
                        <p className='text-left mb-10'>Welcome to our Salary Management System, where we strive to revolutionize the way organizations handle payroll and employee compensation. Our platform is designed to simplify and streamline the complex process of managing salaries, ensuring accuracy, efficiency, and transparency every step of the way.</p>
                        <p className='text-left'>Behind Salary Management System is a dedicated team of professionals committed to delivering excellence. From software engineers to payroll specialists, our team combines expertise in technology and finance to create a solution that exceeds expectations.</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <img className='w-14' src={logo} alt="" />
                        <span className="hidden md:block ml-4 text-3xl text-lime-600">Pay Manager</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;