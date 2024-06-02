"use client";
import { useGetMyProfileQuery } from '@/redux/api/userApi';
import { Avatar } from '@nextui-org/react';
import * as React from 'react';

interface IProfileAvatarProps {
}

const ProfileAvatar: React.FunctionComponent<IProfileAvatarProps> = (props) => {
    const {data:profile,isLoading} = useGetMyProfileQuery({});
  
  return <>
      <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="danger"
          name="Jason Hughes"
          size="sm"
          src={profile?.image || "https://i.pravatar.cc/150?u=a042581f4e29026704d"}
      />
  </>;
};

export default ProfileAvatar;
