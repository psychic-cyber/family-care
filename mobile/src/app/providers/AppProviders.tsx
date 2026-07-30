import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ThemeProvider } from '../../providers/ThemeProvider';
import AppNavigator from '../../navigation/AppNavigator';

export function AppProviders() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}