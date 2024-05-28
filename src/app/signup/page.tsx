"use client";
import EssenceForm from '@/components/form/EssenceForm/EssenceForm';
import EssenceInput from '@/components/form/EssenceInput/EssenceInput';
import EssenceSelect from '@/components/form/EssenceSelect/EssenceSelect';
import Title from '@/components/reusable/Title';
import { BloodGroups, authKey, donateOptions } from '@/constants/constant';
import { useLoginMutation, useRegistrationMutation } from '@/redux/api/userApi';
import { Button, Spacer } from '@nextui-org/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

interface ISignUpPageProps {
}

const SignUpPage: React.FunctionComponent<ISignUpPageProps> = (props) => {
    const [userRegistration] = useRegistrationMutation();
    const [userLogin] = useLoginMutation();
    const router = useRouter();
    const handleRegisterSubmit = async (values: FieldValues) => {
        try {

            const registerData = {
                name:values.name,
                email:values.email,
                password:values.password,
                bloodType:values.bloodGroup,
                location:values.location,
                bloodDonate:values.bloodDonate
            }
            const response = await userRegistration(registerData).unwrap();
            if (response.data.id) {
                const loginUser = await userLogin({
                    email:response.data.email,
                    password:registerData.password
                }).unwrap()
                localStorage.setItem(authKey,loginUser.data.accessToken)
                if(loginUser){
                    router.push('/dashboard')
                }

                toast.success(response.message)
            }
        } catch (error: any) {
            toast.error(error.message)
        }
    }
    return <section className=' min-h-screen max-w-2xl capitalize mx-auto py-20'>
        <Title firstTitle='welcome to Life Essence' secondTitle='Sign Up now' />

        <EssenceForm onSubmit={handleRegisterSubmit}>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 '>
                <EssenceInput isRequired={true} size='sm' name='name' type="text" placeholder='Enter your name' />
                <EssenceInput isRequired={true} size='sm' name='email' type="email" placeholder='Enter your email' />
            </div>

            <Spacer y={5} />


            <EssenceInput isRequired={true} size='sm' name='password' type="password" placeholder='Enter your password' />
            <Spacer y={5} />

            <EssenceSelect isRequired={true} size='sm' name='bloodGroup' label="blood group" placeholder='Select your blood group' menuItems={BloodGroups} />
            <Spacer y={5} />

            <EssenceInput isRequired={true} size='sm' name='location' type="text" placeholder='Enter your Location' />

            <Spacer y={5} />

            <EssenceSelect isRequired={true} size='sm' name='bloodDonate' label="donate blood" placeholder='Do you want to donate blood?' menuItems={donateOptions} />

            <Spacer y={5} />

            <p className='text-right'>Already have an account please <Link className='hover:underline text-coral-500' href="/signin">Sign In</Link></p>
            <Spacer y={2} />

            <Button size='lg' className='bg-coral-50 text-coral-400 w-full py-3 fon-bold text-2xl' type='submit'>Sign Up</Button>

        </EssenceForm>
    </section>;
};

export default SignUpPage;
