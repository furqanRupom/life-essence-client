"use client";
import BreadcrumbsTitle from '@/components/dashboard/breadcrumbs/BreadCrumbsTitle';
import EssenceForm from '@/components/form/EssenceForm/EssenceForm';
import EssenceInput from '@/components/form/EssenceInput/EssenceInput';
import Title from '@/components/reusable/Title';
import { useChangePasswordMutation } from '@/redux/api/userApi';
import { logoutUser } from '@/utils/auth/logoutUser';
import { Button, Spacer } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

interface IChangePasswordProps {
}

const ChangePassword: React.FunctionComponent<IChangePasswordProps> = (props) => {
    const [error,setError] = React.useState<string>("");
    const [changePassword] = useChangePasswordMutation();
    const router = useRouter()
    const handleChangePassword = async (values: FieldValues) => {
        if (values.oldPassword !== values.confirmPassword) {
            setError("Password confirmation does not match");
            return;
        }

        const toastId = toast.loading('Changing password. Hang on,please...')
        try {
            const response = await changePassword({ oldPassword: values.oldPassword, newPassword: values.newPassword }).unwrap();
            if (response.id) {
                toast.success("Password changed.Logging out for security",{id:toastId});
                logoutUser(router);
            } else {
                toast.error("Invalid current password. Try again.");
            }
        } catch (error: any) {
            toast.error(`Error changing password: ${error.message}`,{id:toastId});
        }
    };
  return <section className='py-5 px-8'>
  <BreadcrumbsTitle routes={['dashboard','change password']} />

<div className='max-w-2xl py-20 mx-auto'>
    <Title firstTitle='password' secondTitle='change password'/>
          <EssenceForm onSubmit={handleChangePassword}>
              <div className='grid grid-cols-2 gap-x-5'>
                  <EssenceInput hasPasswordToggle isRequired name='oldPassword' label='Your password' type="password" size='sm' />
                  <EssenceInput hasPasswordToggle isRequired name='confirmPassword'  label='Confirm password' type="password" size='sm' />
              </div>
              {error && <h3 className='text-danger-400 py-3'>{error}</h3>}
              <Spacer y={5} />

              <EssenceInput hasPasswordToggle isRequired name='newPassword' label='New password' type="password" size='sm' />
              <Spacer y={5} />
              <Button type='submit' size='md' className='bg-coral-400 text-coral-50  font-semibold'>Change Password</Button>

          </EssenceForm>
</div>
  </section>;
};

export default ChangePassword;
