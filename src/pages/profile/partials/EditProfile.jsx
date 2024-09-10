import React from 'react';
import UpdateProfileInformation from './UpdateProfileInformationForm';
import UserAvatar from './UserAvatar';
import Title from '../../../components/Title'; // Import Title component

function EditProfile() {
  return (
    <div className="p-2 md:p-4 lg:p-5 space-y-6">
      {/* Set the page title for editing the profile */}
      <Title title="Edit Profile" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <UserAvatar />
        </div>
        <div className="md:col-span-2">
          <UpdateProfileInformation />
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
