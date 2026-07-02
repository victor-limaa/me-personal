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
] as const;
