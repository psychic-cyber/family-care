import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useAppTheme } from '../../hooks/useAppTheme';
import { Spacing } from '../../theme';

interface Props {
  icon: string;
  onPress: () => void;
}

export default function AppFAB({
  icon,
  onPress,
}: Props) {
  const { colors } = useAppTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={[
        styles.fab,
        {
          backgroundColor: colors.primary,
        },
      ]}>
      <MaterialCommunityIcons
        name={icon}
        size={28}
        color={colors.white}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: Spacing.lg,
    bottom: Spacing.lg,

    width: 60,
    height: 60,
    borderRadius: 30,

    justifyContent: 'center',
    alignItems: 'center',

    elevation: 6,
  },
});