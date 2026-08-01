import React, { ReactNode } from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
} from 'react-native';

import { useAppTheme } from '../../hooks/useAppTheme';
import {
  Radius,
  Spacing,
  Elevation,
} from '../../theme';

interface AppCardProps {
  children: ReactNode;
  style?: ViewStyle | ViewStyle[];
}

export default function AppCard({
  children,
  style,
}: AppCardProps) {
  const { colors } = useAppTheme();

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.white,
          borderColor: colors.border,
        },
        style,
      ]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: Spacing.lg,
    borderRadius: Radius.xl,
    borderWidth: 1,
    marginBottom: Spacing.md,
    elevation: Elevation.small,  },
});