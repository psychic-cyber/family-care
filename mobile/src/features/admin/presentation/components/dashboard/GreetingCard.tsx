import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppText from '../../../../../components/atoms/AppText';
import AppAvatar from '../../../../../components/common/AppAvatar';
import AppNotificationBell from '../../../../../components/common/AppNotificationBell';

import { useAppTheme } from '../../../../../hooks/useAppTheme';
import { Radius, Spacing } from '../../../../../theme';

interface GreetingCardProps {
  name: string;
  role: string;
}

export default function GreetingCard({
  name,
  role,
}: GreetingCardProps) {
  const { colors } = useAppTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.surface,
          borderColor: colors.border,
        },
      ]}>

      <View style={styles.left}>
        <AppAvatar
          name={name}
          size={58}
        />

        <View style={styles.info}>
          <AppText
            variant="body"
            color={colors.textSecondary}>
            Good Evening 👋
          </AppText>

          <AppText variant="h2">
            {name}
          </AppText>

          <AppText
            variant="body"
            color={colors.primary}>
            {role}
          </AppText>
        </View>
      </View>

      <AppNotificationBell
        count={3}
        onPress={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: Spacing.lg,
    marginBottom: Spacing.xl,

    borderWidth: 1,
    borderRadius: Radius.xl,
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  info: {
    marginLeft: Spacing.md,
  },
});