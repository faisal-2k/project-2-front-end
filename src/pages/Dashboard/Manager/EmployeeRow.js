import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const EmployeeRow = ({employee}) => {
    
    const dataToPass = { name: 'John Doe', age: 25 };

    return (
        <tr>
            <td>{employee?.employee_id}</td>
            <td>{employee?.name?.toUpperCase()}</td>
            <td><Link   to={{ pathname : `/update-employee`}}><FontAwesomeIcon className='text-slate-400 ml-4' icon={faPen} /></Link></td>
            <td>{employee?.salary}</td>
            <td className={`${employee?.salary_status == "paid" ? "text-green-600" : "text-red-600"}`}>{employee?.salary_status?.toUpperCase()}</td>
            <td className='text-center'><Link to={{ pathname : `/pay/${employee?.employee_id}`, state:  employee }}>Pay</Link></td>
        </tr>
    );
};

export default EmployeeRow;