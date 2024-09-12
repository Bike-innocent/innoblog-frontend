
import React, { useState } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react';
import { BsThreeDotsVertical, BsBookmark, BsBookmarkFill, BsShare, BsFlag } from 'react-icons/bs';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '../../../axiosInstance';
import Report from './Report';
import Share from './Share';

const PostDropdown = ({ post, setSuccessMessage }) => {
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const queryClient = useQueryClient();

  // Use the `is_saved` directly from the post data passed as props
  const [isSaved, setIsSaved] = useState(post.is_saved);

  // Mutation for saving a post
  const savePostMutation = useMutation({
    mutationFn: async () => {
      const response = await axiosInstance.post(`posts/${post.slug}/save`);
      return response.data.is_saved;
    },
    onSuccess: (data) => {
      setIsSaved(data); // Update the local state
      queryClient.setQueryData(['posts'], (oldData) => {
        // Update the cached post data
        return oldData.map((p) => (p.slug === post.slug ? { ...p, is_saved: data } : p));
      });
      setSuccessMessage(data ? 'Post saved successfully' : 'Post unsaved successfully');
    },
    onError: () => {
      setSuccessMessage('An error occurred while saving the post');
    },
  });

  const handleSave = () => {
    savePostMutation.mutate();
  };

  const handleReport = () => {
    setIsReportOpen(true);
  };

  const closeReportModal = () => {
    setIsReportOpen(false);
  };

  const handleShare = () => {
    setIsShareOpen(true);
  };

  const closeShareModal = () => {
    setIsShareOpen(false);
  };

  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <button className="text-gray-500 hover:text-gray-700 z-0">
            <BsThreeDotsVertical size={24} />
          </button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem key="save" onClick={handleSave}>
            <div className="flex items-center">
              {isSaved ? (
                <>
                  <BsBookmarkFill className="text-blue-500 mr-2" /> Saved
                </>
              ) : (
                <>
                  <BsBookmark className="mr-2" /> Save
                </>
              )}
            </div>
          </DropdownItem>

          <DropdownItem key="share" onClick={handleShare}>
            <div className="flex items-center">
              <BsShare className="mr-2" /> Share
            </div>
          </DropdownItem>

          <DropdownItem key="report" onClick={handleReport}>
            <div className="flex items-center">
              <BsFlag className="mr-2" /> Report
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      {/* Report Modal */}
      <Report postId={post.id} isOpen={isReportOpen} onClose={closeReportModal} />

      {/* Share Dialog */}
      <Share isOpen={isShareOpen} onClose={closeShareModal} postUrl={`https://innoblog.com.ng/posts/${post.slug}`} />
    </>
  );
};

export default PostDropdown;
