import React from 'react';
import { StyleSheet, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AppText from '../../../../../components/atoms/AppText';
import { useAppTheme } from '../../../../../hooks/useAppTheme';
import { Spacing } from '../../../../../theme';

export default function AuthLogo() {
  const { colors } = useAppTheme();

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="heart-pulse"
        size={80}
        color={colors.primary}
      />

      <AppText
        variant="h1"
        style={styles.title}>
        Family Care
      </AppText>

      <AppText
        variant="body"
        color={colors.textSecondary}
        style={styles.subtitle}>
        Care for your loved ones from anywhere.
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',

    marginTop: Spacing.lg,

    marginBottom: Spacing.lg,
  },

  title: {
    marginTop: Spacing.sm,

    marginBottom: Spacing.xs,
  },

  subtitle: {
    textAlign: 'center',

    paddingHorizontal: Spacing.xl,
  },
});