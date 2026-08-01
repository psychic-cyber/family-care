import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import AppText from '../atoms/AppText';
import { useAppTheme } from '../../hooks/useAppTheme';
import { Spacing } from '../../theme';

interface Props {
  title: string;
  subtitle: string;
}

export default function AppHeader({
  title,
  subtitle,
}: Props) {
  const { colors } = useAppTheme();

  return (
    <View style={styles.container}>
      <AppText variant="h1">
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
    marginBottom: Spacing.xxl,
  },

  subtitle: {
    marginTop: Spacing.sm,
  },
});