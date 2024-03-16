import React from 'react';
import balance_icon from '../../../assests/icons/balance.png'
import withdraw from '../../../assests/icons/withdraw.png'

const SalaryRecord = () => {
    return (
        <div className='Page px-32'>
            <p className='my-10'>Salary Record</p>

            <div>
                <div className='grid gap-10 grid-cols-1 md:grid-cols-3'>
                    <div className='bg-pink-300 p-10 rounded-md'>
                        <p className='text-xl'>Salary 3000 SAR</p>
                        <p>Tax 0%</p>
                    </div>
                    <div className='bg-blue-300 p-10 rounded-md flex items-center justify-around'>
                    <img className='block w-16' src={balance_icon} alt=''/>
                        <div className=''>
                            <p className='text-xl'>Balance</p>
                            <p>2000 SAR</p>
                        </div>
                    </div>
                    <div className='bg-lime-300 p-10 rounded-md flex items-center justify-around'>
                    <img className='w-16' src={withdraw} alt=''/>
                        <div className='ml-3'>
                            <p className='text-xl'>Withdraw</p>
                        </div>
                    </div>
                </div>
            </div>
            <SalaryRecord></SalaryRecord>
        </div>
    );
};

export default SalaryRecord;