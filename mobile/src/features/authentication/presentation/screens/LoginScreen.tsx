import React from 'react';
import {
  Pressable,
  StyleSheet,
} from 'react-native';

import AppDivider from '../../../../components/atoms/AppDivider';
import AppText from '../../../../components/atoms/AppText';

import AuthLayout from '../layouts/AuthLayout';
import AuthLogo from '../components/common/AuthLogo';
import AuthHeader from '../components/common/AuthHeader';
import AuthButton from '../components/common/AuthButton';
import AuthFooter from '../components/common/AuthFooter';
import SocialLoginButton from '../components/common/SocialLoginButton';
import LoginForm from '../components/login/LoginForm';

import { useAppTheme } from '../../../../hooks/useAppTheme';
import { Spacing } from '../../../../theme';

import { useLoginForm } from '../hooks/useLoginForm';

export default function LoginScreen() {
  const { colors } = useAppTheme();

  const {
    control,
    handleSubmit,
    onSubmit,
    isLoading,
  } = useLoginForm();

  return (
    <AuthLayout>
      <AuthLogo />

      <AuthHeader
        title="Welcome Back"
        subtitle="Sign in to continue caring for your loved ones."
      />

      <LoginForm control={control} />

      <Pressable style={styles.forgotPassword}>
        <AppText
          variant="body"
          color={colors.primary}>
          Forgot Password?
        </AppText>
      </Pressable>

      <AuthButton
        title="Sign In"
        loading={isLoading}
        onPress={handleSubmit(onSubmit)}
      />

      <AppDivider />

      <SocialLoginButton
        title="Continue with Google"
        icon="google"
        onPress={() => {}}
      />

      <AuthFooter
        title="Don't have an account?"
        action="Create Account"
        onPress={() => {}}
      />
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: Spacing.xs,
    marginBottom: Spacing.sm,
  },
});