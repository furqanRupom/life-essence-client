import EssenceModal from '@/components/Shared/Modal/Modal';
import { makeBloodGroups } from '@/utils/bloodGroup/bloodGroup';
import { Avatar, Button, Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
import { Droplet, Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';

interface IBloodRequestModalProps {
    isOpen: boolean;
    onOpen: () => void;
    onOpenChange: () => void;

    title?: string;
    requestData: any;
}

const AdminDasboardModal: React.FunctionComponent<IBloodRequestModalProps> = ({ isOpen, onOpen, onOpenChange, title, requestData }) => {
   

    return (
        <EssenceModal isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} title={title}>
            <Card className="shadow-none">
                <CardHeader className="flex flex-col items-center bg-red-500 text-white p-4 rounded-t-lg">
                    <Avatar isBordered radius="full" className="w-28 h-28 ring ring-coral-400 mb-3" src={requestData?.image || "https://nextui.org/avatars/avatar-1.png"} />
                    <h4 className="text-2xl font-semibold">{requestData?.name}</h4>
                    <h5 className="text-lg">{requestData?.email}</h5>
                    <Button className="mt-2  text-white bg-coral-50 text-coral-400 border-white border-2">
                        <strong className="text-2xl">{makeBloodGroups(requestData?.bloodType)}</strong> <Droplet size={24} />
                    </Button>
                </CardHeader>
                <CardBody className="px-6 py-4">
                    <div className="mb-4">
                        <h3 className="font-semibold text-lg">User Information</h3>
                        <Divider className="my-2" />
                        <p><strong>Name:</strong> {requestData?.phoneNumber  || 'N/A'}</p>
                        <p><strong>Emergency Number:</strong> {requestData?.emergencyPhoneNumber || 'N/A'}</p>
                        <p><strong>User Location:</strong> {requestData?.location || 'N/A'}</p>

                    </div>

                    {
                        requestData?.socialMediaMethods && <div>
                            <h3 className="font-semibold text-lg">Social Information</h3>
                            <Divider className="my-2" />
                            <div className='flex items-center space-x-3 text-default-600 pb-5'>
                            <Link href={`${requestData?.socialMediaMethods.facebook}`}><Facebook /></Link>
                            <Link href={`${requestData?.socialMediaMethods.twitter}`}><Twitter /></Link>
                            <Link href={`${requestData?.socialMediaMethods.instagram}`}><Instagram /></Link>
                            
                            </div>
                            <h3>Whats app number : <span className='text-default-600'>{requestData?.socialMediaMethods.whatsApp}</span>
                            </h3>
                            
                        </div>
                    }
                 
                </CardBody>
            </Card>
        </EssenceModal>
    );
};

export default AdminDasboardModal;
