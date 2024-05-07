import React from 'react';
import ApplicationFile from './ApplicationFile';

const ApplicationList = () => {
    const a = [1, 2, 3];
    return (
        <div className='Page px-32'>
             <p className='my-10'>All Applications</p>
            <ApplicationFile></ApplicationFile>
        </div>
    );
};

export default ApplicationList;