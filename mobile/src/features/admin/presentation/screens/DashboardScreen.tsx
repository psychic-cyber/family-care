import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppText from '../../../../components/atoms/AppText';

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <AppText variant="h1">
        Dashboard
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});