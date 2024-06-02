"use client";
import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Avatar, Button, useDisclosure } from '@nextui-org/react';
import { Camera, CloudUpload, File } from 'lucide-react';
import EssenceModal from '@/components/Shared/Modal/Modal';

import { useGetMyProfileQuery, useUpdateProfileMutation } from '@/redux/api/userApi';
import { toast } from 'sonner';
import { config } from '@/config/config';

interface IImageUploadFormProps { }

const ImageUploadForm: React.FunctionComponent<IImageUploadFormProps> = () => {
    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
    const [file, setFile] = useState<File | null>(null);
    const [updateProfile]  = useUpdateProfileMutation()
    const {data:profile,isLoading} = useGetMyProfileQuery({})
   

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            setFile(acceptedFiles[0]);
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });


    if (isLoading) {
        return <></>
    }

    const handleFileUpload = async () => {
        if (!file) {
            console.error("No file selected");
            return;
        }

        const data = new FormData();
        data.append('image', file);

        try {
            const response = await fetch(`https://api.imgbb.com/1/upload?key=${config.api_key}`, {
                method: "POST",
                body: data,
            });

            const uploadImage = await response.json();

            const toastId = toast.loading('image upload on processing');
           if(uploadImage?.data?.id){
               const response = await updateProfile({ image: uploadImage?.data?.display_url }).unwrap();
               if(response.id){
                 toast.success('Image successfully uploaded !',{id:toastId});
                 onClose();
                 setFile(null)
               }else{
                   toast.error("Something went wrong !", { id: toastId });
                   onClose();
                   setFile(null)
               }

           }
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    };

    return (
        <div className="flex flex-col items-center mb-6">
            <Avatar src={profile?.image || ""}  className="w-32 h-32 rounded-full ring ring-coral-400 mb-4" alt="Profile" />
            <Button onPress={onOpen} startContent={<Camera />} className='bg-coral-400 font-bold text-coral-50'>Update Image</Button>

            <EssenceModal isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange}>
                <div className="w-full py-9 bg-gray-50 rounded-2xl border border-gray-300 gap-3 grid border-dashed" {...getRootProps()}>
                    <input {...getInputProps()} hidden onChange={handleFileChange} />
                    <div className="grid gap-1">
                        <File className="mx-auto text-coral-400" size={40} />
                        <h2 className="text-center text-gray-400 text-xs leading-4">
                            PNG, JPG or PDF, smaller than 15MB
                        </h2>
                    </div>
                    <div className="grid gap-2">
                        <h4 className="text-center text-gray-900 text-sm font-medium leading-snug">
                            {isDragActive ? 'Drop the files here ...' : 'Drag and Drop your file here or'}
                        </h4>
                        <div className="flex items-center justify-center">
                            <label>
                                <input type="file" hidden onChange={handleFileChange} />
                                <div className="flex w-28 h-9 px-2 flex-col bg-indigo-600 rounded-full shadow text-white text-xs font-semibold leading-4 items-center justify-center cursor-pointer focus:outline-none">
                                    Choose Image
                                </div>
                            </label>
                        </div>
                     
                            <p className="text-center text-gray-700 text-sm mt-2">
                                 <span className='text-coral-400'>{ file && file.name || ""}</span>
                            </p>
                   
                    </div>

                    <Button onClick={handleFileUpload} startContent={<CloudUpload />} className='bg-coral-50 my-3 mx-12 text-coral-400'>Upload</Button>
                </div>
            </EssenceModal>
        </div>
    );
};

export default ImageUploadForm;
