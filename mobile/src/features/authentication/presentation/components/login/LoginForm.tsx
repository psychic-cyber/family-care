import React from 'react';
import { View } from 'react-native';
import { Controller, Control } from 'react-hook-form';

import AuthInput from '../common/AuthInput';
import AuthPasswordInput from '../common/AuthPasswordInput';

import { LoginFormData } from '../../../domain/validation/LoginSchema';

interface LoginFormProps {
  control: Control<LoginFormData>;
}

export default function LoginForm({
  control,
}: LoginFormProps) {
  return (
    <View>
      <Controller
        control={control}
        name="email"
        render={({
          field: {
            onChange,
            onBlur,
            value,
          },
          fieldState: { error },
        }) => (
          <AuthInput
            label="Email"
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            error={error?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({
          field: {
            onChange,
            onBlur,
            value,
          },
          fieldState: { error },
        }) => (
          <AuthPasswordInput
            label="Password"
            placeholder="Enter your password"
            autoCapitalize="none"
            autoCorrect={false}
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            error={error?.message}
          />
        )}
      />
    </View>
  );
}