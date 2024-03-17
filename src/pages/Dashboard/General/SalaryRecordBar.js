import React from 'react';
import bag_of_money from '../../../assests/cliparts/bag_of_money.png'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: 'JAN',
    Salary: 2000,    
  },
  {
    name: 'FEB',
    Salary: 1500,    
  },
  {
    name: 'MAR',
    Salary: 2000,    
  },
  {
    name: 'APR',
    Salary: 2500,    
  },
  {
    name: 'MAY',
    Salary: 2000,    
  },
  {
    name: 'JUN',
    Salary: 1000,    
  },
  {
    name: 'JUL',
    Salary: 2000,    
  },
  {
    name: 'AUG',
    Salary: 1800,    
  },
  {
    name: 'SEP',
    Salary: 2100,    
  },
  {
    name: 'OCT',
    Salary: 2300,    
  },
  {
    name: 'NOV',
    Salary: 1400,    
  },
  {
    name: 'DEC',
    Salary: 2000,    
  },
];

const SalaryRecordBar = () => {

    // static demoUrl = 'https://codesandbox.io/s/tiny-bar-chart-35meb';

    return (
        <div className='my-10 flex items-center'>
            <div className='hidden md:block'>
                <div className='p-8  rounded-lg '>
                    <img className='w-16' src={bag_of_money}/>
                    <p className=''>Salary</p>
                    <p className=''>2024</p>
                </div>
            </div>
            <div className='my-10 w-full'>       

            <ResponsiveContainer height={300}>
                <BarChart  data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis type="number" domain={[0, 100]} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="Salary" fill="#6F2DBD" />
                </BarChart>
            </ResponsiveContainer>
            </div>   
        </div>
    );
};

export default SalaryRecordBar;


