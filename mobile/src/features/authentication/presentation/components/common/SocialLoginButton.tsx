import React from 'react';
import {
  Pressable,
  StyleSheet,
  View,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AppText from '../../../../../components/atoms/AppText';
import { useAppTheme } from '../../../../../hooks/useAppTheme';
import { Radius, Spacing } from '../../../../../theme';

interface SocialLoginButtonProps {
  title: string;
  icon: string;
  onPress: () =>void;
}

export default function SocialLoginButton({
  title,
  icon,
  onPress,
}: SocialLoginButtonProps) {
  const { colors } = useAppTheme();

  return (
    <Pressable
    android_ripple={{
        color: 'rgba(16,185,129,0.08)',
        borderless: false,
    }}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: pressed
            ? colors.primaryLight
            : colors.surface,

          borderColor: pressed
            ? colors.primary
            : colors.border,

          borderWidth: 1.2,

          opacity: pressed ? 0.95 : 1,

          transform: [
            {
              scale: pressed ? 0.985 : 1,
            },
          ],
        },
      ]}>
      <MaterialCommunityIcons
        name={icon}
        size={22}
        color={colors.primary}
      />

      <View style={styles.spacing} />

      <AppText
        variant="body"
        style={styles.title}>
        {title}
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 56,
    borderWidth: 1,
    borderRadius: Radius.xl,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Spacing.sm,
  },

  spacing: {
    width: 10,
  },

  title: {
    fontWeight: '500',
  },
});