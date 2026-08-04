import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppText from '../../../../../components/atoms/AppText';
import { useAppTheme } from '../../../../../hooks/useAppTheme';
import { Spacing } from '../../../../../theme';

interface AuthHeaderProps {
  title: string;
  subtitle?: string;
}

export default function AuthHeader({
  title,
  subtitle,
}: AuthHeaderProps) {
  const { colors } = useAppTheme();

  return (
    <View style={styles.container}>
      <AppText
        variant="h2"
        style={styles.title}>
        {title}
      </AppText>

      {subtitle ? (
        <AppText
          variant="body"
          color={colors.textSecondary}
          style={styles.subtitle}>
          {subtitle}
        </AppText>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.lg,
  },

  title: {
    textAlign: 'center',

    marginBottom: Spacing.xs,
  },

  subtitle: {
    textAlign: 'center',

    lineHeight: 22,

    paddingHorizontal: Spacing.md,
  },
});