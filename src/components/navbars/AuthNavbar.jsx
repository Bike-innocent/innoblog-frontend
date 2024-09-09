// import React, { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { useQuery } from '@tanstack/react-query';
// import { HiMenu } from 'react-icons/hi'; // Import the menu icon
// import { FaBell } from 'react-icons/fa'; // Import the bell icon
// import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react'; // Import necessary components from NextUI
// import { BsBoxArrowRight } from 'react-icons/bs'; // Import icons for Profile and Logout
// import { AiOutlineUser } from 'react-icons/ai';
// import axiosInstance from '../../axiosInstance'; // Adjust path as needed
// import PlaceholderImage from './PlaceholderImage'; // Adjust path as needed
// import SearchInput from './SearchInput'; // Adjust path as needed
// n,
// function AuthNavbar({  toggleSidebar }) {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const navigate = useNavigate();

  // const fetchUserData = async () => {
  //   const response = await axiosInstance.get('/profile/user');
  //   return response.data;
  // };

//   const { data: user, } = useQuery({
//     queryKey: ['useref'],
//     queryFn: fetchUserData,
//   });

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };


//   const handleLogout = async () => {
//     try {
//         // Clear token before the request
//         localStorage.removeItem('authToken');
//         localStorage.removeItem('title');
//         localStorage.removeItem('content');
//         localStorage.removeItem('category');
//         localStorage.removeItem('subCategory');

//         // Post logout request to backend
//         const response = await axiosInstance.post('/logout');
//         console.log('Logout successful:', response.data);

//         // Redirect to the login page
//         navigate('/login');
//     } catch (error) {
//         console.error('Error logging out:', error);
//     }
// };

  
//   return (
//     <nav className="bg-gray-900 fixed top-0 left-0 w-full z-50">
//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           <div className="flex items-center">
//             <button
//               type="button"
//               className="inline-flex xl:hidden items-center justify-center rounded p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
//               onClick={toggleSidebar}
//             >
//               <span className="sr-only">Toggle sidebar</span>
//               <HiMenu className="h-6 w-6" />
//             </button>
//             <NavLink
//               to="/home"
//               className="hidden sm:flex flex-shrink-0 items-center text-white text-xl font-bold ml-4"
//             >
//               Innoblog
//             </NavLink>
//           </div>
//           {/* Center the search input */}
//           <div className="flex-1 flex justify-center items-center px-2 lg:px-0">
//             <SearchInput />
//           </div>
//           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//             <button
//               type="button"
//               className="rounded-full mr-2 bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none"
//             >
//               <span className="sr-only">View notifications</span>
//               <FaBell className="h-6 w-6" />
//             </button>

//             <Dropdown>
//               <DropdownTrigger>
//                 <button
//                   type="button"
//                   className="flex rounded-full bg-gray-800 text-sm focus:outline-none"
//                   id="user-menu-button"
//                   aria-expanded={isDropdownOpen}
//                   aria-haspopup="true"
//                   onClick={toggleDropdown}
//                 >
//                   <span className="sr-only">Open user menu</span>
//                   <PlaceholderImage
//                     name={user?.name}
//                     avatar={user?.avatar}
//                     placeholderColor={user?.placeholder_color || ''} // Use placeholder_color from user data
//                   />
//                 </button>
//               </DropdownTrigger>
//               <DropdownMenu
//                 aria-label="User menu"
//                 onAction={(actionKey) => {
//                   if (actionKey === 'logout') {
//                     handleLogout();
//                   }
//                 }}
//               >
//                 <DropdownItem key="profile" className="flex items-center">
//                   <NavLink to="/profile" className="flex items-center text-gray-700 w-full">
//                   <AiOutlineUser className="mr-2" size={20} /> Profile
//                   </NavLink>
//                 </DropdownItem>

                
//                 <DropdownItem key="logout" color="error" onClick={handleLogout} className="flex items-center">
//                <div className='flex items-center'>
//                <BsBoxArrowRight className="mr-2" size={20} /> Logout
//                </div>
             
//                 </DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default AuthNavbar;

// src/components/AuthNavbar.jsx
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { HiMenu } from 'react-icons/hi'; // Import the menu icon
import { FaBell } from 'react-icons/fa'; // Import the bell icon
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react'; // Import necessary components from NextUI
import { BsBoxArrowRight } from 'react-icons/bs'; // Import icons for Profile and Logout
import { AiOutlineUser } from 'react-icons/ai';
import PlaceholderImage from './PlaceholderImage'; // Adjust path as needed
import SearchInput from './SearchInput'; // Adjust path as needed

function AuthNavbar({ toggleSidebar }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();

  // Use the query to fetch user data from AppProvider
  const { data: user } = useQuery({
    queryKey: ['AuthUserData'], // Must match the query key used in DataProviders
  });

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = async () => {
    try {
      // Clear token before the request
      localStorage.removeItem('authToken');
      localStorage.removeItem('title');
      localStorage.removeItem('content');
      localStorage.removeItem('category');
      localStorage.removeItem('subCategory');

      // Post logout request to backend
      const response = await axiosInstance.post('/logout');
      console.log('Logout successful:', response.data);

      // Redirect to the login page
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <nav className="bg-gray-900 fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center">
            <button
              type="button"
              className="inline-flex xl:hidden items-center justify-center rounded p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
              onClick={toggleSidebar}
            >
              <span className="sr-only">Toggle sidebar</span>
              <HiMenu className="h-6 w-6" />
            </button>
            <NavLink
              to="/home"
              className="hidden sm:flex flex-shrink-0 items-center text-white text-xl font-bold ml-4"
            >
              Innoblog
            </NavLink>
          </div>
          {/* Center the search input */}
          <div className="flex-1 flex justify-center items-center px-2 lg:px-0">
            <SearchInput />
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="rounded-full mr-2 bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none"
            >
              <span className="sr-only">View notifications</span>
              <FaBell className="h-6 w-6" />
            </button>

            <Dropdown>
              <DropdownTrigger>
                <button
                  type="button"
                  className="flex rounded-full bg-gray-800 text-sm focus:outline-none"
                  id="user-menu-button"
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                  onClick={toggleDropdown}
                >
                  <span className="sr-only">Open user menu</span>
                  <PlaceholderImage
                    name={user?.name}
                    avatar={user?.avatar}
                    placeholderColor={user?.placeholder_color || ''} // Use placeholder_color from user data
                  />
                </button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="User menu"
                onAction={(actionKey) => {
                  if (actionKey === 'logout') {
                    handleLogout();
                  }
                }}
              >
                <DropdownItem key="profile" className="flex items-center">
                  <NavLink to="/profile" className="flex items-center text-gray-700 w-full">
                    <AiOutlineUser className="mr-2" size={20} /> Profile
                  </NavLink>
                </DropdownItem>

                <DropdownItem key="logout" color="error" onClick={handleLogout} className="flex items-center">
                  <div className='flex items-center'>
                    <BsBoxArrowRight className="mr-2" size={20} /> Logout
                  </div>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default AuthNavbar;

