"use client";
import EssenceForm from '@/components/form/EssenceForm/EssenceForm';
import EssenceInput from '@/components/form/EssenceInput/EssenceInput';
import EssenceSelect from '@/components/form/EssenceSelect/EssenceSelect';
import Title from '@/components/reusable/Title';
import { BloodGroups, donateOptions } from '@/constants/constant';
import { Button, Spacer } from '@nextui-org/react';
import * as React from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

interface ISignUpPageProps {
}

const SignUpPage: React.FunctionComponent<ISignUpPageProps> = (props) => {
    const handleRegisterSubmit = async (data: FieldValues) => {
          toast.success('data fetched successfully fetched !')
    }
    return <section className=' min-h-screen max-w-2xl capitalize mx-auto py-20'>
        <Title firstTitle='welcome to Life Essence' secondTitle='Sign Up now' />

        <EssenceForm onSubmit={handleRegisterSubmit}>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 '>
                <EssenceInput isRequired={true}  name='name' type="text" placeholder='Enter your name' />
                <EssenceInput  isRequired={true} name='email' type="email" placeholder='Enter your email' />
            </div>

            <Spacer y={5} />


            <EssenceInput isRequired={true}  name='password' type="password" placeholder='Enter your password' />
            <Spacer y={5} />
            <EssenceSelect isRequired={true} name='bloodGroup' label="blood group" placeholder='Select your blood group' menuItems={BloodGroups} />
            <Spacer y={5} />

            <EssenceInput  isRequired={true} name='location' type="text" placeholder='Enter your Location' />

            <Spacer y={5} />

            <EssenceSelect isRequired={true} name='bloodDonate' label="donate blood" placeholder='Do you want to donate blood?' menuItems={donateOptions} />
              
            <Spacer y={5} />

            <Button size='lg' className='bg-coral-50 text-coral-400 w-full py-3 fon-bold text-2xl' type='submit'>Sign Up</Button>







        </EssenceForm>




    </section>;
};

export default SignUpPage;
