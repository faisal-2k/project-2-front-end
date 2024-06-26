import React from 'react';
import bag_of_money from '../../assests/cliparts/bag_of_money.png'
import luggage from '../../assests/cliparts/luggage.png'
import list from '../../assests/icons/list.png'
import add_employee from '../../assests/icons/add_employee.png'
import files from '../../assests/icons/files.png'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useManager from '../../hooks/useManager';
import Loading from '../../components/Loading';
const Dashboard = () => {
    const [user, loading, error] = useAuthState(auth);
    const [manager, isLoading] = useManager(user);
    
    if(loading || isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='Page px-32'>
             <p className='mt-10'>Welcome to dashboard</p>
             {!manager && <div className='mt-10 mb-48 grid gap-10 grid-cols-1 md:grid-cols-2'>
                <Link to='/salary-record'>
                <div className='bg-blue-300 p-8 flex justify-around rounded-lg items-center'>
                    <img className='w-16' src={bag_of_money}/>
                    <p className='text-2xl'>Salary Record</p>
                </div>
                </Link>
                <Link to='/apply-for-a-leave'>
                <div className='bg-blue-300 p-8 flex justify-around rounded-lg items-center'>
                    <img className='w-16' src={luggage}/>
                    <p className='text-2xl'>Apply For A Leave</p>
                </div>
                </Link>
                </div>}

                {manager && <div className='mt-10 mb-48 grid gap-10 grid-cols-1 md:grid-cols-2'>
                    
                    <Link to='/employee-list'>
                <div className='bg-green-300 p-8 flex justify-around rounded-lg items-center'>
                    <img className='w-16' src={list}/>
                    <p className='text-2xl'>List of employees</p>
                </div>
                </Link>
                <Link to='/add-new-employee'>
                <div className='bg-green-300 p-8 flex justify-around rounded-lg items-center'>
                    <img className='w-16' src={add_employee}/>
                    <p className='text-2xl'>Add New Employee</p>
                </div>
                </Link>
                <Link to='/applications'>
                <div className='bg-blue-300 p-8 flex justify-around rounded-lg items-center'>
                    <img className='w-16' src={files}/>
                    <p className='text-2xl'>Applications</p>
                </div>
                </Link>

                </div>}
             
        </div>
    );
};

export default Dashboard;