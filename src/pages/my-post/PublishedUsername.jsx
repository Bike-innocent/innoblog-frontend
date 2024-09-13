

import React from 'react';
import { Link } from 'react-router-dom';


import PostActionsUsername from './postActionsUsername';
const PublishedUsername = ({ post, refreshPosts, isAuthUser }) => {
  return (
    <div className="w-full group mb-4">
      <div className="relative">
        <Link to={`/posts/${post.slug}`} className="block">
          <img
            src={post.image}
            alt={post.title}
            className="w-full shadow h-[210px] md:h-[250px] object-cover rounded-lg group-hover:opacity-75 transition-opacity"
          />
        </Link>
        <div className="flex pt-2">
          <div className="flex-1 flex justify-between">
            <Link to={`/posts/${post.slug}`} className="flex-1">
              <h2 className="text-xl font-semibold m-0 p-0 group-hover:underline">
                {post.title.length > 40 ? post.title.substring(0, 40) + '...' : post.title}
              </h2>
            </Link>
            <PostActionsUsername
              postSlug={post.slug}
              isPublished={post.status === 1}
              refreshPosts={refreshPosts}
            
              isAuthUser={isAuthUser} // Use this prop to show extra actions if user owns the post
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishedUsername;
