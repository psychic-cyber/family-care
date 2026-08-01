import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  LoginFormData,
  LoginSchema,
} from '../../domain/validation/LoginSchema';

import { loginUseCase } from '../../application/container/authContainer';

export const useLoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });

 const onSubmit = async (data: LoginFormData) => {
   try {
     setIsLoading(true);

     await loginUseCase.execute(data.email, data.password);
   } catch (e) {
     console.error(e);

     Alert.alert(
       'Login Failed',
       'Unable to sign in. Please check your email and password.',
     );
   } finally {
     setIsLoading(false);
   }
 };

  return {
    ...form,
    onSubmit,
    isLoading,
  };
};