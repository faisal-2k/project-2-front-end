import React from 'react';
import AdminProfile from './AdminProfile';
import GeneralProfile from './GeneralProfile';

const Profile = () => {
    return (
        <div className='Page mb-48'>
            <p className='mt-10'>Update Your Profile</p>
            <GeneralProfile></GeneralProfile>

            
        </div>
    );
};

export default Profile;