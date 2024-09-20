// import React, { useRef, useEffect } from 'react';
// import { useInfiniteQuery } from '@tanstack/react-query';
// import { Skeleton } from '@nextui-org/react';
// import axiosInstance from '../../../axiosInstance';
// import Post from './Post';

// const fetchAllPosts = async ({ pageParam = 1 }) => {
//   const response = await axiosInstance.get(`/blog/posts?page=${pageParam}&limit=12`);
//   return response.data;
// };

// const HeaderSection = () => {
//   const {
//     data,
//     fetchNextPage,
//     hasNextPage,
//     isFetchingNextPage,
//     isLoading,
//     isError,
//     error,
//   } = useInfiniteQuery({
//     queryKey: ['allPosts'], // Changed query key to differentiate
//     queryFn: fetchAllPosts,
//     getNextPageParam: (lastPage) => lastPage.next_page_url ? lastPage.current_page + 1 : undefined,
//   });

//   const posts = data?.pages.flatMap(page => page.data) || [];

//   const observerRef = useRef();

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting && hasNextPage) {
//           fetchNextPage();
//         }
//       },
//       { threshold: 1.0 }
//     );
//     if (observerRef.current) {
//       observer.observe(observerRef.current);
//     }
//     return () => {
//       if (observerRef.current) {
//         observer.unobserve(observerRef.current);
//       }
//     };
//   }, [hasNextPage, fetchNextPage]); 

//   if (isLoading) {
//     return (
//       <section id="hero-slider">
//         <div className="container mx-auto my-4" data-aos="fade-in">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {[1, 2, 3, 4, 5, 6].map((_, index) => (
//               <div key={index} className="w-full group">
//                 <div className="block">
//                   <Skeleton className="w-full h-[200px] sm:h-[280px] md:h-[250px] object-cover rounded-lg" />
//                   <div className="flex pt-2">
//                     <div className="w-1/5">
//                       <Skeleton className="w-10 h-10 rounded-full" />
//                     </div>
//                     <div className="flex flex-col pl-2 w-full">
//                       <Skeleton className="h-5 w-full " />
//                       <Skeleton className="h-4 w-3/4 mt-1 " />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }

//   if (isError) {
//     return <p className="text-red-500">Error fetching posts: {error.message}</p>;
//   }

//   return (
//     <section>
//       <div className="container mx-auto my-4" data-aos="fade-in">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 m-0">
//           {posts.map((post, index) => (
//             <Post key={index} post={post} />
//           ))}
//         </div>
//         <div ref={observerRef} className="w-full h-10"></div>
//         {isFetchingNextPage && (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
//             {[1, 2, 3].map((_, index) => (
//               <div key={index} className="w-full group">
//                 <div className="block">
//                   <Skeleton className="w-full h-[200px] sm:h-[280px] md:h-[250px] object-cover rounded-lg" />
//                   <div className="flex pt-2">
//                     <div className="w-1/5">
//                       <Skeleton className="w-10 h-10 rounded-full" />
//                     </div>
//                     <div className="flex flex-col pl-2 w-full">
//                       <Skeleton className="h-5 w-full " />
//                       <Skeleton className="h-4 w-3/4 mt-1 " />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default HeaderSection;


import React, { useRef, useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Skeleton } from '@nextui-org/react';
import axiosInstance from '../../../axiosInstance';
import Post from './Post';

const fetchAllPosts = async ({ pageParam = 1 }) => {
  const response = await axiosInstance.get(`/blog/posts?page=${pageParam}&limit=12`);
  console.log('Fetched posts:', response.data); // Log the response data
  return response.data;
};

const HeaderSection = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: ['allPosts'],
    queryFn: fetchAllPosts,
    getNextPageParam: (lastPage) => lastPage.current_page < lastPage.total_pages ? lastPage.current_page + 1 : undefined,
  });

  const posts = data?.pages.flatMap(page => page.posts) || []; // Adjust based on your API response

  const observerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [hasNextPage, fetchNextPage]); 

  if (isLoading) {
    return (
      <section id="hero-slider">
        <div className="container mx-auto my-4" data-aos="fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div key={index} className="w-full group">
                <div className="block">
                  <Skeleton className="w-full h-[200px] sm:h-[280px] md:h-[250px] object-cover rounded-lg" />
                  <div className="flex pt-2">
                    <div className="w-1/5">
                      <Skeleton className="w-10 h-10 rounded-full" />
                    </div>
                    <div className="flex flex-col pl-2 w-full">
                      <Skeleton className="h-5 w-full " />
                      <Skeleton className="h-4 w-3/4 mt-1 " />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (isError) {
    console.error('Error fetching posts:', error); // Log error for debugging
    return <p className="text-red-500">Error fetching posts: {error.message}</p>;
  }

  return (
    <section>
      <div className="container mx-auto my-4" data-aos="fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 m-0">
          {posts.map((post, index) => (
            <Post key={post.id} post={post} /> // Use unique key from post
          ))}
        </div>
        <div ref={observerRef} className="w-full h-10"></div>
        {isFetchingNextPage && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="w-full group">
                <div className="block">
                  <Skeleton className="w-full h-[200px] sm:h-[280px] md:h-[250px] object-cover rounded-lg" />
                  <div className="flex pt-2">
                    <div className="w-1/5">
                      <Skeleton className="w-10 h-10 rounded-full" />
                    </div>
                    <div className="flex flex-col pl-2 w-full">
                      <Skeleton className="h-5 w-full " />
                      <Skeleton className="h-4 w-3/4 mt-1 " />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeaderSection;
