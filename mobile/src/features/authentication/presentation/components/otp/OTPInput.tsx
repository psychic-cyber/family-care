import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import OTPBox from './OTPBox';
import { Spacing } from '../../../../../theme';

interface OTPInputProps {
  values: string[];
  onChange: (index: number, value: string) => void;
}

export default function OTPInput({
  values,
  onChange,
}: OTPInputProps) {
  return (
    <View style={styles.container}>
      {values.map((item, index) => (
        <OTPBox
          key={index}
          value={item}
          onChangeText={(text) =>
            onChange(index, text)
          }
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: Spacing.xl,
  },
});