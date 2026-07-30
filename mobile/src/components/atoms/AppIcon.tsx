import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useAppTheme } from '../../hooks/useAppTheme';

interface AppIconProps {
  name: string;
  size?: number;
  color?: string;
}

export default function AppIcon({
  name,
  size = 24,
  color,
}: AppIconProps) {
  const { colors } = useAppTheme();

  return (
    <MaterialCommunityIcons
      name={name}
      size={size}
      color={color ?? colors.textPrimary}
    />
  );
}