import axios from 'axios';
import React from 'react';

const createUserInDB = async (data) => {
    try {
        const headers = {                
            authenticator: `Bearer ${localStorage.getItem('accessToken')}`                
        };
        // await axios.post('https://pay-manager-back-end.onrender.com/employers/create', data, { headers: headers }); 
        await axios.post('https://pay-manager-back-end.onrender.com/users/create', data); 
        console.log(" ");
    } catch (error) {
        console.error('Error:', error);
    }    
    
    return ;
};

export default createUserInDB;