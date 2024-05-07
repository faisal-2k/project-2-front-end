import axios from 'axios';
import React from 'react';

const requestToken = () => {
   
    

    axios.get(`https://pay-manager-back-end.onrender.com/users/request_token`) //https://alharamanin-backend-web.onrender.com/users/
            .then(res => {
                const accessToken = res.data.token;
                localStorage.setItem("accessToken",accessToken)
            })
};

export default requestToken;