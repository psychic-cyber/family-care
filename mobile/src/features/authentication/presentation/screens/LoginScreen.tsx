import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Controller } from 'react-hook-form';

import AppButton from '../../../../components/atoms/AppButton';
import AppInput from '../../../../components/atoms/AppInput';
import AppText from '../../../../components/atoms/AppText';

import { useAppTheme } from '../../../../hooks/useAppTheme';
import { Spacing } from '../../../../theme';

import { useLoginForm } from '../hooks/useLoginForm';

export default function LoginScreen() {
  const { colors } = useAppTheme();

  const {
    control,
    handleSubmit,
  } = useLoginForm();

  const onSubmit = (data: {
    email: string;
    password: string;
  }) => {
    console.log('Login Data:', data);
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
        },
      ]}>
      <AppText variant="h1">
        Welcome Back
      </AppText>

      <AppText
        variant="body"
        color={colors.textSecondary}
        style={styles.subtitle}>
        Sign in to continue
      </AppText>

      <View style={styles.form}>
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
            <AppInput
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
            <AppInput
              label="Password"
              placeholder="Enter your password"
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              error={error?.message}
            />
          )}
        />

        <AppButton
          title="Sign In"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: Spacing.lg,
  },

  subtitle: {
    marginTop: Spacing.sm,
  },

  form: {
    marginTop: Spacing.xxxl,
  },
});