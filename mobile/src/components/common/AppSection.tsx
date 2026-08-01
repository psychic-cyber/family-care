import React, { ReactNode } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import AppText from '../atoms/AppText';
import { Spacing } from '../../theme';

interface Props {
  title: string;
  children: ReactNode;
}

export default function AppSection({
  title,
  children,
}: Props) {
  return (
    <View style={styles.container}>
      <AppText
        variant="h2"
        style={styles.title}>
        {title}
      </AppText>

      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.xxl,
  },

  title: {
    marginBottom: Spacing.md,
  },
});