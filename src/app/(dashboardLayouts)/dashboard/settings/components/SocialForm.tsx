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
import ImageUploadForm from './ImageUploadForm';
import { useRouter } from 'next/navigation';

interface ISocialFormProps {
}

const SocialForm: React.FunctionComponent<ISocialFormProps> = (props) => {
    const { data: userData, isLoading } = useGetMyProfileQuery({});
    const [updateSocialProfile] = useUpdateSocialProfileMutation();
    const router = useRouter();
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
        const toastid = toast.loading('Updating your social details...')

       try {
        const response = await updateSocialProfile(values);

        if(response){
            toast.success("Social details updated successfully",{id:toastid})
            router.refresh();
        }
       } catch (error:any) {
           toast.success(error?.message,{id:toastid})
       }

    }
    return <div className="lg:w-1/3 bg-white shadow-md rounded-md p-4">
        <ImageUploadForm />
        <EssenceForm onSubmit={handleSocialForm} defaultValues={socialProfileDefaultValues}>
            

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
