

import React, { useState, Fragment } from 'react';
import { Menu, Transition, Dialog } from '@headlessui/react';
import { BsThreeDotsVertical, BsPencil, BsTrash, BsFlag } from 'react-icons/bs';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../../axiosInstance';
import CommentReport from './CommentReport'; // Import the CommentReport component

const fetchUserData = async () => {
  const token = localStorage.getItem('authToken'); // Adjust the key to match your token key

  if (!token) {
    return {}; // Or handle the case when the token is not available
  }

  const response = await axiosInstance.get('/profile/user');
  return response.data;
};

const CommentDropdown = ({ comment, onEdit, onDelete, onReport }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false); // State for CommentReport modal

  const { data: userData, isLoading, isError } = useQuery({
    queryKey: ['usercomment'],
    queryFn: fetchUserData,
    staleTime: 30000, // Optional: Set stale time to reduce the frequency of fetches
  });

  const isAuthUser = userData?.id === comment.user_id;

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const openReport = () => setIsReportOpen(true); // Open the report modal
  const closeReport = () => setIsReportOpen(false); // Close the report modal

  const handleDelete = () => {
    onDelete(comment);
    closeDialog();
  };


  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="text-gray-500 z-1   hover:text-gray-700">
            <BsThreeDotsVertical size={24} />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-20 right-0 mt-2 w-56  origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              {isAuthUser ? (
                <>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => onEdit(comment)}
                        className={`${
                          active ? 'bg-blue-500 text-white' : 'text-gray-900 mb-1 bg-gray-100'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        <BsPencil className="mr-2" /> Edit
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={openDialog}
                        className={`${
                          active ? 'bg-red-500 text-white' : 'text-gray-900 bg-gray-100'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        <BsTrash className="mr-2" /> Delete
                      </button>
                    )}
                  </Menu.Item>
                </>
              ) : (
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={openReport}
                      className={`${
                        active ? 'bg-yellow-500 text-white' : 'text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      <BsFlag className="mr-2" /> Report
                    </button>
                  )}
                </Menu.Item>
              )}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      {/* Delete Confirmation Dialog */}
      <Transition appear show={isDialogOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeDialog}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Delete Comment
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to delete this comment? This action cannot be undone.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                      onClick={handleDelete}
                    >
                      Yes, Delete
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 ml-2 text-sm font-medium text-gray-700 bg-gray-200 border border-transparent rounded-md hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
                      onClick={closeDialog}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Comment Report Modal */}
      {isReportOpen && (
        <CommentReport
          commentId={comment.id}
          isOpen={isReportOpen}
          onClose={closeReport}
        />
      )}
    </>
  );
};

export default CommentDropdown;
