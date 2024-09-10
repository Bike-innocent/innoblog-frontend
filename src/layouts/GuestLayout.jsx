
import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { AiOutlineHome, AiOutlineUser, AiOutlineLogin } from 'react-icons/ai';
import {  BsBookmark } from 'react-icons/bs'; // Updated to include more relevant icons
import Footer from '../components/Footer';

import Guest from '../components/navbars/Guest';

function GuestLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    

   

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className='mb-16'>
                <Guest isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> 
            </div>

            <div className="flex bg-gray-100 mt-16 ">
                <div
                    className={`fixed inset-y-0 left-0 top-16 z-50 min-w-64 bg-gray-900 shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                        } transition-transform duration-300 ease-in-out xl:sticky xl:h-screen xl:translate-x-0 xl:flex xl:flex-col xl:w-1/5`}
                >
                    <div className="flex flex-col flex-1 overflow-y-auto">
                        <nav className="flex-1 space-y-2">
                            <NavLink
                                to="/"
                                onClick={toggleSidebar}
                                className={({ isActive }) =>
                                    isActive
                                        ? 'flex items-center px-4 py-2 bg-blue-500 text-white'
                                        : 'flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white'
                                }
                            >
                                <AiOutlineHome className="mr-2" size={20} /> Home
                            </NavLink>

                            <NavLink
                                to="/profile"
                                onClick={toggleSidebar}
                                className={({ isActive }) =>
                                    isActive
                                        ? 'flex items-center px-4 py-2 bg-blue-500 text-white'
                                        : 'flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white'
                                }
                            >
                                <AiOutlineUser className="mr-2" size={20} /> Profile
                            </NavLink>

                            <NavLink
                                to="/create-post"
                                onClick={toggleSidebar}
                                className={({ isActive }) =>
                                    isActive
                                        ? 'flex items-center px-4 py-2 bg-blue-500 text-white'
                                        : 'flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white'
                                }
                            >
                                <BsPencilSquare className="mr-2" size={20} /> Create Post
                            </NavLink>

                            <NavLink
                                to="/saved"
                                onClick={toggleSidebar}
                                className={({ isActive }) =>
                                    isActive
                                        ? 'flex items-center px-4 py-2 bg-blue-500 text-white'
                                        : 'flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white'
                                }
                            >
                                <BsBookmark className="mr-2" size={20} /> Saved Posts
                            </NavLink>

                            <NavLink
                                to="/login"
                                onClick={toggleSidebar}
                                className={({ isActive }) =>
                                    isActive
                                        ? 'flex items-center px-4 py-2 bg-blue-500 text-white'
                                        : 'flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white'
                                }
                            >
                                <AiOutlineLogin className="mr-2" size={20} /> Login
                            </NavLink>
                        </nav>
                    </div>
                </div>

                <div className="flex flex-col flex-1 xl:ml-1/5">
                    <main className="flex-1 overflow-y-auto p-4 min-h-screen bg-white">
                        <Outlet />
                    </main>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default GuestLayout;
