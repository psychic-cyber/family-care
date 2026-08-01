import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import { useAppTheme } from '../../../../hooks/useAppTheme';
import { Radius, Spacing } from '../../../../theme';

import AppText from '../../../../components/atoms/AppText';
import GreetingCard from '../components/dashboard/GreetingCard';
import StatCard from '../components/dashboard/StatCard';
import SectionTitle from '../components/dashboard/SectionTitle';
import QuickActionCard from '../components/dashboard/QuickActionCard';

export default function DashboardScreen() {
  const { colors } = useAppTheme();

  return (
    <ScrollView
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
        },
      ]}
      contentContainerStyle={styles.content}>

      <GreetingCard
        name="Zaeem Ahmad"
        role="Administrator"
      />

      <SectionTitle title="Overview" />

      <View style={styles.row}>
        <StatCard
          title="Patients"
          value={0}
          icon="account-heart"
          color="#10B981"
        />

        <View style={styles.spacing} />

        <StatCard
          title="Caregivers"
          value={0}
          icon="doctor"
          color="#3B82F6"
        />
      </View>

      <View style={styles.row}>
        <StatCard
          title="Alerts"
          value={0}
          icon="bell-alert"
          color="#EF4444"
        />

        <View style={styles.spacing} />

        <StatCard
          title="Online"
          value={0}
          icon="wifi"
          color="#F59E0B"
        />
      </View>

      <SectionTitle title="Quick Actions" />

      <QuickActionCard
        title="Add Patient"
        onPress={() => {}}
      />

      <QuickActionCard
        title="Add Caregiver"
        onPress={() => {}}
      />

      <QuickActionCard
        title="View Alerts"
        onPress={() => {}}
      />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    padding: Spacing.lg,
  },

  row: {
    flexDirection: 'row',
    marginBottom: Spacing.md,
  },

  spacing: {
    width: Spacing.md,
  },
});