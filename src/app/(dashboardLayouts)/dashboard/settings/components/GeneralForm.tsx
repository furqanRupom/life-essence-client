"use client";
import EssenceLoader from '@/components/Shared/Loader/Loader';
import EssenceForm from '@/components/form/EssenceForm/EssenceForm';
import EssenceInput from '@/components/form/EssenceInput/EssenceInput';
import EssenceSelect from '@/components/form/EssenceSelect/EssenceSelect';
import EssenceDatePicker from '@/components/form/EssenceTimeAndDate/EssenceDatePicker';
import { BloodGroups } from '@/constants/constant';
import { useGetMyProfileQuery, useUpdateProfileMutation } from '@/redux/api/userApi';
import { decodeToken } from '@/utils/jwt/jwtDecode';
import { parseDate } from '@internationalized/date';
import { Button } from '@nextui-org/react';
import moment from 'moment';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

interface IGeneralFormProps {
}

/* 
  name                 String
  email                String              @unique
  password             String
  bloodType            BloodGroup
  image                String?
  phoneNumber          String?
  emergencyPhoneNumber String?
  location             String


*/

const formatToShow = (date:string) => {
    const decodedDate = date?.split('/');
    const month = decodedDate[0].padStart(2, '0');
    const day = decodedDate[1].padStart(2, '0');
    const year = decodedDate[2];
    const makeString = `${year}-${month}-${day}`;
    return makeString;
}

const GeneralForm: React.FunctionComponent<IGeneralFormProps> = (props) => {

    const {data:userData,isLoading} = useGetMyProfileQuery({});
    const [updateProfile] = useUpdateProfileMutation();
    const router = useRouter();
    if(isLoading){
        return <></>
    }
    const donationDate = formatToShow(userData?.profile?.lastDonationDate)
    const todaysDate = formatToShow(moment(new Date()).format('L'))
    const defaultProfileValues = {
        name:userData?.name || "",
        email:userData?.email || "",
        age: userData?.profile?.age || 0,
        lastDonationDate: parseDate(donationDate) || parseDate(todaysDate),
        bloodType:userData?.bloodType || "",
        location: userData?.location || "",
        phoneNumber:userData?.phoneNumber || 0,
        emergencyPhoneNumber: userData?.emergencyPhoneNumber || 0
    }
    const handleGeneralInfo = async (values:FieldValues) => {
        const toastId = toast.loading('Profile update ongoing...')
        values.lastDonationDate = moment(new Date(values?.lastDonationDate)).format('L');
        values.age = Number(values.age);
           try {
            const response = await updateProfile(values).unwrap();
            if(response){
                toast.success('Profile update successfully !',{id:toastId});
                router.refresh();
            }
           } catch (error:any) {
              toast.error(error?.message,{id:toastId})
           }
    }
    return <div className="lg:w-2/3 bg-white shadow-md rounded-md p-4">
   {
            !isLoading ? <EssenceForm onSubmit={handleGeneralInfo} defaultValues={defaultProfileValues}>
                <div >
                    <h4 className="text-lg font-medium mb-4">General Information</h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                            <EssenceInput name="name" label="name" type="text" size='sm' />
                        </div>
                        <div>
                            <EssenceInput isReadOnly name="email" label="email" type="text" size='sm' />
                        </div>
                        <div>
                            <EssenceInput name="age" label="age" type="text" size='sm' />
                        </div>
                        <div>
                            <EssenceDatePicker name='lastDonationDate' label='Last Donation Date' size='sm' />

                        </div>

                        <div>
                            <EssenceInput name="phoneNumber" label="Phone number" type="text" size='sm' />
                        </div>
                        <div>
                            <EssenceInput name="emergencyPhoneNumber" label="Emergency phone number" type="text" size='sm' />
                        </div>
                        <div>
                            <EssenceSelect defaultValues={defaultProfileValues.bloodType} name='bloodType' label='Blood group' menuItems={BloodGroups} size='sm' />
                        </div>
                        <div>
                            <EssenceInput name="location" label="location" type="text" size='sm' />
                        </div>



                    </div>

                    <Button type='submit' className='bg-coral-50 text-coral-400 font-semibold my-3'>Update</Button>

                    <div className="mt-8">
                        <h4 className="text-lg font-medium mb-4">Password Information</h4>
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-gray-700">********</span>
                            </div>
                            <div>
                                <Link href="/dashboard/change-password">
                                    <Button className="bg-coral-50 text-coral-400 font-semibold">
                                        Change Password
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </EssenceForm> : ""
   }
  </div>;
};

export default GeneralForm;
