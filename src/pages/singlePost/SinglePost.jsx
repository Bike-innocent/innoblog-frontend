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


// import React, { useEffect } from 'react';
// import { Helmet } from 'react-helmet-async';
// import SinglePostHeaderSection from './singlePostComponent/SinglePostHeaderSection';
// import SinglePostTabs from './singlePostComponent/SinglePostTabs';
// import { useParams } from 'react-router-dom';
// import { useQuery } from '@tanstack/react-query';
// import axiosInstance from '../../axiosInstance';

// const fetchPost = async (slug) => {
//   const response = await axiosInstance.get(`/blog/show/posts/${slug}`);
//   return response.data;
// };

// function SinglePost() {
//   const { slug } = useParams();

//   // Fetch the post data
//   const { data: post, isLoading, isError, error } = useQuery({
//     queryKey: ['post', slug],
//     queryFn: () => fetchPost(slug),
//   });

//   // Scroll to the top when the component mounts
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="container mx-auto flex flex-col lg:flex-row">
//       {/* Helmet meta tags */}
//       {post && (
//         <Helmet>
//           <title>{post.title} | Innoblog</title>
//           <meta property="og:title" content={post.title} />
//           <meta property="og:description" content={post.excerpt || 'Read the full post to know more.'} />
//           <meta property="og:image" content={post.image} />
//           <meta property="og:url" content={`https://innoblog.com.ng/posts/${slug}`} />
//           <meta property="og:type" content="article" />
//           <meta name="twitter:card" content="summary_large_image" />
//           <meta name="description" content={post.excerpt || 'Read the full post to know more.'} />
//         </Helmet>
//       )}

//       <div className="lg:w-3/4">
//         <SinglePostHeaderSection post={post} isLoading={isLoading} isError={isError} error={error} />
//       </div>
//       <div className="lg:w-1/4 lg:ml-4 mt-4 lg:mt-0">
//         <SinglePostTabs />
//       </div>
//     </div>
//   );
// }

// export default SinglePost;
