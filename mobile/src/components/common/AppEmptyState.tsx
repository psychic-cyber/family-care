import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AppText from '../atoms/AppText';
import { useAppTheme } from '../../hooks/useAppTheme';
import { Spacing } from '../../theme';

interface Props {
  icon: string;
  title: string;
  subtitle: string;
}

export default function AppEmptyState({
  icon,
  title,
  subtitle,
}: Props) {
  const { colors } = useAppTheme();

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={icon}
        size={64}
        color={colors.primary}
      />

      <AppText
        variant="h2"
        style={styles.title}>
        {title}
      </AppText>

      <AppText
        variant="body"
        color={colors.textSecondary}
        style={styles.subtitle}>
        {subtitle}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 48,
  },

  title: {
    marginTop: Spacing.lg,
  },

  subtitle: {
    marginTop: Spacing.sm,
    textAlign: 'center',
  },
});