import React from 'react';
import { StyleSheet } from 'react-native';

import AppText from '../../../../../components/atoms/AppText';
import { Spacing } from '../../../../../theme';

interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({
  title,
}: SectionTitleProps) {
  return (
    <AppText
      variant="h2"
      style={styles.title}>
      {title}
    </AppText>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: Spacing.md,
  },
});