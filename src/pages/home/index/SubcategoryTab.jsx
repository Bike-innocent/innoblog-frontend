

// import React, { useState } from 'react';
// import { Tab } from '@headlessui/react';
// import { useQuery } from '@tanstack/react-query';
// import axiosInstance from '../../../axiosInstance';
// import Post from './Post';
// import HeaderSection from './HeaderSection';
// import { Skeleton } from '@nextui-org/react';

// const fetchPosts = async ({ queryKey }) => {
//   const { selectedCategory, activeTab } = queryKey[1];

//   if (!selectedCategory) {
//     throw new Error('Selected category is invalid.');
//   }

//   try {
//     if (activeTab === 'home') {
//       const response = await axiosInstance.get(`/categories/${selectedCategory}/mixed-posts`);
//       return response.data.data || [];
//     } else {
//       const response = await axiosInstance.get(`/subcategories/${activeTab}/posts`);
//       return response.data.data || [];
//     }
//   } catch (error) {
//     console.error('Error fetching posts:', error);
//     throw error;
//   }
// };

// const SubcategoryTab = ({ selectedCategory, subcategories }) => {
//   const [activeTab, setActiveTab] = useState('home');

//   // Use React Query to fetch posts
//   const { data: posts = [], isLoading, error } = useQuery({
//     queryKey: ['postshi', { selectedCategory, activeTab }],
//     queryFn: fetchPosts,
//   });

//   if (!selectedCategory) {
//     return (
//       <div className="container mx-auto my-8">
//         <HeaderSection />
//       </div>
//     );
//   }

//   if (isLoading) {
//     return (
//       <div className="container mx-auto mt-12" data-aos="fade-in">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {[1, 2, 3, 4, 5, 6].map((_, index) => (
//             <div key={index} className="w-full group">
//               <div className="block">
//                 <Skeleton className="w-full h-[200px] md:h-[250px] object-cover rounded-lg" />
//                 <div className="flex pt-2">
//                   <div className="w-1/5">
//                     <Skeleton className="w-10 h-10 rounded-full" />
//                   </div>
//                   <div className="flex flex-col pl-2 w-full">
//                     <Skeleton className="h-5 w-full " />
//                     <Skeleton className="h-4 w-3/4 mt-1 " />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="text-xl font-bold text-red-500">Failed to fetch posts.</div>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto">
//       <Tab.Group
//         as="div"
//         selectedIndex={subcategories.findIndex(sub => sub.slug === activeTab) + 1}
//         onChange={(index) => {
//           if (index === 0) {
//             setActiveTab('home');
//           } else {
//             const selectedSubcategory = subcategories[index - 1];
//             setActiveTab(selectedSubcategory.slug);

//             // Scroll the selected tab into view
//             const tabElement = document.querySelector(`#subcategory-tab-${selectedSubcategory.id}`);
//             if (tabElement) {
//               tabElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
//             }
//           }
//         }}
//       >
//         <Tab.List className="flex mt-8 overflow-x-auto scrollbar-hide my-categorytab whitespace-nowrap">
//           <Tab
//             as="button"
//             className={({ selected }) =>
//               selected
//                 ? 'whitespace-nowrap focus:outline-none px-2 py-1 cursor-pointer border-b-2 border-blue-500 text-blue-500 font-bold focus:border-none'
//                 : 'whitespace-nowrap focus:outline-none px-2 py-1 cursor-pointer focus:border-none border-none'
//             }
//           >
//             Home
//           </Tab>

//           {subcategories.map((subcategory) => (
//             <Tab
//               key={subcategory.id}
//               as="button"
//               id={`subcategory-tab-${subcategory.id}`}
//               className={({ selected }) =>
//                 selected
//                   ? 'whitespace-nowrap focus:outline-none px-2 py-1 cursor-pointer border-b-2 border-blue-500 text-blue-500 font-bold focus:border-none'
//                   : 'whitespace-nowrap focus:outline-none px-2 py-1 cursor-pointer focus:border-none border-none'
//               }
//             >
//               {subcategory.name}
//             </Tab>
//           ))}
//         </Tab.List>

//         <Tab.Panels>
//           <Tab.Panel>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
//               {posts.map((post) => (
//                 <Post key={post.id} post={post} />
//               ))}
//             </div>
//           </Tab.Panel>

//           {subcategories.map((subcategory) => (
//             <Tab.Panel key={subcategory.id}>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
//                 {posts.map((post) => (
//                   <Post key={post.id} post={post} />
//                 ))}
//               </div>
//             </Tab.Panel>
//           ))}
//         </Tab.Panels>
//       </Tab.Group>
//     </div>
//   );
// };

// export default SubcategoryTab;


import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../../axiosInstance';
import Post from './Post';
import HeaderSection from './HeaderSection';
import { Skeleton } from '@nextui-org/react';

const fetchPosts = async ({ queryKey }) => {
  const { selectedCategory, activeTab } = queryKey[1];

  if (!selectedCategory) {
    throw new Error('Selected category is invalid.');
  }

  try {
    if (activeTab === 'home') {
      const response = await axiosInstance.get(`/categories/${selectedCategory}/mixed-posts`);
      return response.data.data || [];
    } else {
      const response = await axiosInstance.get(`/subcategories/${activeTab}/posts`);
      return response.data.data || [];
    }
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

const SubcategoryTab = ({ selectedCategory, subcategories }) => {
  const [activeTab, setActiveTab] = useState('home');

  // Use React Query to fetch posts
  const { data: posts = [], isLoading, error } = useQuery({
    queryKey: ['postshi', { selectedCategory, activeTab }],
    queryFn: fetchPosts,
  });

  if (!selectedCategory) {
    return (
      <div className="container mx-auto my-8">
        <HeaderSection />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="container mx-auto mt-12" data-aos="fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <div key={index} className="w-full group">
              <div className="block">
                <Skeleton className="w-full h-[200px] md:h-[250px] object-cover rounded-lg" />
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
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-bold text-red-500">Failed to fetch posts.</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <Tab.Group
        as="div"
        selectedIndex={subcategories.findIndex(sub => sub.slug === activeTab) + 1}
        onChange={(index) => {
          if (index === 0) {
            setActiveTab('home');
          } else {
            const selectedSubcategory = subcategories[index - 1];
            setActiveTab(selectedSubcategory.slug);

            // Scroll the selected tab into view
            const tabElement = document.querySelector(`#subcategory-tab-${selectedSubcategory.id}`);
            if (tabElement) {
              tabElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
          }
        }}
      >
        <Tab.List className="flex mt-8 overflow-x-auto scrollbar-hide my-categorytab whitespace-nowrap">
          <Tab
            as="button"
            className={({ selected }) =>
              selected
                ? 'whitespace-nowrap focus:outline-none px-2 py-1 cursor-pointer border-b-2 border-blue-500 text-blue-500 font-bold focus:border-none'
                : 'whitespace-nowrap focus:outline-none px-2 py-1 cursor-pointer focus:border-none border-none'
            }
          >
            Home
          </Tab>

          {subcategories.map((subcategory) => (
            <Tab
              key={subcategory.id}
              as="button"
              id={`subcategory-tab-${subcategory.id}`}
              className={({ selected }) =>
                selected
                  ? 'whitespace-nowrap focus:outline-none px-2 py-1 cursor-pointer border-b-2 border-blue-500 text-blue-500 font-bold focus:border-none'
                  : 'whitespace-nowrap focus:outline-none px-2 py-1 cursor-pointer focus:border-none border-none'
              }
            >
              {subcategory.name}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
              {posts.length > 0 ? (
                posts.map((post) => <Post key={post.id} post={post} />)
              ) : (
                <div className="text-center text-gray-500 w-full mt-4">
                  No posts in this category.
                </div>
              )}
            </div>
          </Tab.Panel>

          {subcategories.map((subcategory) => (
            <Tab.Panel key={subcategory.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
                {posts.length > 0 ? (
                  posts.map((post) => <Post key={post.id} post={post} />)
                ) : (
                  <div className="text-center text-gray-500 w-full mt-4">
                    No posts in this subcategory.
                  </div>
                )}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default SubcategoryTab;
