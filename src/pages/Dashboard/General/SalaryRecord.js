import React, { useEffect, useState } from 'react';
import balance_icon from '../../../assests/icons/balance.png'
import withdraw from '../../../assests/icons/withdraw.png'
import SalaryRecordBar from './SalaryRecordBar';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import Loading from '../../../components/Loading';
import { Link, useNavigate } from 'react-router-dom';

const SalaryRecord = () => {
    const [user, loading, error] = useAuthState(auth);
    const [employee_user, setEmployee_user] = useState();
    const nevigate = useNavigate();

    useEffect(()=> {
        const userEmail = user?.email;
              
        if(userEmail){                       
            axios.get(`https://pay-manager-back-end.onrender.com/employees/find_employee/${userEmail}`)
            .then(response => {                
                setEmployee_user(response.data);                
            })
            .catch(error => {
                console.log(error);
            });
        }

    } ,[user])
    if(loading ){
        return <Loading></Loading>
    }
    if(employee_user==''){
        nevigate('/profile')
    }
    return (
        <div className='Page px-32'>
            <p className='my-10'>Salary Record</p>

            <div>
                <div className='grid gap-10 grid-cols-1 md:grid-cols-3'>
                    <div className='bg-pink-300 p-10 rounded-md'>
                        <p className='text-xl'>Salary {employee_user?.salary} SAR</p>
                        <p>Tax 0%</p>
                    </div>
                    <div className='bg-blue-300 p-10 rounded-md flex items-center justify-around'>
                    <img className='block w-16' src={balance_icon} alt=''/>
                        <div className=''>
                            <p className='text-xl'>Balance</p>
                            <p>{employee_user?.balance} SAR</p>
                        </div>
                    </div>
                    {<Link to='/withdraw'><div className='bg-lime-300 p-10 cursor-pointer rounded-md flex items-center justify-around'>
                    <img className='w-16' src={withdraw} alt=''/>
                        <div className='ml-3'>
                            <p className='text-xl'>Withdraw</p>
                        </div>
                    </div></Link>}
                </div>
            </div>
            <SalaryRecordBar
            data = {employee_user?.salary_data}></SalaryRecordBar>
        </div>
    );
};

export default SalaryRecord;