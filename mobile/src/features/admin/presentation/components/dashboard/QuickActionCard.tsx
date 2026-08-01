import React from 'react';
import {
  Pressable,
  StyleSheet,
} from 'react-native';

import AppText from '../../../../../components/atoms/AppText';
import { useAppTheme } from '../../../../../hooks/useAppTheme';
import { Radius, Spacing } from '../../../../../theme';

interface QuickActionCardProps {
  title: string;
  onPress: () => void;
}

export default function QuickActionCard({
  title,
  onPress,
}: QuickActionCardProps) {
  const { colors } = useAppTheme();

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.card,
        {
          backgroundColor: colors.primary,
        },
      ]}>
      <AppText
        variant="body"
        color={colors.white}>
        {title}
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: Spacing.lg,
    borderRadius: Radius.lg,
    marginBottom: Spacing.md,
    alignItems: 'center',
  },
});