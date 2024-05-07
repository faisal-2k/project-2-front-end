import React, { useEffect, useState } from 'react';
import profile from '../../assests/cliparts/profile_clipart_2.png'
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import Loading from '../../components/Loading';

const GeneralProfile =  () => {
    const [user, loading, error] = useAuthState(auth);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [employee_user, setEmployee_user] = useState();
    const [count, setCount] = useState(0);

    const existing_user_id = parseInt(employee_user?.employee_id);

    const getCount = async() => {
        const count_data = await axios.get(`https://pay-manager-back-end.onrender.com/employees/count`)
        setCount(parseInt(count_data.data.result));
        return count_data
    }

    useEffect(()=> {
        const userEmail = user?.email;
              
        if(userEmail){                       
            axios.get(`https://pay-manager-back-end.onrender.com/employees/find_employee/${userEmail}`)
            .then(response => {
                if(response.data!=='')
                    setEmployee_user(response.data);
                else{
                   getCount();                   
                }
            })
            .catch(error => {
                console.log(error);
            });
        }

    } ,[user])

    const update_profile = async e => {

        const new_data = {        
            "account_no": e.account,
            "bank": e.bank,
            "company" : e.company,
            "email" : e.email,
            "name" : e.full_name,
            "phone" : e.phone,
            "balance" : 0,
            "salary" : 0,
            "salary_status" : "due",
            "salary_data" : {"year":2024, "data":[0,0,0,0,0,0,0,0,0,0,0,0]},
            "monthly_leave" : 2,
            "employee_id":parseInt(e.id),
            "applicaiton_id":0,
            
        }
        const existing_data = {
        
            "account_no": e.account,
            "bank": e.bank,
            "company" : e.company,
            "email" : e.email,
            "name" : e.full_name,
            "phone" : e.phone,
            "balance" : employee_user?.balance || 0,
            "salary" : employee_user.salary,
            "salary_status" : employee_user.salary_status,
            "salary_data" : employee_user.salary_data,
            "monthly_leave" : employee_user.monthly_leave,
            "employee_id": employee_user.employee_id,
            "applicaiton_id": employee_user.applicaiton_id,
            
        }
        const user_data = {
            "company" : e.company,
            "email" : e.email,
            "name" : e.full_name,
        }        

        try{
            const headers = {                
                  authenticator: `Bearer ${localStorage.getItem('accessToken')}`                
              };

            if(employee_user){
                console.log(existing_data);
                await axios.put(`https://pay-manager-back-end.onrender.com/employees/profile_update/${existing_user_id}`, existing_data)
            }
            else{
                await axios.post(`https://pay-manager-back-end.onrender.com/employees/create`, new_data, { headers: headers })
            }
            await axios.put(`https://pay-manager-back-end.onrender.com/users/update_user`, user_data)
            reset();
        } catch{
            console.log("Error");
        }
  }

    const deleteMyProfile = async() => {
        console.log("deleting");
        await axios.delete(`https://pay-manager-back-end.onrender.com/employees/remove_employee/${employee_user?.email}`)
    }

    if(loading){
        return <Loading></Loading>
    }
    
    return (
        <div className='mt-10 px-32'>
           <div className='grid grid-cols-1 md:grid-cols-3'>
                <div className='mx-auto'>
                    <img className='w-32' src={profile}/>
                  
                </div>
                <div className='col-span-2'>
                    <div>
                    <form onSubmit={handleSubmit(update_profile)}>     
      
                       <div className="grid grid-cols-1 md:grid-cols-2">

                       <div className="form-control">
                            <label className="label">
                            <span className="label-text">Employee ID</span>
                            </label>
                            <div className="mb-3">
                                <input type="number" placeholder="Employee Id" className="input input-bordered w-full max-w-xs" value={existing_user_id ? existing_user_id : count}  {...register("id", { required: true })} />
                                <p className="text-red-500">{errors.id?.type === 'required' && "Id is required"}</p>
                            </div>
                        </div>
                       <div className="form-control">
                            <label className="label">
                            <span className="label-text">Full Name</span>
                            </label>
                            <div className="mb-3 ">
                                <input type="text" placeholder="Abdullah" className="input input-bordered w-full max-w-xs" value={user.displayName}  {...register("full_name", { required: true })} />
                                <p className="text-red-500">{errors.full_name?.type === 'required' && "Name is required"}</p>
                            </div>
                        </div>
                       <div className="form-control">
                            <label className="label">
                            <span className="label-text">Email</span>
                            </label>
                            <div className="mb-3">
                                <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" value={user.email}  {...register("email", { required: true })} />
                                <p className="text-red-500">{errors.email?.type === 'required' && "Email is required"}</p>
                            </div>
                        </div>
                       <div className="form-control">
                            <label className="label">
                            <span className="label-text">Phone</span>
                            </label>
                            <div className="mb-3">
                                <input type="text" placeholder="+96650XXXYYYY" className="input input-bordered w-full max-w-xs" defaultValue={employee_user ? employee_user.phone : ''}  {...register("phone", { required: true })} />
                                <p className="text-red-500">{errors.phone?.type === 'required' && "Phone is required"}</p>
                            </div>
                        </div>
                       <div className="form-control">
                            <label className="label">
                            <span className="label-text">Company Name</span>
                            </label>
                            <div className="mb-3">
                                <input type="text" placeholder="Al Saleh" className="input input-bordered w-full max-w-xs" defaultValue={employee_user ? employee_user.company : ''}  {...register("company", { required: true })} />
                                <p className="text-red-500">{errors.company?.type === 'required' && "Company is required"}</p>
                            </div>
                        </div>
                       <div className="form-control">
                            <label className="label">
                            <span className="label-text">Bank Name</span>
                            </label>
                            <div className="mb-3">
                                <input type="text" placeholder="Bank Name" className="input input-bordered w-full max-w-xs" defaultValue={employee_user ? employee_user.bank : ''}  {...register("bank", { required: true })} />
                                <p className="text-red-500">{errors.bank?.type === 'required' && "Bank name is required"}</p>
                            </div>
                        </div>
                       <div className="form-control">
                            <label className="label">
                            <span className="label-text">Account No</span>
                            </label>
                            <div className="mb-3">
                                <input type="text" placeholder="IBAN : SAXX YYYY YYYYYY YYYYY" className="input input-bordered w-full max-w-xs" defaultValue={employee_user ? employee_user.bank : ''}  {...register("account", { required: true })} />
                                <p className="text-red-500">{errors.account?.type === 'required' && "Account No is required"}</p>
                            </div>
                        </div>

                        <div className="w-40 form-control mx-auto mt-10">                            
                            <button type='submit' className="btn btn-success">Update</button>
                        </div>                  
                        

                       </div>

                        </form>
                        {employee_user?.employee_id && <div className="w-40 form-control mx-auto mt-20">                            
                            <button onClick={deleteMyProfile} className="btn btn-error">Delete My Profile</button>
                        </div>}
                        
                    </div>
                </div>
           </div>
        </div>
    );
};

export default GeneralProfile;