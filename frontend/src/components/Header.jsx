import React from 'react'
import { useRef } from 'react';
import { useAuthContext } from '../context/AuthContext';
import useLogout from '../hooks/useLogout';
import { Navigate, useNavigate } from 'react-router-dom';

const Header = () => {
    const { authUser } = useAuthContext();
    const { loading, logout } = useLogout();
    const navigate = useNavigate();

    const handlelogout = (e) => {
        e.preventDefault();
        logout();
    }

    return (
        <div className=''>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-4xl">Chatix</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a className='text-white font-medium'>{authUser?.fullName}</a></li>
                        <li>
                            <details>
                                <summary>
                                    Options
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-t-none">
                                    <li onClick={handlelogout}><a>Logout</a></li>
                                    <li onClick={() => navigate("/signup")}><a>Sign Up</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header