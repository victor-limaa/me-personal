import { vars } from 'nativewind';
import { Colors } from './colors';

const hexToRgbChannels = (hex: string) => {
  if (hex === '#00000000' || hex === 'transparent') return '0 0 0';

  const cleanHex = hex.replace('#', '');
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);

  return `${r} ${g} ${b}`;
};

const mapThemeToVars = (theme: Record<string, string>) => {
  const cssVars: Record<string, string> = {};

  for (const [key, value] of Object.entries(theme)) {
    const kebabKey = key
      .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
      .toLowerCase();
    cssVars[`--color-${kebabKey}`] = hexToRgbChannels(value);
  }

  return vars(cssVars);
};

const THEMES = {
  default: {
    light: mapThemeToVars(Colors.light),
    dark: mapThemeToVars(Colors.dark),
  },
};

type ThemeColorKeys = keyof typeof Colors.light;
type ThemeMode = 'light' | 'dark';
type ThemesType = keyof typeof THEMES;

export { THEMES, type ThemeColorKeys, type ThemeMode, type ThemesType };
