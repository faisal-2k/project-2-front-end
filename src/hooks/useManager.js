import axios from "axios";
import { useEffect, useState } from "react";

const useManager = (user) => {
    const [manager, setManager] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=> {
        const userEmail = user?.email;       
        if(userEmail){                       
            axios.get(`https://pay-manager-back-end.onrender.com/users/ismanager/${userEmail}`)
            .then(response => {
                // Assuming the response data has a property 'isManager'
                setManager(response.data.isManager);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching manager status:', error);
                setIsLoading(false);
                // Handle error appropriately
            });
        }

    } ,[user])
    return [manager, isLoading];
}
export default  useManager;
