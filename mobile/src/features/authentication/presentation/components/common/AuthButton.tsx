import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
} from 'react-native';

import AppText from '../../../../../components/atoms/AppText';
import { useAppTheme } from '../../../../../hooks/useAppTheme';
import { Radius, Spacing } from '../../../../../theme';

interface AuthButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
}

export default function AuthButton({
  title,
  onPress,
  loading = false,
  disabled = false,
}: AuthButtonProps) {
  const { colors } = useAppTheme();

  return (
    <Pressable
    android_ripple={{
        color: 'rgba(255,255,255,0.15)',
        borderless: false,
    }}
      disabled={disabled || loading}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: disabled
            ? colors.border
            : colors.primary,
          opacity: pressed ? 0.85 : 1,
          transform: [
            {
              scale: pressed ? 0.98 : 1,
            },
          ],
        },
      ]}>
      {loading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <AppText
          variant="body"
          color={colors.white}
          style={styles.title}>
          {title}
        </AppText>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 56,
    borderRadius: Radius.xl,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Spacing.md,
  },

  title: {
    fontWeight: '600',
    letterSpacing: 0.3,
  },
});