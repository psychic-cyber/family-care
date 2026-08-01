import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AppText from '../atoms/AppText';
import { useAppTheme } from '../../hooks/useAppTheme';
import { Radius, Spacing } from '../../theme';

interface Props {
  count?: number;
  onPress: () => void;
}

export default function AppNotificationBell({
  count = 0,
  onPress,
}: Props) {
  const { colors } = useAppTheme();

  return (
    <Pressable
      onPress={onPress}
      style={styles.container}>
      <MaterialCommunityIcons
        name="bell-outline"
        size={24}
        color={colors.textPrimary}
      />

      {count > 0 && (
        <View
          style={[
            styles.badge,
            {
              backgroundColor: colors.error,
            },
          ]}>
          <AppText
            variant="caption"
            color={colors.white}>
            {count}
          </AppText>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Spacing.sm,
  },

  badge: {
    position: 'absolute',
    top: 2,
    right: 2,

    minWidth: 18,
    height: 18,

    borderRadius: Radius.round,

    justifyContent: 'center',
    alignItems: 'center',
  },
});
