


import React from 'react';
import { Helmet } from 'react-helmet-async'; // Import from react-helmet-async
import { useParams } from 'react-router-dom';
import axiosInstance from '../../../axiosInstance';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { Skeleton } from '@nextui-org/react';
import PlaceholderImage from './PlaceholderImage';
import LikeButton from './LikeButton';
import CommentSection from './CommentSection';
import PostDropdown from './PostDropdown';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const fetchPost = async (slug) => {
    const response = await axiosInstance.get(`/blog/show/posts/${slug}`);
    return response.data;
};

const SinglePostHeaderSection = () => {
    const notifySuccess = (message) => toast.success(message);
    const { slug } = useParams();

    const { data: post, isLoading, isError, error } = useQuery({
        queryKey: ['post-head', slug],
        queryFn: () => fetchPost(slug),
    });

    if (isLoading) {
        return (
            <>
            {/* <div className="mx-auto">

                <div className="bg-gray-200 rounded-lg p-4 h-64 md:h-96 mt-5">
                    <Skeleton height="500px" width="70%" className="mb-4" />
                </div>
            </div> */}
             <div className="block h-64 md:h-96 mt-6">
             <Skeleton className="h-5 w-full " />
             <Skeleton className="h-4 w-3/4 mt-1 " />
             <Skeleton className="w-full h-[210px] md:h-[400px] object-cover rounded-lg mt-2" />
             <div className="flex pt-2">
               <div className="">
                 <Skeleton className="w-10 h-10 rounded-full" />
               </div>
               <div className="flex flex-col pl-2 w-full">
                 <Skeleton className="h-5 w-3/4 " />
                 <Skeleton className="h-4 w-1/4 mt-1 " />
               </div>
             </div>
           </div>
           </>
        );
    }

    if (isError) {
        return <div>Error fetching post: {error.message}</div>;
    }

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div className="container mx-auto">
            {/* Set the meta tags using react-helmet-async */}
            <Helmet>
                <title>{post.title}</title>
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.excerpt || "Read the full post to know more."} />
                <meta property="og:image" content={post.image} />
                <meta property="og:url" content={`https://innoblog.com.ng/posts/${post.slug}`} />
                <meta property="og:type" content="article" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="description" content={post.excerpt || "Read the full post to know more."} />
            </Helmet>

            <div className="bg-white rounded-lg">
                <h1 className="text-3xl font-bold mb-1 mt-3">{post.title}</h1>
                <div className="relative">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 md:h-96 object-cover rounded-lg mb-4"
                    />
                    <div className="absolute top-2 right-2 bg-white bg-opacity-75 text-black text-sm p-1 rounded">
                        {post.category.name} | {new Date(post.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).toUpperCase()}
                    </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                    {/* Left section: User info and like button */}
                    <div className="flex items-center">
                        <Link to={`/${post.user.username}`}>
                            <PlaceholderImage
                                name={post.user.name}
                                avatar={post.user.avatar}
                                placeholderColor={post.user.placeholder_color}
                            />
                        </Link>
                        <div className="ml-4">
                            <p>
                                {post.user.name.length > 20
                                    ? `${post.user.name.slice(0, 20)}...`
                                    : post.user.name}
                            </p>
                        </div>

                        <div className="ml-4">
                            <LikeButton
                                slug={slug}
                                initialLikes={post.likes_count}
                                isInitiallyLiked={post.is_liked_by_user}
                            />
                        </div>
                    </div>

                    {/* Right section: Post dropdown on the extreme right */}
                    <div className="ml-auto">
                        <PostDropdown post={post} setSuccessMessage={notifySuccess} />
                    </div>
                </div>

                {/* Render post content as HTML */}
                <div className="custom-quill-content" dangerouslySetInnerHTML={{ __html: post.content }} />

                {/* Pass both slug and post ID to CommentSection */}
                <CommentSection slug={slug} postId={post.id} />
            </div>
            {/* <ToastContainer /> */}
        </div>
    );
};

export default SinglePostHeaderSection;
