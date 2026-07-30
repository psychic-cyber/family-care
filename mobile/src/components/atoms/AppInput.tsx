import React from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  StyleSheet,
} from 'react-native';

import AppText from './AppText';
// import AppIcon from './AppIcon';

import { useAppTheme } from '../../hooks/useAppTheme';
import { Radius, Spacing } from '../../theme';

interface AppInputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export default function AppInput({
  label,
  error,
  style,
  secureTextEntry,
  ...rest
}: AppInputProps) {
  const { colors } = useAppTheme();

  return (
    <View style={styles.container}>
      {label ? (
        <AppText
          variant="bodySmall"
          style={styles.label}>
          {label}
        </AppText>
      ) : null}

      <View
        style={[
          styles.inputContainer,
          {
            backgroundColor: colors.surface,
            borderColor: error
              ? colors.error
              : colors.border,
          },
        ]}>
        <TextInput
          {...rest}
          style={[
            styles.input,
            {
              color: colors.textPrimary,
            },
            style,
          ]}
          placeholderTextColor={colors.textDisabled}
          secureTextEntry={secureTextEntry}
        />
      </View>

      {error ? (
        <AppText
          variant="caption"
          color={colors.error}
          style={styles.error}>
          {error}
        </AppText>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: Spacing.lg,
  },

  label: {
    marginBottom: Spacing.xs,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    borderWidth: 1,
    borderRadius: Radius.lg,
  },

  input: {
    flex: 1,
    height: 52,
    paddingHorizontal: Spacing.md,
  },

  icon: {
    paddingHorizontal: Spacing.md,
  },

  error: {
    marginTop: Spacing.xs,
  },
});