import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
} from 'react-native';

import AppText from './AppText';
import { useAppTheme } from '../../hooks/useAppTheme';
import { Radius, Spacing } from '../../theme';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger';

interface AppButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: ButtonVariant;
  loading?: boolean;
  fullWidth?: boolean;
  style?: StyleProp<ViewStyle>;
}

export default function AppButton({
  title,
  variant = 'primary',
  loading = false,
  fullWidth = false,
  disabled = false,
  style,
  ...rest
}: AppButtonProps) {
  const { colors } = useAppTheme();

  const backgroundColor = {
    primary: colors.primary,
    secondary: colors.secondary,
    outline: colors.surface,
    danger: colors.error,
  }[variant];

  const borderColor = {
    primary: colors.primary,
    secondary: colors.secondary,
    outline: colors.primary,
    danger: colors.error,
  }[variant];

  const textColor = variant === 'outline'
    ? colors.primary
    : colors.white;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled || loading}
      style={[
        styles.button,
        {
          backgroundColor,
          borderColor,
          opacity: disabled ? 0.6 : 1,
        },
        fullWidth && styles.fullWidth,
        style,
      ]}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <AppText
          variant="button"
          color={textColor}
        >
          {title}
        </AppText>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 52,
    paddingHorizontal: Spacing.lg,
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: Radius.lg,
    borderWidth: 1,
  },

  fullWidth: {
    width: '100%',
  },
});