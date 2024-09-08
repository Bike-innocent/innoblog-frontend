import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BsPencilSquare, BsJournalText, BsPeople, BsGear, BsBoxArrowRight } from 'react-icons/bs';
import AuthNavbar from '../components/navbars/AuthNavbar';
import Footer from '../components/Footer';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

import axiosInstance from '../axiosInstance';


function fetchUser() {
    return axiosInstance.get('/profile/user').then((response) => response.data);
}

function MainLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const { data: user, isLoading, error } = useQuery({
        queryKey: ['user'],
        queryFn: fetchUser,
    });

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
   

    const handleLogout = async () => {
        try {
            const response = await axiosInstance.post('/logout');
            console.log('Logout successful:', response.data);

            // Clear any auth-related items in localStorage if needed
            localStorage.removeItem('authToken');
            localStorage.removeItem('title');
            localStorage.removeItem('content');
            localStorage.removeItem('category');
            localStorage.removeItem('subCategory');

            // Redirect to the login page
            navigate('/login');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

      
    
    
    
    

    return (
        <>
            <div className='mb-16'>
                <AuthNavbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            </div>

            <div className="flex bg-gray-100 mt-16 ">
                <div
                    className={`fixed  inset-y-0 left-0 top-16 z-50 min-w-64 bg-gray-900 shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                     } transition-transform duration-300 ease-in-out xl:sticky   xl:h-screen xl:translate-x-0 xl:flex xl:flex-col xl:w-1/5`}
                >

                    <div className="flex flex-col flex-1  overflow-y-auto">
                        <nav className="flex-1  space-y-2 ">
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
                                <BsPencilSquare className="mr-2" size={20} /> Saved Posts
                            </NavLink>
                            {user && user.roles && user.roles.some((role) => role.name === 'admin') && (
                                <>
                                    <NavLink
                                        to="/all-posts"
                                        onClick={toggleSidebar}
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'flex items-center px-4 py-2 bg-blue-500 text-white'
                                                : 'flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white'
                                        }
                                    >
                                        <BsJournalText className="mr-2" size={20} /> All Posts
                                    </NavLink>
                                    <NavLink
                                        to="/all-users"
                                        onClick={toggleSidebar}
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'flex items-center px-4 py-2 bg-blue-500 text-white'
                                                : 'flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white'
                                        }
                                    >
                                        <BsPeople className="mr-2" size={20} /> All Users
                                    </NavLink>
                                    <NavLink
                                        to="/reports"
                                        onClick={toggleSidebar}
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'flex items-center px-4 py-2 bg-blue-500 text-white'
                                                : 'flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white'
                                        }
                                    >
                                        <BsPeople className="mr-2" size={20} /> Reports
                                    </NavLink>

                                    <NavLink
                                        to="/manage-category"
                                        onClick={toggleSidebar}
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'flex items-center px-4 py-2 bg-blue-500 text-white'
                                                : 'flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white'
                                        }
                                    >
                                        <BsPeople className="mr-2" size={20} /> Manage Category
                                    </NavLink>
                                </>
                            )}
                            <NavLink
                                to="/settings"
                                onClick={toggleSidebar}
                                className={({ isActive }) =>
                                    isActive
                                        ? 'flex items-center px-4 py-2 bg-blue-500 text-white'
                                        : 'flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white'
                                }
                            >
                                <BsGear className="mr-2" size={20} /> Settings
                            </NavLink>
                            <button
                                onClick={() => {
                                    handleLogout();
                                    toggleSidebar();
                                }}
                                className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white w-full"
                            >
                                <BsBoxArrowRight className="mr-2" size={20} /> Logout
                            </button>
                        </nav>
                    </div>
                </div>

                <div className="flex flex-col flex-1 xl:ml-1/5">
                    <main className="flex-1  overflow-y-auto p-4 min-h-screen bg-white ">
                        {/* <CategoryNav/> */}
                        <Outlet />
                    </main>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MainLayout;
