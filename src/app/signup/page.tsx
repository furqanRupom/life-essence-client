"use client";
import EssenceForm from '@/components/form/EssenceForm/EssenceForm';
import EssenceInput from '@/components/form/EssenceInput/EssenceInput';
import EssenceSelect from '@/components/form/EssenceSelect/EssenceSelect';
import Title from '@/components/reusable/Title';
import { BloodGroups, authKey, donateOptions } from '@/constants/constant';
import { useLoginMutation, useRegistrationMutation } from '@/redux/api/userApi';
import { setLocalStorage } from '@/utils/localStorage';
import { Button, Spacer } from '@nextui-org/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import { setAccessToken } from '../services/actions/setAccessToken';
import { LoaderIcon } from 'lucide-react';

interface ISignUpPageProps {
}

const SignUpPage: React.FunctionComponent<ISignUpPageProps> = (props) => {
    const [userRegistration, { isLoading }] = useRegistrationMutation();
    const [userLogin] = useLoginMutation();
    const handleRegisterSubmit = async (values: FieldValues) => {
        const toastId = toast.loading("Almost there, getting you signed up..")
        try {
            const registerData = {
                name: values.name,
                email: values.email,
                password: values.password,
                bloodType: values.bloodGroup,
                location: values.location,
                bloodDonate: values.bloodDonate
            }
            const response = await userRegistration(registerData).unwrap();
            if (response) {
                const loginUser = await userLogin({
                    email: response.email,
                    password: registerData.password
                }).unwrap()
                localStorage.setItem(authKey, loginUser.accessToken)
                if (loginUser) {
                    toast.success("You're all set! Welcome to the team.", { id: toastId })
                    setLocalStorage(authKey, loginUser.accessToken);
                    setAccessToken(loginUser.accessToken as string, {
                        redirect: "/dashboard"
                    })
                }
            }
        } catch (error: any) {
            toast.error(error.message)
        }
    }
    return <section className=' min-h-screen max-w-2xl capitalize mx-auto py-20 px-8 md:px-0'>
        <Title firstTitle='welcome to Life Essence' secondTitle='Sign Up now' />

        <EssenceForm onSubmit={handleRegisterSubmit}>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 '>
                <EssenceInput isRequired={true} size='sm' name='name' type="text" placeholder='Enter your name' />
                <EssenceInput isRequired={true} size='sm' name='email' type="email" placeholder='Enter your email' />
            </div>

            <Spacer y={5} />


            <EssenceInput hasPasswordToggle isRequired={true} size='sm' name='password' type="password" placeholder='Enter your password' />
            <Spacer y={5} />

            <EssenceSelect isRequired={true} size='sm' name='bloodGroup' label="blood group" placeholder='Select your blood group' menuItems={BloodGroups} />
            <Spacer y={5} />

            <EssenceInput isRequired={true} size='sm' name='location' type="text" placeholder='Enter your Location' />

            <Spacer y={5} />

            <EssenceSelect isRequired={true} size='sm' name='bloodDonate' label="donate blood" placeholder='Do you want to donate blood?' menuItems={donateOptions} />

            <Spacer y={5} />

            <p className='text-right'>Already have an account please <Link className='hover:underline text-coral-500' href="/signin">Sign In</Link></p>
            <Spacer y={2} />
            <Button spinner={<LoaderIcon className='animate-spin ' />} isLoading={isLoading} size='lg' className='bg-coral-50 text-coral-400 w-full py-3 fon-bold text-2xl' type='submit'>Sign Up</Button>
        </EssenceForm>
    </section>;
};

export default SignUpPage;
