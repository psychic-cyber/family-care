import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AppText from '../../../../../components/atoms/AppText';
import { useAppTheme } from '../../../../../hooks/useAppTheme';
import { Spacing } from '../../../../../theme';

interface AuthCheckboxProps {
  checked: boolean;
  label: string;
  onPress: () => void;
}

export default function AuthCheckbox({
  checked,
  label,
  onPress,
}: AuthCheckboxProps) {
  const { colors } = useAppTheme();

  return (
    <Pressable
      style={styles.container}
      onPress={onPress}>
      <MaterialCommunityIcons
        name={
          checked
            ? 'checkbox-marked'
            : 'checkbox-blank-outline'
        }
        size={22}
        color={colors.primary}
      />

      <View style={styles.spacing} />

      <AppText
        variant="body"
        color={colors.textSecondary}>
        {label}
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Spacing.md,
  },

  spacing: {
    width: Spacing.sm,
  },
});