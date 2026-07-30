import React from 'react';
import {
  Text,
  TextProps,
  StyleSheet,
  StyleProp,
  TextStyle,
} from 'react-native';

import { Typography } from '../../theme';
import { useAppTheme } from '../../hooks/useAppTheme';

type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'title'
  | 'bodyLarge'
  | 'body'
  | 'bodySmall'
  | 'caption'
  | 'button';

interface AppTextProps extends TextProps {
  variant?: Variant;
  color?: string;
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

export default function AppText({
  variant = 'body',
  color,
  style,
  children,
  ...rest
}: AppTextProps) {
  const { colors } = useAppTheme();

  return (
    <Text
      {...rest}
      style={[
        styles.base,
        Typography[variant],
        {
          color: color ?? colors.textPrimary,
        },
        style,
      ]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  base: {
    includeFontPadding: false,
  },
});