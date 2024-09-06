import React, { useState, Fragment } from 'react';
import { Button, Dropdown, DropdownMenu, DropdownTrigger, DropdownItem } from "@nextui-org/react";
import { BsShare } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { FaTrash } from 'react-icons/fa';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import { Dialog, Transition } from '@headlessui/react';
import axiosInstance from '../../axiosInstance';
import { Link } from 'react-router-dom';
import { VerticalDotsIcon } from "../VerticalDotsIcons";
import Share from './Share';

const PostActions = ({ postSlug, isPublished, refreshPosts, showShareOption }) => {
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

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button isIconOnly radius="full" size="sm" variant="light">
            <VerticalDotsIcon />
          </Button>
        </DropdownTrigger>
        <DropdownMenu>
          {showShareOption && (
            <DropdownItem key="share" onClick={handleShare}>
              <div className="flex items-center">
                <BsShare className="mr-2" /> Share
              </div>
            </DropdownItem>
          )}
          <DropdownItem>
            <Link to={`/edit-post/${postSlug}`} className="block">
              <div className="flex items-center">
                <FiEdit className="mr-2" /> Edit
              </div>
            </Link>
          </DropdownItem>
          <DropdownItem onClick={openDeleteDialog}>
            <div className="flex items-center">
              <FaTrash className="mr-2" /> Delete
            </div>
          </DropdownItem>
          <DropdownItem onClick={handlePublishToggle}>
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
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      {/* Share Modal */}
      <Share isOpen={isShareOpen} onClose={closeShareModal} postUrl={`https://innoblog.com.ng/posts/${postSlug}`} />

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
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    Delete Post
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to delete this post? This action cannot be undone.
                    </p>
                  </div>

                  <div className="mt-4">
                    <Button
                      auto
                      flat
                      color="error"
                      onClick={handleDelete}
                      className="mr-2 bg-red-600 text-white"
                    >
                      Yes, Delete
                    </Button>
                    <Button
                      auto
                      onClick={closeDialog}
                      className="bg-gray-200 text-gray-700"
                    >
                      Cancel
                    </Button>
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

export default PostActions;
