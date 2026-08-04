import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import AppText from '../../../../../components/atoms/AppText';
import { useAppTheme } from '../../../../../hooks/useAppTheme';
import { Radius } from '../../../../../theme';

interface AuthSecondaryButtonProps {
  title: string;
  onPress: () => void;
}

export default function AuthSecondaryButton({
  title,
  onPress,
}: AuthSecondaryButtonProps) {
  const { colors } = useAppTheme();

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        {
          borderColor: colors.primary,
        },
      ]}>
      <AppText
        variant="body"
        color={colors.primary}>
        {title}
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 52,
    borderWidth: 1,
    borderRadius: Radius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
});