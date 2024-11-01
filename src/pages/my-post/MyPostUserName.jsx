




import React, { useRef, useEffect } from 'react';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { Tab } from '@headlessui/react';
import SkeletonComponent from './SkeletonComponent'; // Import the SkeletonComponent
import axiosInstance from '../../axiosInstance';
import Draft from './Draft';
import PublishedUsername from './PublishedUsername';

const fetchUserPosts = async ({ queryKey, pageParam = 1 }) => {
  const [, username] = queryKey;
  const response = await axiosInstance.get(`/posts-from/${username}?page=${pageParam}&limit=12`);
  return response.data;
};

const fetchAuthUser = async () => {
  const response = await axiosInstance.get('/profile/user'); // Adjust the endpoint to your authentication user endpoint
  return response.data;
};

const MyPostUserName = ({ username }) => {
  const {
    data: userPostsData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading: isLoadingPosts,
    isError: isErrorPosts,
    error: errorPosts,
    refetch: refetchPosts,
  } = useInfiniteQuery({
    queryKey: ['userPostsfromusername', username],
    queryFn: fetchUserPosts,
    getNextPageParam: (lastPage) => (lastPage.next_page_url ? lastPage.current_page + 1 : undefined),
  });

  const {
    data: authUserData,
    isLoading: isLoadingAuthUser,
    isError: isErrorAuthUser,
    error: errorAuthUser,
  } = useQuery({
    queryKey: ['authUserData'],
    queryFn: fetchAuthUser,
  });

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
    refetchPosts();
  };

  const isAuthUser = authUserData?.username === username;

  if (isLoadingPosts || isLoadingAuthUser) {
    return (
      <section id="hero-slider">
        <div className="container mx-auto my-4" data-aos="fade-in">
          <SkeletonComponent count={6} /> {/* Use the SkeletonComponent */}
        </div>
      </section>
    );
  }

  if (isErrorPosts || isErrorAuthUser) {
    return (
      <p className="text-red-500">
        Error fetching posts: {errorPosts?.message || errorAuthUser?.message}
      </p>
    );
  }

  const posts = userPostsData?.pages.flatMap(page => page.data) || [];
  const publishedPosts = posts.filter(post => post.status === 1);
  const draftPosts = posts.filter(post => post.status === 0);

  return (
    <section>
      <div className="container mx-auto " data-aos="fade-in">
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
            {isAuthUser && (
              <Tab
                className={({ selected }) =>
                  selected
                    ? 'w-full py-2.5 text-sm leading-5 font-medium border-b-2 border-blue-500 focus:outline-none'
                    : 'w-full py-2.5 text-sm leading-5 font-medium border-b-2'
                }
              >
                Draft / Unpublish
              </Tab>
            )}
          </Tab.List>
          <Tab.Panels className="mt-2">
            <Tab.Panel>

              {publishedPosts.length === 0 ? (
                <p className="text-center text-gray-500">No published posts to display.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 m-0">
                  {publishedPosts.map((post) => (
                    <PublishedUsername key={post.slug} post={post} refreshPosts={refreshPosts} isAuthUser={isAuthUser} />
                  ))}
                </div>
              )}
            </Tab.Panel>
            {isAuthUser && (
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
            )}
          </Tab.Panels>
        </Tab.Group>
        <div ref={observerRef} className="w-full h-10"></div>
        {isFetchingNextPage && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <SkeletonComponent count={6} /> {/* Use the SkeletonComponent */}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyPostUserName;
