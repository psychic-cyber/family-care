import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AppText from '../atoms/AppText';
import { useAppTheme } from '../../hooks/useAppTheme';
import { Spacing } from '../../theme';

interface Props {
  icon: string;
  title: string;
  subtitle?: string;
  onPress?: () => void;
}

export default function AppListItem({
  icon,
  title,
  subtitle,
  onPress,
}: Props) {
  const { colors } = useAppTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}>
      <MaterialCommunityIcons
        name={icon}
        size={28}
        color={colors.primary}
      />

      <View style={styles.content}>
        <AppText variant="body">
          {title}
        </AppText>

        {subtitle ? (
          <AppText
            variant="caption"
            color={colors.textSecondary}>
            {subtitle}
          </AppText>
        ) : null}
      </View>

      <MaterialCommunityIcons
        name="chevron-right"
        size={24}
        color={colors.textSecondary}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.md,
  },

  content: {
    flex: 1,
    marginLeft: Spacing.md,
  },
});