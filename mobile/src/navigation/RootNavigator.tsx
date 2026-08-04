import React from 'react';

import AuthNavigator from '../features/authentication/presentation/navigation/AuthNavigator';
// import AdminNavigator from '../features/admin/presentation/navigation/AdminNavigator';

export default function RootNavigator() {
  return <AuthNavigator />;
}