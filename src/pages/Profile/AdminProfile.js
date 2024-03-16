import React from 'react';
import profile from '../../assests/cliparts/profile_clipart.png'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
const AdminProfile = () => {
   
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const update_profile = e => {
        console.log('profile updating');
  }
    return (
        <div className='mt-10'>
           <div className='Page mt-10 mb-20'>
            
        </div>
        </div>
    );
};

export default AdminProfile;