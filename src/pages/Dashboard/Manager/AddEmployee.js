import React from 'react';
import { useForm } from 'react-hook-form';
import profile from '../../../assests/cliparts/profile_clipart.png'
const AddEmployee = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const create_employee = e => {
        console.log('employee creating');
  }
    return (
        <div className='Page mb-48'>
            <p className='my-10'>Add New Employee</p>
            <div className='mt-10 px-32'>
           <div className='grid grid-cols-1 md:grid-cols-3'>
                <div className='mx-auto'>
                    <img className='w-32' src={profile}/>
                </div>
                <div className='col-span-2'>
                    <div>
                    <form onSubmit={handleSubmit(create_employee)}>     
      
                       <div className="grid grid-cols-1 md:grid-cols-2">

                       <div className="form-control">
                            <label className="label">
                            <span className="label-text">Full Name</span>
                            </label>
                            <div className="mb-3 ">
                                <input type="text" placeholder="Abdullah" className="input input-bordered w-full max-w-xs"  {...register("full_name", { required: true })} />
                                <p className="text-red-500">{errors.full_name?.type === 'required' && "Name is required"}</p>
                            </div>
                        </div>
                       <div className="form-control">
                            <label className="label">
                            <span className="label-text">Email</span>
                            </label>
                            <div className="mb-3">
                                <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs"  {...register("email", { required: true })} />
                                <p className="text-red-500">{errors.email?.type === 'required' && "Email is required"}</p>
                            </div>
                        </div>
                       <div className="form-control">
                            <label className="label">
                            <span className="label-text">Phone</span>
                            </label>
                            <div className="mb-3">
                                <input type="text" placeholder="+96650XXXYYYY" className="input input-bordered w-full max-w-xs"  {...register("phone", { required: true })} />
                                <p className="text-red-500">{errors.phone?.type === 'required' && "Phone is required"}</p>
                            </div>
                        </div>
                       <div className="form-control">
                            <label className="label">
                            <span className="label-text">Company Name</span>
                            </label>
                            <div className="mb-3">
                                <input type="text" placeholder="Al Saleh" className="input input-bordered w-full max-w-xs"  {...register("company", { required: true })} />
                                <p className="text-red-500">{errors.company?.type === 'required' && "Company is required"}</p>
                            </div>
                        </div>
                       <div className="form-control">
                            <label className="label">
                            <span className="label-text">Bank Name</span>
                            </label>
                            <div className="mb-3">
                                <input type="text" placeholder="Bank Name" className="input input-bordered w-full max-w-xs"  {...register("bank", { required: true })} />
                                <p className="text-red-500">{errors.bank?.type === 'required' && "Bank name is required"}</p>
                            </div>
                        </div>
                       <div className="form-control">
                            <label className="label">
                            <span className="label-text">Account No</span>
                            </label>
                            <div className="mb-3">
                                <input type="text" placeholder="IBAN : SAXX YYYY YYYYYY YYYYY" className="input input-bordered w-full max-w-xs"  {...register("account", { required: true })} />
                                <p className="text-red-500">{errors.account?.type === 'required' && "Account No is required"}</p>
                            </div>
                        </div>
                        

                       </div>
                        <div className="w-40 form-control mx-auto mt-10">
                            
                            <button type='submit' className="btn btn-error">Register</button>
                        </div>

                        </form>
                        
                    </div>
                </div>
           </div>
        </div>
        </div>
    );
};

export default AddEmployee;