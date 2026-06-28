import { THEMES, ThemesType } from '@/constants/theme';
import { useColorScheme } from 'nativewind';
import { ReactNode } from 'react';
import { View } from 'react-native';

export interface ThemeProviderProps {
  children: ReactNode;
  theme?: ThemesType;
}

export function ThemeProvider({ theme, children }: ThemeProviderProps) {
  const { colorScheme } = useColorScheme();
  const finalTheme = (theme ?? 'default') as keyof typeof THEMES;
  const currentTheme = THEMES[finalTheme]['dark'];

  return (
    <View className="flex-1" style={currentTheme}>
      {children}
    </View>
  );
}
