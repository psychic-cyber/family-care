import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AppText from '../../../../../components/atoms/AppText';
import { useAppTheme } from '../../../../../hooks/useAppTheme';
import {
  Radius,
  Spacing,
  Elevation,
} from '../../../../../theme';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: string;
  color?: string;
}

export default function StatCard({
  title,
  value,
  icon,
  color,
}: StatCardProps) {
  const { colors } = useAppTheme();

  const iconColor = color ?? colors.primary;

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.surface,
          borderColor: colors.border,
          elevation: Elevation.small,
        },
      ]}>

      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor: `${iconColor}20`,
          },
        ]}>
        <MaterialCommunityIcons
          name={icon}
          size={22}
          color={iconColor}
        />
      </View>

      <AppText
        variant="body"
        color={colors.textSecondary}
        style={styles.title}>
        {title}
      </AppText>

      <AppText variant="h2">
        {value}
      </AppText>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: Spacing.lg,
    borderRadius: Radius.lg,
    borderWidth: 1,
  },

  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },

  title: {
    marginBottom: Spacing.xs,
  },
});