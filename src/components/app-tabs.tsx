import { NativeTabs } from 'expo-router/unstable-native-tabs';

import { Colors } from '@/constants/theme';
import { lucideNativeTabIcons } from '@/components/ui/native-tabs-lucide-icons';

export default function AppTabs() {
  const colors = Colors['dark'];

  return (
    <NativeTabs
      backgroundColor={colors.surface}
      blurEffect="systemUltraThinMaterialDark"
      iconColor={{ default: colors.textSecondary, selected: colors.primary }}
      indicatorColor={colors.backgroundSelected}
      labelStyle={{
        default: {
          color: colors.textSecondary,
          fontFamily: 'Inter',
          fontSize: 12,
          fontWeight: '600',
        },
        selected: {
          color: colors.text,
          fontFamily: 'Inter',
          fontSize: 12,
          fontWeight: '700',
        },
      }}
      rippleColor={colors.backgroundSelected}
      shadowColor={colors.background}
      tintColor={colors.primary}
    >
      <NativeTabs.Trigger name="home">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={
            <NativeTabs.Trigger.VectorIcon
              family={lucideNativeTabIcons}
              name="layout-dashboard"
            />
          }
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
