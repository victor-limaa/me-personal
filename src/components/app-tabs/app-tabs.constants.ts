import type { AndroidSymbol, SFSymbol } from 'expo-symbols';

interface AppTab {
  icon: {
    sf: SFSymbol;
    md: AndroidSymbol;
  };
  label: string;
  name: string;
}

export const APP_TABS: readonly AppTab[] = [
  {
    icon: { sf: 'rectangle.grid.2x2', md: 'dashboard' },
    label: 'Home',
    name: 'home',
  },
  {
    icon: { sf: 'plus.circle', md: 'add' },
    label: 'Create',
    name: 'create',
  },
  {
    icon: { sf: 'rectangle.grid.2x2', md: 'history' },
    label: 'History',
    name: 'history',
  },
] as const;
