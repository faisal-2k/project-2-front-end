import { faCheckCircle, faSign, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ApplicationFile = () => {
    return (
        <div className='text-left'>
                    <div className="mb-5 collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" /> 
                    <div className="collapse-title text-xl font-medium text-orange-600">
                        I'm sick. Can't attend today.
                    </div>
                    <div className="collapse-content "> 
                        <div>
                            <p>From: 10 Jan.</p>
                            <p>From: 13 Jan.</p>
                        </div>
                       
                        <p>Certainly, It is secured. all the front-end and back-end APIs are secured.</p>
                        <p className='italic'>~ Yeasir, yasir@mail.com</p>
                    </div>
                    </div>
                    <div className="mb-5 collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" /> 
                    <div className="collapse-title text-xl font-medium text-orange-600">
                        It's raining here. Can't to the work.
                    </div>
                    <div className="collapse-content "> 
                        <div>
                            <p>From: 10 Jan.</p>
                            <p>From: 10 Jan.</p>
                        </div>
                        
                        <p>It's Raining since last night. Everything is flooded.</p>
                        <p className='italic'>~ Hasan, hasan@mail.com</p>
                    </div>
                    </div>
                </div>
    );
};

export default ApplicationFile;