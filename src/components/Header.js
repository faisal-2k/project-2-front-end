import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assests/logo/project_log.png";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import useManager from '../hooks/useManager';
import { signOut } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const [manager, isLoading] = useManager(user);

const menu = <>
    <li><Link to={'/'}>Home</Link></li>
    {user 
    ?   <>
            <li><Link to="/dashboard">Dashboard</Link></li>  
            <li><Link to="/profile">Profile</Link></li>
    
        </>  
    : <>
    <li><Link to="/">Services</Link></li>      
    </>
    }  
    <li><Link to={'/about'}>About</Link></li>        
    </>
 
    return (
        <header>

            <div className="container mx-auto navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menu}
                </ul>
                </div>
                <Link to='/' className="flex items-center">
                    <img className='w-10' src={logo} alt="" />
                    <span className="hidden md:block ml-4 text-xl text-lime-600">Pay Manager</span>
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                {menu}
                </ul>
            </div>
            <div className="navbar-end">
                { user 
                ?   <div className="dropdown dropdown-hover">
                    <label tabIndex="0" className="btn btn-ghost m-1">{user.displayName}</label>
                    <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => signOut(auth)}><a>Log Out</a></li>
                    </ul>
                </div>
                :  
                 
                <Link to="/login"><FontAwesomeIcon icon="fa-solid fa-user" /> Login</Link>
                }
            </div>
            </div> 

        </header>
        
    );
};

export default Header;