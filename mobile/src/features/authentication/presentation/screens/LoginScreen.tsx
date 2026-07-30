import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppButton from '../../../../components/atoms/AppButton';
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

      <AppButton
        title="Sign In"
        style={styles.button}
        onPress={() => {
          console.log('Sign In');
        }}
      />
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

  button: {
    marginTop: Spacing.xxl,
  },
});