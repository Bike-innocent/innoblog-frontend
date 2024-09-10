

// import React, { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { HiMenu } from 'react-icons/hi'; // Import the menu icon
// import { FaBell } from 'react-icons/fa'; // Import the bell icon
// import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react'; // Import necessary components from NextUI
// import { BsBoxArrowRight } from 'react-icons/bs'; // Import icons for Profile and Logout
// // Adjust path as needed
// import SearchInput from './SearchInput'; // Adjust path as needed

// function Guest({ toggleSidebar }) {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const navigate = useNavigate();


//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };


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
//                   {/* PlaceholderImage */}
//                  <img src="" alt="" />
//                 </button>
//               </DropdownTrigger>
//               <DropdownMenu
//                 aria-label="User menu"
               
//               >
               

//                 <DropdownItem key="logout" color="error" className="flex items-center">
//                   <div className='flex items-center'>
//                     <BsBoxArrowRight className="mr-2" size={20} /> Login
//                   </div>
//                 </DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Guest;



import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi'; // Import the menu icon
import { FaBell } from 'react-icons/fa'; // Import the bell icon
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react'; // Import necessary components from NextUI
import { BsBoxArrowRight } from 'react-icons/bs'; // Import icons for Profile and Logout
import SearchInput from './SearchInput'; // Adjust path as needed

// Import the placeholder image
import placeholderImage from './placeholder-image.png'; // Adjust path if necessary

function Guest({ toggleSidebar }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
                  {/* PlaceholderImage */}
                  <img
                    src={placeholderImage} // Use the imported image
                    alt="User Placeholder"
                    className="h-10 w-10 rounded-full"
                  />
                </button>
              </DropdownTrigger>
              <DropdownMenu aria-label="User menu">
                <DropdownItem key="logout" color="error" className="flex items-center">
                  <div className="flex items-center">
                    <BsBoxArrowRight className="mr-2" size={20} /> Login
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

export default Guest;




