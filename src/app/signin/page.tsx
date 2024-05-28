"use client";
import EssenceForm from '@/components/form/EssenceForm/EssenceForm';
import EssenceInput from '@/components/form/EssenceInput/EssenceInput';
import EssenceSelect from '@/components/form/EssenceSelect/EssenceSelect';
import Title from '@/components/reusable/Title';
import { BloodGroups, authKey, donateOptions } from '@/constants/constant';
import { useLoginMutation } from '@/redux/api/userApi';
import { Button, Spacer } from '@nextui-org/react';
import Link from 'next/link';
import * as React from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

interface ISignUpPageProps {
}

const SignIn: React.FunctionComponent<ISignUpPageProps> = (props) => {
  const [userLogin] = useLoginMutation();
  const handleRegisterSubmit = async (data: FieldValues) => {
    try {
      const response = await userLogin(data).unwrap();
      if(response.data.id){
        toast.success(response.message)
        localStorage.setItem(authKey,response.data.accessToken);
      }
      
    } catch (error:any) {
       toast.error(error.message)
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

      <Button size='lg' className='bg-coral-50 text-coral-400 w-full py-3 fon-bold text-2xl' type='submit'>Sign In</Button>

    </EssenceForm>
  </section>;
};

export default SignIn;
