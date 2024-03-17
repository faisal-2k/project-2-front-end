import React from 'react';

const EmployeeRow = ({employee}) => {
    return (
        <tr>
            <td>{employee?.id}</td>
            <td>{employee?.name?.toUpperCase()}</td>
            <td>{employee?.salary}</td>
            <td className={`${employee?.salary_status == "paid" ? "text-green-600" : "text-red-600"}`}>{employee?.salary_status?.toUpperCase()}</td>
            <td className='text-center'>Action</td>
        </tr>
    );
};

export default EmployeeRow;