"use client";
import * as React from 'react';
import { DropdownTrigger, Dropdown, DropdownItem, DropdownMenu, Avatar } from "@nextui-org/react";
import { decodeToken } from '@/utils/jwt/jwtDecode';
import { JwtPayloadWithRole } from '@/interfaces/interfaces';
import Link from 'next/link';
import { authKey } from '@/constants/constant';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

interface IProfileBadgeProps {
  
}

const DashboardProfileBadge: React.FunctionComponent<IProfileBadgeProps> = () => {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem(authKey);
        toast.success("user logout sucessfully")
        router.push('/signup')
    }
    const user = decodeToken() as JwtPayloadWithRole;
    const role = user?.role?.toLocaleLowerCase()


    return (
        <Dropdown>
            <DropdownTrigger>
                <Avatar
                
                    as="button"
                    className="transition-transform"
                    name="Jason Hughes"
                    size="md"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">{user?.name}</p>
                    <p className="font-semibold">{user?.email}</p>
                </DropdownItem>

                <DropdownItem key="Home">
                    <Link href="/">Home</Link>
                </DropdownItem>
                <DropdownItem key="profile">
                    <Link href="/dashboard/profile">Profile</Link>
                </DropdownItem>
                <DropdownItem onClick={() => handleLogout()} key="logout" color="danger">
                    Log Out
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default DashboardProfileBadge;
