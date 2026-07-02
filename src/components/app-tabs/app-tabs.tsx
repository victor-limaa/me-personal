import { useAppTabs } from '@/components/app-tabs/use-app-tabs';
import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function AppTabs() {
  const { colors, tabs } = useAppTabs();

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
      {tabs.map((tab) => (
        <NativeTabs.Trigger key={tab.name} name={tab.name}>
          <NativeTabs.Trigger.Label>{tab.label}</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf={tab.icon.sf} md={tab.icon.md} />
        </NativeTabs.Trigger>
      ))}
    </NativeTabs>
  );
}
