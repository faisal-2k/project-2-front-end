import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
    console.log("my token");
    console.log(user);
    
    const [isLoading, setIsLoading] = useState(true);
    const [token, setToken] = useState('');
    useEffect(()=> {
        const userEmail = user?.user?.email;
        const currentUser = {email : userEmail};
        if(userEmail){            
            axios.put(`https://pay-manager-back-end.onrender.com/users/`, currentUser) //https://alharamanin-backend-web.onrender.com/users/
            .then(data => {
                const accessToken = data.data.token;
                localStorage.setItem("accessToken",accessToken)
                setToken(accessToken)
                console.log("security key generated!");
            })

        }



    } ,[user])
    return [token, isLoading]

}
export default  useToken;

