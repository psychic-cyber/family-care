import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  LoginFormData,
  LoginSchema,
} from '../../domain/validation/LoginSchema';

export const useLoginForm = () => {
  return useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });
};