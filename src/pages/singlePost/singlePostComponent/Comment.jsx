

import React from 'react';
import { Link } from 'react-router-dom';
import PlaceholderImage from './PlaceholderImage';
import PlaceholderImageReply from './PlaceholderImageReply';
import CommentDropdown from './CommentDropdown';

const Comment = ({ comment, onReply, onEdit, onDelete, onReport }) => {
  const isReply = comment.parent_id !== null;
  const displayUsername = comment.user?.username || 'Unknown User';

  const handleReplyClick = () => {
    if (isReply) {
      onReply(comment.id, displayUsername);
    } else {
      onReply(comment.id);
    }
  };

  return (
    <div className="mb-4 ">
      <div className={`flex  mt-1  ${isReply ? 'ml-4' : ''}`}>
        <Link to={`/${comment.user.username}`}>
          {isReply ? (
            <div className='w-12'>
              <PlaceholderImageReply
                name={comment.user?.name}
                avatar={comment.user?.avatar_url}
                placeholderColor={comment.user?.placeholder_color}
              />
            </div>
          ) : (
            <div className='w-10'>
              <PlaceholderImage
                name={comment.user?.name}
                avatar={comment.user?.avatar_url}
                placeholderColor={comment.user?.placeholder_color}
              />
            </div>
          )}
        </Link>
        <div className="ml-2 flex-grow">
          <Link to={`/${displayUsername}`}>
            <p className="font-semibold">{displayUsername}</p>
          </Link>
          <p dangerouslySetInnerHTML={{ __html: comment.content }}></p>
          <button
            className="text-sm text-blue-500"
            onClick={handleReplyClick}
          >
            Reply
          </button>
        </div>
        <div className='mt-1'>
          <CommentDropdown
            comment={comment}
            onEdit={onEdit}
            onDelete={onDelete}
            onReport={onReport}
          />
        </div>
      </div>
      <div>
        {comment.replies && comment.replies.map(reply => (
          <Comment
            key={reply.id}
            comment={reply}
            onReply={onReply}
            onEdit={onEdit}
            onDelete={onDelete}
            onReport={onReport}
          />
        ))}
      </div>
    </div>
  );
};

export default Comment;
