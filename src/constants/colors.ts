export const Colors = {
  light: {
    text: '#09090B',
    background: '#e5e1e4',
    textSecondary: '#27272A',
    primary: '#CCFF00',
    secondary: '#007AFF',
    tertiary: '#27272A',
    neutral: '#09090B',
    outline: '#8e9379',
    outlineVariant: "#444933",
    surfaceTint: '#abd600',
    onPrimary: '#283500',
    onSecondary: '#002e69',
    onTertiary: '#303033',
    error: '#ffb4ab',
    onError: '#690005',
    errorContainer: '#93000a',
    surface: "#353437"
  },
  dark: {
    text: '#e5e1e4',
    background: '#131315',
    textSecondary: '#C8C6C9',
    primary: '#CCFF00',
    secondary: '#007AFF',
    tertiary: '#27272A',
    neutral: '#09090B',
    outline: '#8e9379',
    outlineVariant: "#444933",
    surfaceTint: '#abd600',
    onPrimary: '#283500',
    onSecondary: '#002e69',
    onTertiary: '#303033',
    error: '#ffb4ab',
    onError: '#690005',
    errorContainer: '#93000a',
    surface: "#353437"
  },
} 

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;