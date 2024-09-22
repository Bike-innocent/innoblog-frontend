

// import React, { useRef, useEffect } from 'react';
// import { useInfiniteQuery } from '@tanstack/react-query';
// import { Tab } from '@headlessui/react';
// import axiosInstance from '../../axiosInstance';
// import Published from './Published';
// import Draft from './Draft';
// import SkeletonComponent from './SkeletonComponent'; // Import the SkeletonComponent

// const fetchUserPosts = async ({ pageParam = 1 }) => {
//   const response = await axiosInstance.get(`/posts?page=${pageParam}&limit=12`);
//   return response.data;
// };

// const MyPost = () => {
//   const {
//     data,
//     fetchNextPage,
//     hasNextPage,
//     isFetchingNextPage,
//     isLoading,
//     isError,
//     error,
//     refetch,
//   } = useInfiniteQuery({
//     queryKey: ['userPosts'],
//     queryFn: fetchUserPosts,
//     getNextPageParam: (lastPage) => lastPage.next_page_url ? lastPage.current_page + 1 : undefined,
//   });

//   const posts = data?.pages.flatMap(page => page.data) || [];
//   const publishedPosts = posts.filter(post => post.status === 1);
//   const draftPosts = posts.filter(post => post.status === 0);

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

//   const refreshPosts = () => {
//     refetch();
//   };

//   if (isLoading) {
//     return (
//       <section id="hero-slider">
//         <div className="container mx-auto my-4" data-aos="fade-in">
//           <SkeletonComponent count={6} />
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
//         <Tab.Group>
//           <Tab.List className="flex p-1 space-x-1 rounded-xl">
//             <Tab
//               className={({ selected }) =>
//                 selected
//                   ? 'w-full py-2.5 text-sm leading-5 font-medium border-b-2 border-blue-500 focus:outline-none'
//                   : 'w-full py-2.5 text-sm leading-5 font-medium border-b-2'
//               }
//             >
//               Published
//             </Tab>
//             <Tab
//               className={({ selected }) =>
//                 selected
//                   ? 'w-full py-2.5 text-sm leading-5 font-medium border-b-2 border-blue-500 focus:outline-none'
//                   : 'w-full py-2.5 text-sm leading-5 font-medium border-b-2'
//               }
//             >
//               Draft / Unpublish
//             </Tab>
//           </Tab.List>
//           <Tab.Panels className="mt-2">
//             <Tab.Panel>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 m-0">
//                 {publishedPosts.map((post) => (
//                   <Published key={post.slug} post={post} refreshPosts={refreshPosts} />
//                 ))}
//               </div>
//             </Tab.Panel>
//             <Tab.Panel>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 m-0">
//                 {draftPosts.map((post) => (
//                   <Draft key={post.slug} post={post} refreshPosts={refreshPosts} />
//                 ))}
//               </div>
//             </Tab.Panel>
//           </Tab.Panels>
//         </Tab.Group>
//         <div ref={observerRef} className="w-full h-10"></div>
//         {isFetchingNextPage && (
//           <SkeletonComponent count={6} isFetching={true} />
//         )}
//       </div>
//     </section>
//   );
// };

// export default MyPost;

import React, { useRef, useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Tab } from '@headlessui/react';
import axiosInstance from '../../axiosInstance';
import Published from './Published';
import Draft from './Draft';
import SkeletonComponent from './SkeletonComponent'; // Import the SkeletonComponent

const fetchUserPosts = async ({ pageParam = 1 }) => {
  const response = await axiosInstance.get(`/posts?page=${pageParam}&limit=12`);
  return response.data;
};

const MyPost = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
    refetch,
  } = useInfiniteQuery({
    queryKey: ['userPosts'],
    queryFn: fetchUserPosts,
    getNextPageParam: (lastPage) => lastPage.next_page_url ? lastPage.current_page + 1 : undefined,
  });

  const posts = data?.pages.flatMap(page => page.data) || [];
  const publishedPosts = posts.filter(post => post.status === 1);
  const draftPosts = posts.filter(post => post.status === 0);

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

  const refreshPosts = () => {
    refetch();
  };

  if (isLoading) {
    return (
      <section id="hero-slider">
        <div className="container mx-auto my-4" data-aos="fade-in">
          <SkeletonComponent count={6} />
        </div>
      </section>
    );
  }

  if (isError) {
    return <p className="text-red-500">Error fetching posts: {error.message}</p>;
  }

  return (
    <section>
      <div className="container mx-auto my-4" data-aos="fade-in">
        <Tab.Group>
          <Tab.List className="flex p-1 space-x-1 rounded-xl">
            <Tab
              className={({ selected }) =>
                selected
                  ? 'w-full py-2.5 text-sm leading-5 font-medium border-b-2 border-blue-500 focus:outline-none'
                  : 'w-full py-2.5 text-sm leading-5 font-medium border-b-2'
              }
            >
              Published
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? 'w-full py-2.5 text-sm leading-5 font-medium border-b-2 border-blue-500 focus:outline-none'
                  : 'w-full py-2.5 text-sm leading-5 font-medium border-b-2'
              }
            >
              Draft / Unpublish
            </Tab>
          </Tab.List>
          <Tab.Panels className="mt-2">
            <Tab.Panel>
              {/* Check if there are no published posts */}
              {publishedPosts.length === 0 ? (
                <p className="text-center text-gray-500">No published posts to display.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 m-0">
                  {publishedPosts.map((post) => (
                    <Published key={post.slug} post={post} refreshPosts={refreshPosts} />
                  ))}
                </div>
              )}
            </Tab.Panel>
            <Tab.Panel>
              {draftPosts.length === 0 ? (
                <p className="text-center text-gray-500">No draft posts to display.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 m-0">
                  {draftPosts.map((post) => (
                    <Draft key={post.slug} post={post} refreshPosts={refreshPosts} />
                  ))}
                </div>
              )}

            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
        <div ref={observerRef} className="w-full h-10"></div>
        {isFetchingNextPage && (
          <SkeletonComponent count={6} isFetching={true} />
        )}
      </div>
    </section>
  );
};

export default MyPost;
