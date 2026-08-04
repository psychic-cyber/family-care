import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import AppText from './AppText';
import { useAppTheme } from '../../hooks/useAppTheme';
import { Spacing } from '../../theme';

interface AppDividerProps {
  title?: string;
}

export default function AppDivider({
  title = 'OR',
}: AppDividerProps) {
  const { colors } = useAppTheme();

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.line,
          {
            backgroundColor: colors.border,
          },
        ]}
      />

      <AppText
        variant="caption"
        color={colors.textSecondary}
        style={styles.title}>
        {title}
      </AppText>

      <View
        style={[
          styles.line,
          {
            backgroundColor: colors.border,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.lg,
    marginBottom: Spacing.sm,
  },

  line: {
    flex: 1,
    height: 1.2,
    opacity: 0.8,
  },

  title: {
    marginHorizontal: Spacing.md,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});
