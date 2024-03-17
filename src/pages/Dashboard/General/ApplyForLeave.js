import React from 'react';
import { useForm } from 'react-hook-form';

const ApplyForLeave = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const apply_for_leave = e => {
        console.log('profile updating', e);
  }

    return (
        <div className='Page mb-48'>
            <p className='my-10'>Apply For Leave</p>

            <div className='mt-10 px-32'>
           <div className=''>                
                <div className=''>
                    <div>
                    <form onSubmit={handleSubmit(apply_for_leave)}>     
      
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    <p>Subject</p>
                       <div className="form-control text-left">                            
                            {/* <div className="mb-3 col-span-2"> */}
                                <input type="text" placeholder="Subject" className=" input input-bordered w-full max-w-xs"  {...register("subject")} />
                            {/* </div> */}
                        </div>
                       
                        <p>Application</p>
                       <div className="form-control text-left">                            
                            <div className="mb-3">
                                <textarea type="text" placeholder="Write your application" className="textarea textarea-bordered textarea-lg w-full max-w-xs"  {...register("application")} />
                            </div>
                        </div>

                        <p>Start Date</p>
                       <div className="form-control text-left">                            
                            <div className="mb-3">
                                <input type="date" placeholder="" className="input input-bordered w-full max-w-xs"  {...register("start_date")} />
                            </div>
                        </div>

                        <p>End Date</p>                           
                       <div className="form-control text-left">                            
                            <div className="">
                                <input type="date" placeholder="" className="input input-bordered w-full max-w-xs"  {...register("end_date")} />
                            </div>
                        </div>
                      
                        

                       </div>
                        <div className="w-40 form-control mx-auto mt-10">
                            
                            <button type='submit' className="btn btn-warning">Submit</button>
                        </div>

                        </form>
                        
                    </div>
                </div>
           </div>
        </div>
        </div>
    );
};

export default ApplyForLeave;