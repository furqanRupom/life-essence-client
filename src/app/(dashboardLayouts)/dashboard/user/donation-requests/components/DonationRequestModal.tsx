"use client";
import EssenceModal from '@/components/Shared/Modal/Modal';
import { makeBloodGroups } from '@/utils/bloodGroup/bloodGroup';
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Chip, Divider } from '@nextui-org/react';
import { Droplet, Facebook, Instagram, Phone, PhoneCall, Twitter } from 'lucide-react';
import * as React from 'react';
import { statusColorMap } from '../../blood-requests/components/BloodRequestTable';
import { requestConstantStatus } from '@/constants/constant';
import { useUpdateRequestStatusMutation } from '@/redux/api/bloodsApi';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


interface IDonationRequestModalProps {
    isOpen: boolean;
    onOpen: () => void;
    onOpenChange: () => void;
    onClose: () => void;
    title?: string;
    donationData: any;
}

const DonationRequestModal: React.FunctionComponent<IDonationRequestModalProps> = ({ isOpen, onOpen, onOpenChange, title, donationData, onClose }) => {
    const router = useRouter()


    const [updateRequestStaus, { isLoading }] = useUpdateRequestStatusMutation()


    const isStatus = donationData?.requestStatus == requestConstantStatus.approved || donationData?.requestStatus == requestConstantStatus.rejected;
    console.log(donationData?.requester?.socialMediaMethods);


    // update status;

    const handleStatus = async (status: string) => {
        try {

            const response = await updateRequestStaus({ data: { requestStatus: status }, id: donationData.requester.id }).unwrap();

            if (response) {
                toast.success(`Status ${status.toLocaleLowerCase()} is Successfully `);
                router.refresh();
                onClose();
            }
        } catch (error: any) {
            toast.error(error?.message);
            onClose();
        }

    }


    return <EssenceModal isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} title={title}>
        <Card className="shadow-none">
            <CardHeader className="flex justify-center space-x-3 items-center bg-red-500 text-white p-4 rounded-t-lg">
                <Avatar isBordered  className="w-28 h-28 ring ring-coral-400 rounded-3xl mb-3" src={donationData?.requester?.image || "https://nextui.org/avatars/avatar-1.png"} />
             <div>
                    <h4 className="text-2xl font-semibold">{donationData?.requesterName}</h4>
                    <h5 className="text-lg">{donationData?.requester?.email}</h5>
                    {/* @ts-ignore */}
                    <Chip className="capitalize py-3" color={statusColorMap[donationData?.requestStatus]} size="sm" variant="flat">
                        {donationData?.requestStatus}
                    </Chip>
                    {/* @ts-ignore */}
                    <Chip className="capitalize py-3 ml-1" color={statusColorMap[donationData?.requestStatus]} size="sm" variant="flat">
                        {makeBloodGroups(donationData?.requester?.bloodType)}
                    </Chip>
                   
             </div>
               
               
            </CardHeader>
            <CardBody className="px-6 py-4">
               <div className='flex justify-between'>
                    <div className="mb-4">
                        <h3 className="font-semibold text-lg">Hospital Information</h3>
                        <Divider className="my-2" />
                        <p><strong>Name:</strong> {donationData?.hospitalName}</p>
                        <p><strong>Address:</strong> {donationData?.hospitalAddress}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">Donation Details</h3>
                        <Divider className="my-2" />
                        <p><strong>Date:</strong> {donationData?.dateOfDonation}</p>
                        <p><strong>Time:</strong> {donationData?.timeOfDonation}</p>
                    </div>
               </div>

                {donationData?.requestStatus == requestConstantStatus.approved && (
                    <div className="mt-5 ">
                        <h3 className="font-semibold text-md">Contact Information</h3>
                        <Divider className='my-3' />
                        <p className="text-md text-gray-700 mb-2 flex items-center">
                            <Phone className="w-5 text-default-500 h-5 mr-2" />
                            <strong className='text-default-500'>Phone number : </strong>
                            <span className='ml-1'> {donationData?.phoneNumber}</span>
                        </p>
                        <p className="text-md text-gray-700 mb-2 flex items-center">
                            <PhoneCall className="w-5 text-default-500 h-5 mr-2" />
                            <strong className='text-default-500'>Emergency phone number : </strong>
                            <span className='ml-1'> {donationData?.requester.emergencyPhoneNumber || 'N/A'}</span>
                        </p>
                        {donationData?.requester?.socialMediaMethods && (
                            <div className='pt-1'>
                                <h3 className="font-semibold text-md">Social Information</h3>
                                <Divider className="my-2" />
                                <div className='flex items-center  pb-1 space-x-3 text-gray-600'>
                                    {donationData?.requester?.socialMediaMethods?.facebook && <Link href={donationData?.requester?.socialMediaMethods?.facebook}><Facebook /></Link>}
                                    {donationData?.requester?.socialMediaMethods?.twitter && <Link href={donationData?.requester?.socialMediaMethods?.twitter}><Twitter /></Link>}
                                    {donationData?.requester?.socialMediaMethods?.instagram && <Link href={donationData?.requester?.socialMediaMethods?.instagram}><Instagram /></Link>}
                                </div>
                                {donationData?.requester?.socialMediaMethods?.whatsApp && (
                                    <h3>WhatsApp number: <span className='text-gray-600 '>{donationData?.requester?.socialMediaMethods?.whatsApp}</span></h3>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </CardBody>

            <CardFooter>
                <div className='flex items-center justify-center  space-x-5 w-full'>
                    <Button onPress={onOpen} onClick={() => handleStatus(requestConstantStatus.approved)} isDisabled={isStatus} className='bg-success-400 py-3 text-default-50 font-semibold text-md '>Approve Request</Button>
                    <Button onPress={onOpen} onClick={() => handleStatus(requestConstantStatus.rejected)} isDisabled={isStatus} className='bg-danger-400 py-3 text-default-50 font-semibold text-md '>Reject Request</Button>
                </div>
            </CardFooter>

        </Card>
    </EssenceModal>;
};

export default DonationRequestModal;
