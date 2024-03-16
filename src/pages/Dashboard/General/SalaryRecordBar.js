import React, { PureComponent } from 'react';
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import bag_of_money from '../../../assests/cliparts/bag_of_money.png'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const SalaryRecordBar = () => {

    // static demoUrl = 'https://codesandbox.io/s/tiny-bar-chart-35meb';

    return (
        <div>
            <div className=''>
                <div className='bg-blue-300 p-8 flex justify-around rounded-lg items-center'>
                    <img className='w-16' src={bag_of_money}/>
                    <p className='text-2xl'>Salary Record</p>
                </div>
            </div>
            <div>
            {/* <ResponsiveContainer width="100%" height="100%">
                <BarChart width={150} height={40} data={data}>
                    <Bar dataKey="uv" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer> */}
            </div>   
        </div>
    );
};

export default SalaryRecordBar;


