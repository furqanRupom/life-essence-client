"use client";
import React from 'react';
import { useGetMyProfileQuery } from '@/redux/api/userApi';
import { Avatar, Card, Listbox, ListboxItem, Spacer, Tooltip, Button, Calendar } from '@nextui-org/react';
import { Mail, MapPin, Phone, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import moment from 'moment';
import BreadcrumbsTitle from '@/components/dashboard/breadcrumbs/BreadCrumbsTitle';
import WholePage from './components/WholePage';



interface IProfilePageProps { }

const ProfilePage: React.FunctionComponent<IProfilePageProps> = () => {


  return (
   <>
   
   <WholePage />
   </>
  );
};

export default ProfilePage;
