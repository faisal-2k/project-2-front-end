import axios from 'axios';
import React from 'react';

const createUserInDB = async (data) => {
    let realData;
console.log(data.email);
    try {
        const response = await axios.post('https://pay-manager-back-end.onrender.com/users/create', data);
        console.log(response.data); // Handle the response data as needed
    } catch (error) {
        console.error('Error:', error);
    }
    
    
    return ;
};

export default createUserInDB;