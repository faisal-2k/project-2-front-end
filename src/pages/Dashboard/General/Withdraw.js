import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import Loading from '../../../components/Loading';
import { useForm } from 'react-hook-form';
import balance_icon from '../../../assests/icons/balance.png'
import Completed from '../../../components/Completed';


const Withdraw = () => {
    const [user, loading, error] = useAuthState(auth);
    const [employee_user, setEmployee_user] = useState();
    const [withdraw, setWithdraw] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const existing_user_id = parseInt(employee_user?.employee_id);

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
    if(loading || employee_user == undefined){
        return <Loading></Loading>
    }
    const withdraw_money = async e => {
        const existing_data = {
            "account_no": employee_user.account,
            "bank": employee_user.bank,
            "company" : employee_user.company,
            "email" : employee_user.email,
            "name" : employee_user.full_name,
            "phone" : employee_user.phone,
            "balance" : employee_user.balance - parseInt(e.amount),
            "salary" : employee_user.salary,
            "salary_status" : employee_user.salary_status,
            "salary_data" : employee_user.salary_data,
            "monthly_leave" : employee_user.monthly_leave,
            "employee_id": employee_user.employee_id,
            "applicaiton_id": employee_user.applicaiton_id,
        }
        await axios.put(`https://pay-manager-back-end.onrender.com/employees/balance_update/${existing_user_id}`, existing_data)
        .then(reset())
        .then(setWithdraw(true))
    }
    if(withdraw){
        return <Completed></Completed>
    }
    return (
        <div className='Page px-32'>
            <p className='my-10'>Withdraw</p>
            <div>
            <form onSubmit={handleSubmit(withdraw_money)}>     
      <div className='md:flex justify-evenly items-center'>
                <div className='w-64'>
                <div className='bg-blue-300 p-10 rounded-md flex items-center justify-around'>
                    <img className='block w-16' src={balance_icon} alt=''/>
                        <div className=''>
                            <p className='text-xl'>Balance</p>
                            <p>{employee_user?.balance} SAR</p>
                        </div>
                    </div>
                </div>
        <div className="">

       
        <div className="form-control">
            <label className="label">
            <span className="label-text">Amount</span>
            </label>
            <div className="mb-3 ">
                <input type="number" placeholder="200" className="input input-bordered w-full max-w-xs" {...register("amount", { required: true, validate: value => value > 0 && value <= employee_user?.balance })} />
                {errors.amount && <p className="text-red-500">You can withdraw from 1 to {employee_user?.balance} SAR</p>}
            </div>
        </div>        

        <div className="w-40 form-control mx-auto mt-10">                            
            <button type='submit' className="btn btn-warning">Withdraw</button>
        </div>                  
        

        </div>
      </div>
       </form>
            </div>
        </div>
    );
};

export default Withdraw;