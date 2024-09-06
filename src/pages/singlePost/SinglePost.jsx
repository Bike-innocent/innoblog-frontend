import React, { useEffect } from 'react';
import SinglePostHeaderSection from './singlePostComponent/SinglePostHeaderSection';
import SinglePostTabs from './singlePostComponent/SinglePostTabs';

function SinglePost() {
  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <div className="container mx-auto flex flex-col lg:flex-row">
      <div className="lg:w-3/4">
        <SinglePostHeaderSection />
      </div>
      <div className="lg:w-1/4 lg:ml-4 mt-4 lg:mt-0">
        <SinglePostTabs />
      </div>
    </div>
  );
}

export default SinglePost;
