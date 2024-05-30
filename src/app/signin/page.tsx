"use client";
import EssenceForm from '@/components/form/EssenceForm/EssenceForm';
import EssenceInput from '@/components/form/EssenceInput/EssenceInput';
import EssenceSelect from '@/components/form/EssenceSelect/EssenceSelect';
import Title from '@/components/reusable/Title';
import { BloodGroups, authKey, donateOptions } from '@/constants/constant';
import { useLoginMutation } from '@/redux/api/userApi';
import { Button, Spacer } from '@nextui-org/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import { setAccessToken } from '../services/actions/setAccessToken';
import { setLocalStorage } from '@/utils/localStorage';
import { LoaderCircle, LoaderIcon } from 'lucide-react';

interface ISignUpPageProps {
}

const SignIn: React.FunctionComponent<ISignUpPageProps> = (props) => {
  const [userLogin,{isLoading}] = useLoginMutation();
 
  const router = useRouter();
  const handleRegisterSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Almost there, signing you in now...")
    try {
      const response = await userLogin(data).unwrap();
      if(response.accessToken){
        toast.success("You're in! Let's get started.",{id:toastId})
        setLocalStorage(authKey,response.accessToken);
        setAccessToken(response.accessToken as string, {
          redirect: "/dashboard"
        })
      }
      
    } catch (error:any) {
       toast.error("Something went wrong")
    }
  
  }
  return <section className=' min-h-screen max-w-2xl capitalize mx-auto py-20 lg:py-40'>
    <Title firstTitle='welcome back' secondTitle='Sign In ' />

    <EssenceForm onSubmit={handleRegisterSubmit}>

    
        <EssenceInput isRequired={true} size='sm' name='email' type="email" placeholder='Enter your email' />
        <Spacer y={6}/>
        <EssenceInput isRequired={true} size='sm' name='password' type="password" placeholder='Enter your password' />
      <Spacer y={6} />
       
      <p className='text-right'>New to Life Essence please <Link className='hover:underline text-coral-500' href="/signup">Sign Up</Link></p>
      <Spacer y={2} />

      <Button spinner={<LoaderIcon className='animate-spin ' />} isLoading={isLoading} size='lg' className='bg-coral-50 text-coral-400 w-full py-3 fon-bold text-2xl' type='submit'>Sign In</Button>

    </EssenceForm>
  </section>;
};

export default SignIn;
