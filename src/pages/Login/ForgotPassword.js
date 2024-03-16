import React from 'react';

const ForgotPassword = () => {
    // onClick={async () => {await sendPasswordResetEmail()}}
    return (
        <div>
            <p>Forgot Password?</p>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <div className="mb-3">
              {/* <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs"  {...register("email", { required: true })} />
              {errors.email?.type === 'required' && "Email is required"} */}
          </div>
        </div>
        </div>
    );
};

export default ForgotPassword;