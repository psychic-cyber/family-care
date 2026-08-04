import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AppText from '../../../../../components/atoms/AppText';
import { useAppTheme } from '../../../../../hooks/useAppTheme';
import { Radius, Spacing } from '../../../../../theme';

interface AuthPasswordInputProps extends TextInputProps {
  label: string;
  error?: string;
}

export default function AuthPasswordInput({
  label,
  error,
  ...props
}: AuthPasswordInputProps) {
  const { colors } = useAppTheme();

  const [secure, setSecure] = useState(true);

  return (
    <View style={styles.container}>
      <AppText
        variant="body"
        style={styles.label}>
        {label}
      </AppText>

      <View
        style={[
          styles.inputContainer,
          {
            backgroundColor: colors.surface,
            borderColor: error ? colors.error : colors.border,
          },
        ]}>
        <TextInput
          {...props}
          secureTextEntry={secure}
          placeholderTextColor={colors.textSecondary}
          selectionColor={colors.primary}
          style={[
            styles.input,
            {
              color: colors.textPrimary,
            },
          ]}
        />

        <TouchableOpacity
          hitSlop={{
            top: 10,
            bottom: 10,
            left: 10,
            right: 10,
          }}
          onPress={() => setSecure(!secure)}>
          <MaterialCommunityIcons
            name={
              secure
                ? 'eye-off-outline'
                : 'eye-outline'
            }
            size={22}
            color={colors.textSecondary}
          />
        </TouchableOpacity>
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
    marginBottom: Spacing.lg,
  },

  label: {
    marginBottom: Spacing.sm,
    marginLeft: 2,
  },

  inputContainer: {
    height: 56,
    borderWidth: 1,
    borderRadius: Radius.xl,
    paddingHorizontal: Spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    flex: 1,
    fontSize: 15,
    paddingVertical: 0,
  },

  error: {
    marginTop: Spacing.xs,
    marginLeft: 2,
  },
});