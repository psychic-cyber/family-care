import React from 'react';
import { View } from 'react-native';

import AuthInput from '../common/AuthInput';
import AuthPasswordInput from '../common/AuthPasswordInput';

interface RegisterFormProps {
  name: string;
  email: string;
  phone: string;
  password: string;

  onNameChange: (text: string) => void;
  onEmailChange: (text: string) => void;
  onPhoneChange: (text: string) => void;
  onPasswordChange: (text: string) => void;
}

export default function RegisterForm({
  name,
  email,
  phone,
  password,
  onNameChange,
  onEmailChange,
  onPhoneChange,
  onPasswordChange,
}: RegisterFormProps) {
  return (
    <View>
      <AuthInput
        label="Full Name"
        value={name}
        onChangeText={onNameChange}
      />

      <AuthInput
        label="Email"
        value={email}
        onChangeText={onEmailChange}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <AuthInput
        label="Phone Number"
        value={phone}
        onChangeText={onPhoneChange}
        keyboardType="phone-pad"
      />

      <AuthPasswordInput
        label="Password"
        value={password}
        onChangeText={onPasswordChange}
      />
    </View>
  );
}