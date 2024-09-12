
import React, { useState, useEffect } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { AiOutlineHome, AiOutlineUser, AiOutlineLogin } from 'react-icons/ai';
import { BsPencilSquare, BsJournalText, BsPeople, BsBookmark, BsBoxArrowRight } from 'react-icons/bs';
import AuthNavbar from '../components/navbars/AuthNavbar';
import Guest from '../components/navbars/Guest';
import Footer from '../components/Footer';
import { useQuery } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import axiosInstance from '../axiosInstance';

function MainLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    // Check if the token exists in localStorage
    const token = localStorage.getItem('authToken');

    const fetchUserProfile = async () => {
        const response = await axiosInstance.get(`/profile/user`);
        return response.data;
    };

    // Fetch authenticated user data if the token is present
    const { data: user } = useQuery({
        queryKey: ['AuthUserData'],
        queryFn: fetchUserProfile,
        enabled: !!token, // Only fetch user data if the token exists
        staleTime: Infinity,
        retry: false, // Disable retries if there's an error
    });

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleLogout = async () => {
        try {
            // Make the logout request while the token is still present
            const response = await axiosInstance.post('/logout');
            console.log('Logout successful:', response.data);
    
            // Clear user-related data from localStorage after the request
            localStorage.removeItem('authToken');
            localStorage.removeItem('title');
            localStorage.removeItem('content');
            localStorage.removeItem('category');
            localStorage.removeItem('subCategory');
    
            // Remove any cached user data
            queryClient.removeQueries(['AuthUserData']);
    
            // Redirect the user to the home page or login page
            navigate('/');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };
    

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const token = queryParams.get('token');
    
        if (token) {
            // Store the token in localStorage
            localStorage.setItem('authToken', token);
    
            // Remove the token from the URL to clean up the address bar
            window.history.replaceState({}, document.title, window.location.pathname);
    
            // Fetch user data after storing token
           
    
            // Get previous path from sessionStorage, default to '/'
            const previousPath = sessionStorage.getItem('previousPath') || '/';
            
            // Clear previous path from sessionStorage
            sessionStorage.removeItem('previousPath');
    
            // Redirect to the previous path after caching user data
            setTimeout(() => {
                navigate(previousPath);
            }, 100);
        }
    }, [navigate, queryClient]);
    
    
    return (
        <>
            <div className="mb-16">
                {/* Conditionally render AuthNavbar if the user is authenticated, otherwise render Guest */}
                {user ? (
                    <AuthNavbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                ) : (
                    <Guest isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                )}
            </div>

            <div className="flex bg-gray-100 mt-16">
                <div
                    className={`fixed inset-y-0 left-0 top-16 z-50 min-w-64 bg-gray-900 shadow-lg transform ${
                        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
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

                            {/* Conditionally render admin-only links if the user is an admin */}
                            {user && user.roles?.some((role) => role.name === 'admin') && (
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

                            {user ? (
                                <button
                                    onClick={() => {
                                        handleLogout();
                                        toggleSidebar();
                                    }}
                                    className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white w-full"
                                >
                                    <BsBoxArrowRight className="mr-2" size={20} /> Logout
                                </button>
                            ) : (
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
                            )}
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

export default MainLayout;
