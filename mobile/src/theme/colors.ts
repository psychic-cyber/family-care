export const Colors = {
  primary: '#10B981',
  primaryDark: '#059669',
  primaryLight: '#D1FAE5',

  secondary: '#0EA5E9',
  secondaryDark: '#0284C7',
  secondaryLight: '#E0F2FE',

  accent: '#F97316',

  success: '#22C55E',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',

  background: '#F8FAFC',
  surface: '#FFFFFF',

  border: '#E2E8F0',
  divider: '#CBD5E1',

  textPrimary: '#0F172A',
  textSecondary: '#64748B',
  textDisabled: '#94A3B8',

  white: '#FFFFFF',
  black: '#000000',

  transparent: 'transparent',
} as const;

export type AppColors = typeof Colors;