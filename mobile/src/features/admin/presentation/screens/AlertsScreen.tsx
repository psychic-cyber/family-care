import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppText from '../../../../components/atoms/AppText';

export default function AlertsScreen() {
  return (
    <View style={styles.container}>
      <AppText variant="h1">
        Alerts
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