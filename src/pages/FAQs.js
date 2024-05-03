import React from 'react';

const FAQs = () => {
    return (
        <div className='Page mb-48'>
            <div className='px-32'>
                <p className='my-10 text-xl'>FAQs</p>             
                
                <div className='text-left'> 
                    <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked /> 
                    <div className="collapse-title text-xl font-medium text-green-600">
                        Why is this software used for?
                    </div>
                    <div className="collapse-content"> 
                        <p>It is a salary management application. It is used in industries to manage salaries, records of the employees.</p>
                    </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" /> 
                    <div className="collapse-title text-xl font-medium text-green-600">
                        Is this free?
                    </div>
                    <div className="collapse-content"> 
                        <p>Yes, It's free of cost.</p>
                    </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" /> 
                    <div className="collapse-title text-xl font-medium text-green-600">
                        What is the capacity of employees?
                    </div>
                    <div className="collapse-content"> 
                        <p>It can manage data of upto 50,000 employees.</p>
                    </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" /> 
                    <div className="collapse-title text-xl font-medium text-green-600">
                        Is it accessible through all over the world?
                    </div>
                    <div className="collapse-content"> 
                        <p>Yes, you can access from any where.</p>
                    </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" /> 
                    <div className="collapse-title text-xl font-medium text-green-600">
                        Is it safe?
                    </div>
                    <div className="collapse-content"> 
                        <p>Certainly, It is secured. all the front-end and back-end APIs are secured.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQs;