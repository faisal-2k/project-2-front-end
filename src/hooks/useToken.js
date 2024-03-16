import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
    const [token, setToken] = useState('');
    useEffect(()=> {
        const userEmail = user?.user?.email;
        const currentUser = {email : userEmail};
        if(userEmail){            
            axios.put(`https://alharamanin-backend-web.onrender.com/user/${userEmail}`, currentUser)
            .then(data => {
                const accessToken = data.data.token;
                localStorage.setItem("accessToken",accessToken)
                setToken(accessToken)
            })
        }



    } ,[user])
    return [token]

}
export default  useToken;

