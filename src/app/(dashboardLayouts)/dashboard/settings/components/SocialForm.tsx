"use client";
import EssenceForm from '@/components/form/EssenceForm/EssenceForm';
import EssenceInput from '@/components/form/EssenceInput/EssenceInput';
import { useGetMyProfileQuery, useUpdateSocialProfileMutation } from '@/redux/api/userApi';
import { Avatar, Button } from '@nextui-org/react';
import { Camera, Dribbble, Facebook, Instagram, Twitter } from 'lucide-react';
import { WhatsappLogo } from 'phosphor-react';
import * as React from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

interface ISocialFormProps {
}

const SocialForm: React.FunctionComponent<ISocialFormProps> = (props) => {
    const { data: userData, isLoading } = useGetMyProfileQuery({});
    const [updateSocialProfile] = useUpdateSocialProfileMutation();
    if(isLoading){
        return <></>
    }

    const socialProfileDefaultValues = {
        facebook:userData?.socialMediaMethods?.facebook || "",
        instagram: userData?.socialMediaMethods?.instagram || "",
        twitter: userData?.socialMediaMethods?.twitter || "",
        whatsApp: userData?.socialMediaMethods?.whatsApp || ""
    }
    const handleSocialForm = async (values:FieldValues) => {

       try {
        const response = await updateSocialProfile(values);

        if(response){
            toast.success("update social methods successfully")
        }
       } catch (error:any) {
           toast.success(error?.message)
       }

    }
    return <div className="lg:w-1/3 bg-white shadow-md rounded-md p-4">
        <EssenceForm onSubmit={handleSocialForm} defaultValues={socialProfileDefaultValues}>
            <div className="flex flex-col items-center mb-6">
                <Avatar
                    className="w-24 h-24 rounded-full mb-4"
                    alt="Profile"
                />
                <Button  startContent={<Camera className='text-coral-400' />} className="bg-coral-50 text-coral-400 font-semibold px-4 py-2 rounded-md"> Change picture</Button>
            </div>

            <div className="mb-6">
                <h4 className="text-md font-medium mb-2">Social accounts</h4>
                <div className="space-y-2">
                    <EssenceInput name='facebook' label='facebook' endContent={<Facebook className='text-coral-400' />} />
                    <EssenceInput name='instagram' endContent={<Instagram className='text-coral-400' />} label="Instagram" />
                    <EssenceInput name='twitter' endContent={<Twitter className='text-coral-400' />} label="twitter" />
                    <EssenceInput name='whatsApp' endContent={<WhatsappLogo className='w-8 h-8 text-coral-400'  />} label="Whats App" />

                    <Button type='submit' className='bg-coral-50 font-semibold my-5 text-coral-400'>Update</Button>

                </div>
            </div>

      
        </EssenceForm>
  </div>;
};

export default SocialForm;
