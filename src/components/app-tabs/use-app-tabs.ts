import { APP_TABS } from '@/components/app-tabs/app-tabs.constants';
import { Colors } from '@/constants/theme';

export function useAppTabs() {
  return {
    colors: Colors.dark,
    tabs: APP_TABS,
  };
}
