import React, { useEffect } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import createUserInDB from './createUserInDB';

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, eUser, eLoading, cError] = useSignInWithEmailAndPassword(auth);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
//   const [token] = useIdToken(gUser || eUser);

  const [existingUser] = useAuthState(auth);



  const handleFormSubmit = data =>{  
    signInWithEmailAndPassword(data.email, data.password); 
  };  

    
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    if(eLoading || gLoading ){
      return <Loading></Loading>
  }

    if(existingUser){
      if(existingUser.email){
        const d = {'name':existingUser?.displayName, 'email':existingUser?.email}
        createUserInDB(d);
      } 
      return <div className='min-h-screen flex justify-center items-center text-left'>
        <p className='text-3xl'>Welcome Back, <span className='text-primary'>{existingUser.displayName}</span>!</p>
      </div>
    }


    return (
        <div className='Page mt-10 mb-20'>
            <div className="hero min-h-screen">  
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <h2 className="mb-3 card-title">Log in</h2>

          <div>             
              <div className="mb-3 card-actions">
                  <button  onClick={() => signInWithGoogle()}  className="btn btn-outline btn-primary w-full">Google</button>
              </div> 
              {/* <div className="mb-3 card-actions">
                  <button onClick={() => signInWithFacebook()}  className="btn btn-outline btn-primary w-full">Facebook</button>
              </div>  */}
              <div className="flex flex-col w-full border-opacity-50">  
                  <div className="divider">or</div> 
              </div>
          </div>

      <form onSubmit={handleSubmit(handleFormSubmit)}>      
      
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <div className="mb-3">
              <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs"  {...register("email", { required: true })} />
              {errors.email?.type === 'required' && "Email is required"}
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
              <div className="mb-3">
                  <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" {...register("password", { required: true })} />
                  {errors.password && "Password is required"}
              </div>
          {/* <label className="label">
            <Link to='/forgot-password' className="my-3 label-text-alt link link-hover">Forgot password?</Link>
          </label> */}
        </div>
        <div className="form-control">

            {cError ? <p className="p-3 my-3 rounded-sm text-red-600 bg-red-200">Email or Password is incorrect!</p> : <p></p>}
          
            <button type='submit' className="btn btn-primary">Login</button>
        </div>

        </form>

        <p className='mt-3'>Don't have an account? <Link to="/signup" className="text-primary">Sign up</Link></p>    
            
      </div>
    </div>  
</div>
        </div>
    );
};

export default Login;