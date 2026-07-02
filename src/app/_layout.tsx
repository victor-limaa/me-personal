import { StatusBar } from 'expo-status-bar';
import '../global.css';

import AppTabs from '@/components/app-tabs/app-tabs';
import { Providers } from '@/providers';

export default function RootLayout() {
  return (
    <Providers>
      <StatusBar style="light" />
      <AppTabs />
    </Providers>
  );
}
