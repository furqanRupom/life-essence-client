"use client";
import React from "react";
import {Avatar,Input,Button, Select, SelectItem} from "@nextui-org/react"
import { Camera, Dribbble, Facebook, Instagram, Twitter } from "lucide-react";
import EssenceInput from "@/components/form/EssenceInput/EssenceInput";
import GeneralForm from "./components/GeneralForm";
import SocialForm from "./components/SocialForm";
import BreadcrumbsTitle from "@/components/dashboard/breadcrumbs/BreadCrumbsTitle";




const SettingsPage = () => {
  return (
    <div className="pt-10  px-5">
      <BreadcrumbsTitle routes={['dashboard','settings']} />

      <div className="flex flex-col lg:flex-row gap-6 py-12">
        {/* Left Section */}
       
       <SocialForm />

        <GeneralForm />
      </div>
    </div>
  );
};

export default SettingsPage;
