import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../../components/Loading';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import EmployeeRow from './EmployeeRow';

const EmployeeList = () => {
    
//   const [admin, isLoadingAdmin] = useAdmin(user);

const params = useParams();


  let searchName = '';
  const getEmployeeList = async (searchName) => {
    try {
      const headers = {
        headers: {
          authenticator: `Bearer ${localStorage.getItem('accessToken')}`
        }
      };
      const { data } = await axios.get(`https://pay-manager-back-end.onrender.com/employees/`, headers);
      return data;
      // Handle data as needed
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

const {isLoading, isFetching, data: employees, refetch} = useQuery('employee_list', () => getEmployeeList(searchName))
 

if(isLoading){
  return <Loading></Loading>
}
if(employees?.length === 0){
  return <div className='min-h-screen flex justify-center items-center'>
            <p className="text-center text-2xl my-5">No Result Found</p>
          </div>
}


const searchByName = e => {
  e.preventDefault();
  const name = e.target.name.value;  
  searchName = name;
  refetch();
}

    return (
        <div className='Page mb-48'>
            <p className='my-10'>Employee List</p>

            <div className="my-10">

        <form onSubmit={searchByName} >
            <div className="form-control my-10">
                <div className="input-group flex justify-center">
                <input name="name" type="text" placeholder="Employee's Name" className="input input-bordered w-4/5 me-4" />
            {isFetching 
            ?
            <button className="btn btn-success btn-circle loading"></button>
            :
            <button type="submit" className="btn btn-success btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>}
        </div>
        </div>
        </form>

    <div className="overflow-x-auto w-10/12 mx-auto">
    <table className="table w-full mx-auto">
        
        <thead>
        <tr className=''>
            <th>ID</th>
            <th>Name</th>
            <th>Update</th>
            <th>Salary</th>
            <th>Status</th>
            <th className='text-center'>Action</th>
          
        </tr>
        </thead>
        <tbody>

        {employees?.map((employee, index) => <EmployeeRow
        key={index}
        employee={employee}
        ></EmployeeRow> ) }     

        
        </tbody>
    </table>
    </div>

        </div>
        </div>
    );
};

export default EmployeeList;