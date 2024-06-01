"use client";
import EssenceLoader from '@/components/Shared/Loader/Loader';
import EssenceForm from '@/components/form/EssenceForm/EssenceForm';
import EssenceInput from '@/components/form/EssenceInput/EssenceInput';
import EssenceSelect from '@/components/form/EssenceSelect/EssenceSelect';
import EssenceDatePicker from '@/components/form/EssenceTimeAndDate/EssenceDatePicker';
import EssenceTimePicker from '@/components/form/EssenceTimeAndDate/EssenceTimePicker';
import Banner from '@/components/reusable/Banner';
import Title from '@/components/reusable/Title';
import { BloodGroups, donateOptions } from '@/constants/constant';
import { useDonationRequestMutation } from '@/redux/api/bloodsApi';
import { useGetMyProfileQuery } from '@/redux/api/userApi';
import { isLoggedIn } from '@/utils/auth/isLoggedIn';
import { makeBloodGroups } from '@/utils/bloodGroup/bloodGroup';
import { Button, Link, Spacer } from '@nextui-org/react';
import { LoaderIcon } from 'lucide-react';
import moment from 'moment';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

interface IBloodRequestPageProps {
    params:{
        id:string;
    }
}

const BloodRequestPage: React.FunctionComponent<IBloodRequestPageProps> = (props) => {
    const router = useRouter();
    const { data: profileData, isLoading: ProfileLoading } = useGetMyProfileQuery({});
    const [donationRequest, { isLoading: requestLoading }] = useDonationRequestMutation();
    if(!isLoggedIn){
        router.push('/signin')
        return <></>
    }

    
 

    if(ProfileLoading){
        return <EssenceLoader />
    }




    const defaultRequestValues = {
         name:profileData?.name || "",
         email:profileData?.email || "",
         bloodType: (profileData?.bloodType) || "",
         location:profileData?.location || ""
    }
    console.log(defaultRequestValues)
    const handleBloodRequest = async (values:FieldValues) => {
        values.dateOfDonation = moment(new Date(values.dateOfDonation)).format('L');
        values.timeOfDonation = moment(values.timeOfDonation).format('LT');
        values.donorId =  props.params.id;
        try {
            const response = await donationRequest(values).unwrap();
            if(response){
                toast.success("Request successfully made ");
                router.push('/dashboard/user/blood-requests');
            }

        } catch (error:any) {
             toast.error(error.message)
        }
    }
  return <>
  <Banner title='blood request' subTitle='blood Request'  />
  <Title firstTitle='Request' secondTitle='Blood Request' />
    <section className='max-w-5xl mx-auto py-10'>
          <EssenceForm onSubmit={handleBloodRequest} defaultValues={defaultRequestValues}>

              <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 '>
                  <EssenceInput isReadOnly  isRequired={true} size='sm' name='name' type="text"  />
                  <EssenceInput isReadOnly  isRequired={true} size='sm' name='email' type="email"  />
              </div>

              <Spacer y={5} />

          

             

           

              <EssenceSelect isReadOnly defaultValues={defaultRequestValues.bloodType}  size='sm' name='bloodType' label="blood group" menuItems={BloodGroups} />
              <Spacer y={5} />

              <EssenceInput isReadOnly  isRequired={true} size='sm' name='location' type="text" />

              <Spacer y={5} />

              <EssenceInput isRequired={true} size='sm' name='reason' type="text" />
              <Spacer y={5} />
              <EssenceInput isRequired={true} size='sm' label='Phone Number' name='phoneNumber' type="number" />
              <Spacer y={5} />
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 '>
                  <EssenceDatePicker label='select date' isRequired={true} size='sm' name='dateOfDonation' type="date" />
                  <EssenceTimePicker label='select time' isRequired={true} size='sm' name='timeOfDonation' type="date" />
              </div>


              <Spacer y={5} />

              <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 '>
                  <EssenceInput isRequired={true} size='sm' label='Hospital Name' name='hospitalName' type="text" />
                  <EssenceInput isRequired={true} size='sm' label='Hospital Address' name='hospitalAddress' type="text" />
              </div>

              <Spacer y={5} />

            


      
              <Button spinner={<LoaderIcon className='animate-spin ' />} isLoading={requestLoading} size='lg' className='bg-coral-50 text-coral-400 w-full py-3 fon-bold text-2xl' type='submit'>Create Request</Button>
          </EssenceForm>
    </section>
  </>;
};

export default BloodRequestPage;
