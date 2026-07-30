import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import {
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import AppText from '../../../../components/atoms/AppText';
import { useAppTheme } from '../../../../hooks/useAppTheme';
import { Spacing } from '../../../../theme';
import { AuthStackParamList } from '../navigation/AuthNavigator';

type Props = NativeStackScreenProps<
  AuthStackParamList,
  'Splash'
>;

export default function SplashScreen({
  navigation,
}: Props) {
  const { colors } = useAppTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
        },
      ]}>
      <AppText variant="h1">
        Family Care
      </AppText>

      <AppText
        variant="body"
        color={colors.textSecondary}
        style={styles.subtitle}>
        Caring for your loved ones
      </AppText>

      <ActivityIndicator
        size="large"
        color={colors.primary}
        style={styles.loader}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.lg,
  },

  subtitle: {
    marginTop: Spacing.sm,
  },

  loader: {
    marginTop: Spacing.xxl,
  },
});