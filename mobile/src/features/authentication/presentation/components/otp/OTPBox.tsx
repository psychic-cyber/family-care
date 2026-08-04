import React from 'react';
import {
  StyleSheet,
  TextInput,
} from 'react-native';

import { useAppTheme } from '../../../../../hooks/useAppTheme';
import { Radius } from '../../../../../theme';

interface OTPBoxProps {
  value: string;
  onChangeText: (text: string) => void;
}

export default function OTPBox({
  value,
  onChangeText,
}: OTPBoxProps) {
  const { colors } = useAppTheme();

  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      keyboardType="number-pad"
      maxLength={1}
      style={[
        styles.box,
        {
          color: colors.textPrimary,
          backgroundColor: colors.surface,
          borderColor: colors.border,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  box: {
    width: 54,
    height: 54,
    borderWidth: 1,
    borderRadius: Radius.lg,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
});