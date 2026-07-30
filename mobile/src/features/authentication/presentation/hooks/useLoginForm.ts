import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import { zodResolver } from '@hookform/resolvers/zod';
import type { FirebaseAuthTypes } from '@react-native-firebase/auth';
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

      await loginUseCase.execute(
        data.email,
        data.password,
      );
    } catch (error: unknown) {
      if (error instanceof Error) {
        const firebaseError =
          error as FirebaseAuthTypes.NativeFirebaseAuthError;

        switch (firebaseError.code) {
          case 'auth/invalid-credential':
          case 'auth/wrong-password':
          case 'auth/user-not-found':
            Alert.alert(
              'Login Failed',
              'Invalid email or password.',
            );
            break;

          case 'auth/invalid-email':
            Alert.alert(
              'Invalid Email',
              'Please enter a valid email address.',
            );
            break;

          case 'auth/network-request-failed':
            Alert.alert(
              'Network Error',
              'Please check your internet connection.',
            );
            break;

          default:
            Alert.alert(
              'Error',
              firebaseError.message,
            );
        }
      }
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