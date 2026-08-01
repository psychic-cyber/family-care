import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import DashboardScreen from '../screens/DashboardScreen';
import PatientsScreen from '../screens/PatientsScreen';
import CaregiversScreen from '../screens/CaregiversScreen';
import AlertsScreen from '../screens/AlertsScreen';
import ProfileScreen from '../screens/ProfileScreen';

export type AdminTabParamList = {
  Dashboard: undefined;
  Patients: undefined;
  Caregivers: undefined;
  Alerts: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<AdminTabParamList>();

export default function AdminTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarActiveTintColor: '#10B981',
        tabBarInactiveTintColor: '#94A3B8',

        tabBarStyle: {
          height: 65,
          paddingBottom: 8,
          paddingTop: 8,
        },

        tabBarIcon: ({ color, size }) => {
          let iconName: string;

          switch (route.name) {
            case 'Dashboard':
              iconName = 'view-dashboard';
              break;

            case 'Patients':
              iconName = 'account-heart';
              break;

            case 'Caregivers':
              iconName = 'doctor';
              break;

            case 'Alerts':
              iconName = 'bell-alert';
              break;

            case 'Profile':
              iconName = 'account-circle';
              break;

            default:
              iconName = 'circle';
          }

          return (
            <MaterialCommunityIcons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
      />

      <Tab.Screen
        name="Patients"
        component={PatientsScreen}
      />

      <Tab.Screen
        name="Caregivers"
        component={CaregiversScreen}
      />

      <Tab.Screen
        name="Alerts"
        component={AlertsScreen}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}