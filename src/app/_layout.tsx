import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import "../global.css";

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import { Providers } from '@/providers';

export default function RootLayout() {
  const colorScheme = useColorScheme();
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
