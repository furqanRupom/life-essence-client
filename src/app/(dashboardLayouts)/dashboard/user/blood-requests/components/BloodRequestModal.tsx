import EssenceModal from '@/components/Shared/Modal/Modal';
import { requestConstantStatus } from '@/constants/constant';
import { makeBloodGroups } from '@/utils/bloodGroup/bloodGroup';
import { Avatar, Button, Card, CardBody, CardHeader, Chip, Divider } from '@nextui-org/react';
import { Droplet, Facebook, Instagram, Link, Phone, PhoneCall, Twitter } from 'lucide-react';
import * as React from 'react';
import { statusColorMap } from './BloodRequestTable';

interface IBloodRequestModalProps {
    isOpen: boolean;
    onOpen: () => void;
    onOpenChange: () => void;
  
    title?: string;
    requestData: any;
}

const BloodRequestModal: React.FunctionComponent<IBloodRequestModalProps> = ({ isOpen, onOpen, onOpenChange, title, requestData }) => {
    return (
        <EssenceModal isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} title={title}>
            <Card className="shadow-none">
                <CardHeader className="flex  items-center justify-center space-x-3 bg-red-500 text-white p-4 rounded-t-lg">
                    <Avatar isBordered  className="w-28 h-28 rounded-3xl ring ring-coral-400 mb-3" src={requestData?.donor?.image || "https://nextui.org/avatars/avatar-1.png"} />
                    <div>
                        <h4 className="text-2xl font-semibold">{requestData?.donorName}</h4>
                        <h5 className="text-lg">{requestData?.donor?.email}</h5>
                         {/* @ts-ignore */}
                        <Chip className="capitalize py-3 ml-1" color={statusColorMap[requestData?.requestStatus]} size="sm" variant="flat">
                           {requestData.requestStatus}
                        </Chip>
                        {/* @ts-ignore */}
                        <Chip className="capitalize py-3 ml-1" color={statusColorMap[requestData?.requestStatus]} size="sm" variant="flat">
                            {makeBloodGroups(requestData?.donor?.bloodType)}
                        </Chip>

                    </div>
                </CardHeader>
                <CardBody className="px-6 py-4">
                   <div className='flex justify-between'>
                        <div className="mb-4">
                            <h3 className="font-semibold text-lg">Hospital Information</h3>
                            <Divider className="my-2" />
                            <p><strong>Name:</strong> {requestData?.hospitalName}</p>
                            <p><strong>Address:</strong> {requestData?.hospitalAddress}</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Donation Details</h3>
                            <Divider className="my-2" />
                            <p><strong>Date:</strong> {requestData?.dateOfDonation}</p>
                            <p><strong>Time:</strong> {requestData?.timeOfDonation}</p>
                        </div>

                   </div>
                    {requestData?.requestStatus == requestConstantStatus.approved && (
                        <div className="mt-5 ">
                            <h3 className="font-semibold text-md">Contact Information</h3>
                            <Divider className='my-3' />
                            <p className="text-md text-gray-700 mb-2 flex items-center">
                                <Phone className="w-5 text-default-500 h-5 mr-2" />
                                <strong className='text-default-500'>Phone number : </strong>
                                <span className='ml-1'> {requestData?.phoneNumber}</span>
                            </p>
                            <p className="text-md text-gray-700 mb-2 flex items-center">
                                <PhoneCall className="w-5 text-default-500 h-5 mr-2" />
                                <strong className='text-default-500'>Emergency phone number : </strong>
                                <span className='ml-1'> {requestData?.donor?.emergencyPhoneNumber || 'N/A'}</span>
                            </p>
                            {requestData?.reequester?.socialMediaMethods && (
                                <div className='pt-1'>
                                    <h3 className="font-semibold text-md">Social Information</h3>
                                    <Divider className="my-2" />
                                    <div className='flex items-center  pb-1 space-x-3 text-gray-600'>
                                        {requestData?.socialMediaMethods?.donor?.facebook && <Link href={requestData?.socialMediaMethods?.donor?.facebook}><Facebook /></Link>}
                                        {requestData?.socialMediaMethods?.donor?.twitter && <Link href={requestData?.socialMediaMethods?.donor?.twitter}><Twitter /></Link>}
                                        {requestData?.socialMediaMethods?.donor?.instagram && <Link href={requestData?.socialMediaMethods?.donor?.instagram}><Instagram /></Link>}
                                    </div>
                                    {requestData?.socialMediaMethods?.donor?.whatsApp && (
                                        <h3>WhatsApp number: <span className='text-gray-600 '>{requestData?.socialMediaMethods?.donor?.whatsApp}</span></h3>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </CardBody>
            </Card>
        </EssenceModal>
    );
};

export default BloodRequestModal;
