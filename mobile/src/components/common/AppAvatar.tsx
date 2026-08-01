import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppText from '../atoms/AppText';
import { useAppTheme } from '../../hooks/useAppTheme';
import { Radius } from '../../theme';

interface AppAvatarProps {
  name: string;
  size?: number;
}

export default function AppAvatar({
  name,
  size = 56,
}: AppAvatarProps) {
  const { colors } = useAppTheme();

  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <View
      style={[
        styles.avatar,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: colors.primaryLight,
          borderColor: colors.primary,
        },
      ]}>
      <AppText
        variant="body"
        color={colors.primary}>
        {initials}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
});
