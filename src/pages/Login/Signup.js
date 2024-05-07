import React from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import Loading from '../../components/Loading';
import createUserInDB from './createUserInDB';
import requestToken from './requestToken';


const Signup = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, eUser, eLoading, eError] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error] = useUpdateProfile(auth);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [newUser] = useAuthState(auth);


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    


  if(eLoading || gLoading || updating ){
      return <Loading></Loading>
  }
  if(newUser){
    if(newUser.email){
      const d = {'name':newUser?.displayName, 'email':newUser?.email}
      createUserInDB(d);
    }
    return <div className='min-h-screen flex justify-center items-center'>
      <p className='text-3xl'>Welcome <span className='text-primary'>{newUser.displayName}</span>!</p>
    </div>
  }
  
  const handleFormSubmit = async data =>{ 
      const displayName = data.name;     
      await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile({displayName});
      const d = { 'name': data.name, 'email': data.email };
      createUserInDB(d); 
      requestToken();
    };    
  

    return (
        <div className='Page mt-10 mb-20'>  
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">  
  <div className="card-body">
  <h2 className="mb-3 card-title">Sign up</h2>

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
            <span className="label-text">Full Name</span>
          </label>
            <div className="mb-3">
                <input type="text" placeholder="Name" name='name' className="input input-bordered w-full max-w-xs mb-2"  {...register("name", { required: true })} />
                {errors.name?.type === 'required' && "Name is required"}
            </div>
        </div>


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
        </div>

      <div className="my-3 card-actions">
      <button type="submit" className="btn btn-primary w-full">Sign up</button>
    </div>
    </form> 


    <p className="mt-5">Already have an account? <Link to="/login" className="text-primary">Log in</Link></p>   
    
    
  </div>
</div>      
    </div>
    );
};

export default Signup;