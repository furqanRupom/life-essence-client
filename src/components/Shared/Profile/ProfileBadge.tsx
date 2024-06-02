"use client";
import * as React from 'react';
import { DropdownTrigger, Dropdown, DropdownItem, DropdownMenu, Avatar } from "@nextui-org/react";
import { decodeToken } from '@/utils/jwt/jwtDecode';
import { JwtPayloadWithRole } from '@/interfaces/interfaces';
import Link from 'next/link';
import { authKey } from '@/constants/constant';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { logoutUser } from '@/utils/auth/logoutUser';
import ProfileAvatar from './ProfileAvatar';
import { useGetMyProfileQuery } from '@/redux/api/userApi';

interface IProfileBadgeProps {
    
 }

const ProfileBadge: React.FunctionComponent<IProfileBadgeProps> = (props) => {
    const router = useRouter();
    const { data: profile, isLoading } = useGetMyProfileQuery({});

    const handleLogout = () =>{
       logoutUser(router)
    }
    const user = decodeToken() as JwtPayloadWithRole;
   
    const menus = [
        {
            name: "Profile",
            route: `/${user.role}/profile`
        },
        {
            name: "Dashboard",
            route: "/dashboard"
        }
    ];

    return (
        <Dropdown>
            <DropdownTrigger>
                <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="danger"
                    name="Jason Hughes"
                    size="sm"
                    src={profile?.image || "https://i.pravatar.cc/150?u=a042581f4e29026704d"}
                />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">{user?.name}</p>
                    <p className="font-semibold">{user?.email}</p>
                </DropdownItem>


                <DropdownItem key="profile-section">
                   <Link href="/dashboard/profile">Profile</Link>
                </DropdownItem>
                    <DropdownItem key="dashboard" >
                        <Link href='/dashboard'>Dashboard</Link>
                    </DropdownItem>
                
                <DropdownItem onClick={() => handleLogout()} key="logout" color="danger">
                    Log Out
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default ProfileBadge;
