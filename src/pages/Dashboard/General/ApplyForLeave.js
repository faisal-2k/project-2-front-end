import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ApplyForLeave = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const [completed, setCompleted] = useState(false);
    const [count, setCount] = useState(0);

    const getCount = async() => {
        const count_data = await axios.get(`https://pay-manager-back-end.onrender.com/applications/count`)
        setCount(parseInt(count_data.data.result));
        return count_data
    }

    const apply_for_leave = async e => {
        const data = {
            "applcation_id":count+1,
            "subject":e.subject,
            "application":e.application,
            "start_date":e.state_date,
            "end_date":e.end_date,
        }
        await axios.post(`https://pay-manager-back-end.onrender.com/applications/create`, data)
        .then(reset())
  }
  getCount()
  const startDate = watch("start_date");
  const endDate = watch("end_date");

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
                                <input type="date" placeholder="" className="input input-bordered w-full max-w-xs" {...register("start_date", { required: "Start date is required" })} />
                                {errors.start_date && <span className="text-red-500">{errors.start_date.message}</span>}
                            </div>
                            </div>

                            <p>End Date</p>
                            <div className="form-control text-left">
                            <div className="">
                                <input type="date" placeholder="" className="input input-bordered w-full max-w-xs" {...register("end_date", { required: "End date is required", validate: value => value > startDate || "End date must be after start date" })} />
                                {errors.end_date && <span className="text-red-500">{errors.end_date.message}</span>}
                            </div>
                            </div>

                            {endDate && startDate && (new Date(endDate) - new Date(startDate)) > 2 * 24 * 60 * 60 * 1000 && (
                            <p className="text-red-500">Total days can't be more than 2 days</p>
                            )}                        
                      
                        

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