

// import React, { useState, Fragment } from 'react';
// import { Menu, Transition, Dialog } from '@headlessui/react';
// import { BsShare } from 'react-icons/bs';
// import { FiEdit } from 'react-icons/fi';
// import { FaTrash } from 'react-icons/fa';
// import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
// import axiosInstance from '../../axiosInstance';
// import { Link } from 'react-router-dom';
// import { VerticalDotsIcon } from "../VerticalDotsIcons";
// import Share from './Share';

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ');
// }

// const PostActionsUsername = ({ postSlug, isPublished, refreshPosts, isAuthUser }) => {
//     const [isDialogOpen, setIsDialogOpen] = useState(false);
//     const [isPublishedState, setIsPublishedState] = useState(isPublished);
//     const [isShareOpen, setIsShareOpen] = useState(false);

//     const handleShare = () => {
//         setIsShareOpen(true);
//     };

//     const closeShareModal = () => {
//         setIsShareOpen(false);
//     };

//     const handleDelete = () => {
//         axiosInstance.delete(`/posts/${postSlug}`)
//             .then(() => {
//                 refreshPosts();
//                 setIsDialogOpen(false);
//             })
//             .catch((error) => {
//                 console.error('Error deleting post:', error);
//                 setIsDialogOpen(false);
//             });
//     };

//     const handlePublishToggle = () => {
//         const url = isPublishedState ? `/posts/${postSlug}/unpublish` : `/posts/${postSlug}/publish`;
//         axiosInstance.patch(url)
//             .then(() => {
//                 setIsPublishedState(!isPublishedState);
//                 refreshPosts();
//             })
//             .catch((error) => {
//                 console.error('Error toggling publish status:', error);
//             });
//     };

//     const openDeleteDialog = () => {
//         setIsDialogOpen(true);
//     };

//     return (
//         <>
//             <Menu as="div" className="relative inline-block text-left">
//                 <Menu.Button className="inline-flex justify-center bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
//                     <VerticalDotsIcon />
//                 </Menu.Button>

//                 <Transition
//                     as={Fragment}
//                     enter="transition ease-out duration-100"
//                     enterFrom="transform opacity-0 scale-95"
//                     enterTo="transform opacity-100 scale-100"
//                     leave="transition ease-in duration-75"
//                     leaveFrom="transform opacity-100 scale-100"
//                     leaveTo="transform opacity-0 scale-95"
//                 >
//                     <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
//                         <div className="py-1">
//                             <Menu.Item>
//                                 {({ active }) => (
//                                     <button
//                                         onClick={handleShare}
//                                         className={classNames(
//                                             active ? 'bg-gray-100 text-gray-900' : 'text-gray-800',
//                                             'block px-4 py-2 text-sm w-full text-left'
//                                         )}
//                                     >
//                                         <div className="flex items-center">
//                                             <BsShare className="mr-2" /> Share
//                                         </div>
//                                     </button>
//                                 )}
//                             </Menu.Item>

//                             {isAuthUser && (
//                                 <>
//                                     <Menu.Item>
//                                         {({ active }) => (
//                                             <Link
//                                                 to={`/edit-post/${postSlug}`}
//                                                 className={classNames(
//                                                     active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                                                     'block px-4 py-2 text-sm'
//                                                 )}
//                                             >
//                                                 <div className="flex items-center">
//                                                     <FiEdit className="mr-2" /> Edit
//                                                 </div>
//                                             </Link>
//                                         )}
//                                     </Menu.Item>

//                                     <Menu.Item>
//                                         {({ active }) => (
//                                             <button
//                                                 onClick={openDeleteDialog}
//                                                 className={classNames(
//                                                     active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                                                     'block px-4 py-2 text-sm w-full text-left'
//                                                 )}
//                                             >
//                                                 <div className="flex items-center">
//                                                     <FaTrash className="mr-2" /> Delete
//                                                 </div>
//                                             </button>
//                                         )}
//                                     </Menu.Item>

//                                     <Menu.Item>
//                                         {({ active }) => (
//                                             <button
//                                                 onClick={handlePublishToggle}
//                                                 className={classNames(
//                                                     active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                                                     'block px-4 py-2 text-sm w-full text-left'
//                                                 )}
//                                             >
//                                                 <div className="flex items-center">
//                                                     {isPublishedState ? (
//                                                         <>
//                                                             <AiOutlineCloseCircle className="mr-2" /> Unpublish
//                                                         </>
//                                                     ) : (
//                                                         <>
//                                                             <AiOutlineCheckCircle className="mr-2" /> Publish
//                                                         </>
//                                                     )}
//                                                 </div>
//                                             </button>
//                                         )}
//                                     </Menu.Item>
//                                 </>
//                             )}
//                         </div>
//                     </Menu.Items>
//                 </Transition>
//             </Menu>

//             {/* Share Modal */}
//             <Share isOpen={isShareOpen} onClose={closeShareModal} postUrl={`https://innoblog.com.ng/posts/${postSlug}`} />

//             {/* Delete Confirmation Dialog */}
//             <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)} className="fixed z-10 inset-0 overflow-y-auto">
//                 <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//                     <div className="fixed inset-0 transition-opacity" aria-hidden="true">
//                         <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//                     </div>

//                     <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

//                     <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
//                         <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
//                             Confirm Delete
//                         </Dialog.Title>
//                         <div className="mt-2">
//                             <p className="text-sm">
//                                 Are you sure you want to delete this post?
//                             </p>
//                         </div>

//                         <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
//                             <button
//                                 type="button"
//                                 className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
//                                 onClick={handleDelete}
//                             >
//                                 Delete
//                             </button>
//                             <button
//                                 type="button"
//                                 className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
//                                 onClick={() => setIsDialogOpen(false)}
//                             >
//                                 Cancel
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </Dialog>
//         </>
//     );
// };

// export default PostActionsUsername;

import React, { useState, Fragment } from 'react';
import { Menu, Transition, Dialog } from '@headlessui/react';
import { BsShare } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { FaTrash } from 'react-icons/fa';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import axiosInstance from '../../axiosInstance';
import { Link } from 'react-router-dom';
import { VerticalDotsIcon } from "../VerticalDotsIcons";
import Share from './Share';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const PostActionsUsername = ({ postSlug, isPublished, refreshPosts, isAuthUser }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isPublishedState, setIsPublishedState] = useState(isPublished);
    const [isShareOpen, setIsShareOpen] = useState(false);

    const handleShare = () => {
        setIsShareOpen(true);
    };

    const closeShareModal = () => {
        setIsShareOpen(false);
    };

    const handleDelete = () => {
        axiosInstance.delete(`/posts/${postSlug}`)
            .then(() => {
                refreshPosts();
                setIsDialogOpen(false);
            })
            .catch((error) => {
                console.error('Error deleting post:', error);
                setIsDialogOpen(false);
            });
    };

    const handlePublishToggle = () => {
        const url = isPublishedState ? `/posts/${postSlug}/unpublish` : `/posts/${postSlug}/publish`;
        axiosInstance.patch(url)
            .then(() => {
                setIsPublishedState(!isPublishedState);
                refreshPosts();
            })
            .catch((error) => {
                console.error('Error toggling publish status:', error);
            });
    };

    const openDeleteDialog = () => {
        setIsDialogOpen(true);
    };

    return (
        <>
            <Menu as="div" className="relative inline-block text-left">
                <Menu.Button className="inline-flex justify-center bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                    <VerticalDotsIcon />
                </Menu.Button>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                        <div className="py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={handleShare}
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-800',
                                            'block px-4 py-2 text-sm w-full text-left'
                                        )}
                                    >
                                        <div className="flex items-center">
                                            <BsShare className="mr-2" /> Share
                                        </div>
                                    </button>
                                )}
                            </Menu.Item>

                            {isAuthUser && (
                                <>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                to={`/edit-post/${postSlug}`}
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                <div className="flex items-center">
                                                    <FiEdit className="mr-2" /> Edit
                                                </div>
                                            </Link>
                                        )}
                                    </Menu.Item>

                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                onClick={openDeleteDialog}
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm w-full text-left'
                                                )}
                                            >
                                                <div className="flex items-center">
                                                    <FaTrash className="mr-2" /> Delete
                                                </div>
                                            </button>
                                        )}
                                    </Menu.Item>

                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                onClick={handlePublishToggle}
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm w-full text-left'
                                                )}
                                            >
                                                <div className="flex items-center">
                                                    {isPublishedState ? (
                                                        <>
                                                            <AiOutlineCloseCircle className="mr-2" /> Unpublish
                                                        </>
                                                    ) : (
                                                        <>
                                                            <AiOutlineCheckCircle className="mr-2" /> Publish
                                                        </>
                                                    )}
                                                </div>
                                            </button>
                                        )}
                                    </Menu.Item>
                                </>
                            )}
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>

            {/* Share Modal */}
            <Share isOpen={isShareOpen} onClose={closeShareModal} postUrl={`https://innoblog.com.ng/posts/${postSlug}`} />

            {/* Delete Confirmation Dialog */}
            <Transition appear show={isDialogOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setIsDialogOpen(false)}>
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
                                        Confirm Delete
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Are you sure you want to delete this post? This action cannot be undone.
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
                                            onClick={() => setIsDialogOpen(false)}
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
        </>
    );
};

export default PostActionsUsername;

