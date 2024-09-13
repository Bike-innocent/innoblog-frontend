
import React from 'react';
import { Link } from 'react-router-dom';

import PostActions from './PostActions';

const Draft = ({ post, refreshPosts }) => {
  return (
    <div className="w-full group mb-4">
      <div className="relative">
        <Link to={`/edit-post/${post.slug}`} className="block">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[210px] shadow md:h-[250px] object-cover rounded-lg group-hover:opacity-75 transition-opacity"
          />
        </Link>
        <div className="flex pt-2">

          <div className="flex-1 flex justify-between">
            <Link to={`/edit-post/${post.slug}`} className="flex-1">
              <h2 className="text-xl font-semibold m-0 p-0 group-hover:underline">
                {post.title.length > 40 ? post.title.substring(0, 40) + '...' : post.title}
              </h2>
            </Link>
            <PostActions
              postSlug={post.slug}
              isPublished={post.status === 1}
              refreshPosts={refreshPosts}
              showShareOption={false}
            />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Draft;
