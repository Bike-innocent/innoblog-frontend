// import React from 'react';
// import { useQuery } from '@tanstack/react-query';
// import Processing from '../../../components/Processing';
// import PlaceholderImage from './PlaceholderImage';
// import axiosInstance from '../../../axiosInstance';

// const fetchUserProfile = async () => {
//   const response = await axiosInstance.get(`/profile/user`);
//   return response.data;
// };

// const Avatar = ({ currentAvatar, userName, placeholderColor }) => {
//   const { data, isError, error: fetchError, isLoading } = useQuery({
//     queryKey: ['avatar'],
//     queryFn: fetchUserProfile,
//     initialData: { avatar: currentAvatar, name: userName, placeholder_color: placeholderColor },
//   });

//   if (isLoading) {
//     return <Processing text="Loading avatar..." />;
//   }

//   if (isError) {
//     return <p className="text-red-500">Failed to load avatar: {fetchError.message}</p>;
//   }

//   return (
//     <div className="flex flex-col items-center">
//       <div className="relative w-32 h-32 mb-4 flex items-center justify-center">
//         <PlaceholderImage
//           name={data.name}
//           avatar={data.avatar}
//           placeholderColor={data.placeholder_color}
//         />
//       </div>
//     </div>
//   );
// };

// export default Avatar;

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import PlaceholderImage from './PlaceholderImage';

// No need to redefine fetchUserProfile here; just use the query from AppProvider

const Avatar = ({ currentAvatar, userName, placeholderColor }) => {
  const { data, isError, error: fetchError } = useQuery({
    queryKey: ['AuthUserData'], // This should match the queryKey used in AppProvider
    // No need to define queryFn here since AppProvider already handles it
  });

  if (isError) {
    return <p className="text-red-500">Failed to load avatar: {fetchError.message}</p>;
  }

  // Use fallback data if data is undefined
  const avatarData = data || { avatar: currentAvatar, name: userName, placeholder_color: placeholderColor };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32 mb-4 flex items-center justify-center">
        <PlaceholderImage
          name={avatarData.name}
          avatar={avatarData.avatar}
          placeholderColor={avatarData.placeholder_color}
        />
      </div>
    </div>
  );
};

export default Avatar;

