import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from '../../navigation/RootNavigator';

export function AppProviders() {
  return (
    <SafeAreaProvider>
      <RootNavigator />
    </SafeAreaProvider>
  );
}