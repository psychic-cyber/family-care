import React from 'react';
import { View } from 'react-native';

import AuthInput from '../common/AuthInput';

interface ForgotPasswordFormProps {
  email: string;
  error?: string;
  onChangeEmail: (text: string) => void;
}

export default function ForgotPasswordForm({
  email,
  error,
  onChangeEmail,
}: ForgotPasswordFormProps) {
  return (
    <View>
      <AuthInput
        label="Email"
        value={email}
        onChangeText={onChangeEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        error={error}
      />
    </View>
  );
}