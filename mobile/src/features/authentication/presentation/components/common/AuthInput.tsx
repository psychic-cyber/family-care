import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';

import AppText from '../../../../../components/atoms/AppText';
import { useAppTheme } from '../../../../../hooks/useAppTheme';
import { Radius, Spacing } from '../../../../../theme';

interface AuthInputProps extends TextInputProps {
  label: string;
  error?: string;
}

export default function AuthInput({
  label,
  error,
  ...props
}: AuthInputProps) {
  const { colors } = useAppTheme();
  const [focused, setFocused] = useState(false);

  return (
    <View style={styles.container}>
      <AppText
        variant="body"
        style={styles.label}>
        {label}
      </AppText>

      <TextInput
        {...props}
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
            setFocused(false);
            props.onBlur?.(e);
        }}
        placeholderTextColor={colors.textSecondary}
        selectionColor={colors.primary}
        style={[
          styles.input,
          {
            color: colors.textPrimary,
            backgroundColor: colors.surface,

            borderColor: error
              ? colors.error
              : focused
              ? colors.primary
              : colors.border,

            borderWidth: focused ? 2 : 1,

            shadowColor: focused
              ? colors.primary
              : 'transparent',

            shadowOpacity: focused ? 0.18 : 0,

            shadowRadius: focused ? 8 : 0,

            shadowOffset: {
              width: 0,
              height: 2,
            },

            elevation: focused ? 3 : 0,
          },
        ]}
      />

      {error && (
        <AppText
          variant="caption"
          color={colors.error}
          style={styles.error}>
          {error}
        </AppText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.lg,
  },

  label: {
    marginBottom: Spacing.sm,
    marginLeft: 2,
  },

  input: {
    height: 56,
    borderWidth: 1,
    borderRadius: Radius.xl,
    paddingHorizontal: Spacing.lg,
    fontSize: 15,
  },

  error: {
    marginTop: Spacing.xs,
    marginLeft: 2,
  },
});