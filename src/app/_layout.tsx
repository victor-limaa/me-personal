import { Stack } from 'expo-router';
import '../global.css';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import { Providers } from '@/providers';

export default function RootLayout() {
  return (
    <Providers>
      <AnimatedSplashOverlay />
      {/* <AppTabs /> */}
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" />
      </Stack>
    </Providers>
  );
}
