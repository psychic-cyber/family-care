import React from 'react';
import {
  Pressable,
  StyleSheet,
  View,
} from 'react-native';

import AppText from '../../../../../components/atoms/AppText';
import { useAppTheme } from '../../../../../hooks/useAppTheme';
import { Spacing } from '../../../../../theme';

interface AuthFooterProps {
  title: string;
  action: string;
  onPress: () => void;
}

export default function AuthFooter({
  title,
  action,
  onPress,
}: AuthFooterProps) {
  const { colors } = useAppTheme();

  return (
    <View style={styles.container}>
      <AppText
        variant="body"
        color={colors.textSecondary}>
        {title}
      </AppText>

      <Pressable onPress={onPress}>
        {({ pressed }) => (
          <AppText
            variant="body"
            color={colors.primary}
            style={[
              styles.action,
              {
                opacity: pressed ? 0.7 : 1,
              },
            ]}>
            {action}
          </AppText>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Spacing.lg,
    marginBottom: Spacing.md,
  },

  action: {
    marginLeft: Spacing.xs,
    fontWeight: '600',
  },
});