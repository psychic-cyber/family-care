import { Platform } from 'react-native';

export const Elevation = {
  small: Platform.select({
    android: 2,
    ios: 2,
  }),

  medium: Platform.select({
    android: 4,
    ios: 4,
  }),

  large: Platform.select({
    android: 8,
    ios: 8,
  }),
};