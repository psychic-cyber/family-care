import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppButton from '../../../../components/atoms/AppButton';
import AppInput from '../../../../components/atoms/AppInput';
import AppText from '../../../../components/atoms/AppText';

import { useAppTheme } from '../../../../hooks/useAppTheme';
import { Spacing } from '../../../../theme';

export default function LoginScreen() {
  const { colors } = useAppTheme();

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
        <AppInput
          label="Email"
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <AppInput
          label="Password"
          placeholder="Enter your password"
          secureTextEntry
        />

        <AppButton
          title="Sign In"
          onPress={() => {
            console.log('Sign In');
          }}
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