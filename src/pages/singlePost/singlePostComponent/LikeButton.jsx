import React, { useState } from 'react';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import axiosInstance from '../../../axiosInstance';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom'; // For redirecting to login

const LikeButton = ({ slug, initialLikes, isInitiallyLiked }) => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const [isLiked, setIsLiked] = useState(isInitiallyLiked);
    const [likesCount, setLikesCount] = useState(initialLikes);

    const likeMutation = useMutation({
        mutationFn: async () => {
            const response = await axiosInstance.post(`/posts/${slug}/like`);
            return response.data;
        },
        onSuccess: (data) => {
            setLikesCount(data.likes_count);
            setIsLiked(data.is_liked_by_user); // Update based on the backend response
            queryClient.invalidateQueries(['post-like', slug]); // Refetch post data
        },
        onError: (error) => {
            console.error('Error liking the post:', error);
        },
    });

    const handleLike = async () => {
        // Check if the user is authenticated by checking for authToken in localStorage
        const authToken = localStorage.getItem('authToken');
        
        if (!authToken) {
            // Redirect to login if not authenticated
            navigate('/login');
            return;
        }

        // If authenticated, send like request
        likeMutation.mutate();
    };

    return (
        <div className="flex items-center">
            <button onClick={handleLike} className="p-2">
                {isLiked ? (
                    <AiFillLike size={25} className="text-blue-500" /> // Filled, colored like icon when liked
                ) : (
                    <AiOutlineLike size={25} className="text-gray-500" /> // Outline like icon when not liked
                )}
            </button>
            <span className=" text-lg ">{likesCount}</span>
        </div>
    );
};

export default LikeButton;
