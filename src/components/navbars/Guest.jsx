
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Guest({ isSidebarOpen, toggleSidebar }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State to manage search input visibility

  return (
    <nav className="bg-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
              onClick={toggleSidebar}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isSidebarOpen ? 'hidden' : 'block'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <NavLink
              to="/home"
              className=" sm:flex flex-shrink-0 items-center text-white text-xl font-bold"
            >
              Innoblog
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Guest;

