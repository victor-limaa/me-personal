import { ColorValue, ImageSourcePropType } from 'react-native';

type LucideNativeTabIconName = 'layout-dashboard';

type LucideIconNode = [
  tag: 'circle' | 'line' | 'path' | 'polyline' | 'rect',
  attrs: Record<string, string>,
][];

const lucideIcons: Record<LucideNativeTabIconName, LucideIconNode> = {
  'layout-dashboard': [
    ['rect', { width: '7', height: '9', x: '3', y: '3', rx: '1' }],
    ['rect', { width: '7', height: '5', x: '14', y: '3', rx: '1' }],
    ['rect', { width: '7', height: '9', x: '14', y: '12', rx: '1' }],
    ['rect', { width: '7', height: '5', x: '3', y: '16', rx: '1' }],
  ],
};

const attrsToString = (attrs: Record<string, string>) =>
  Object.entries(attrs)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

const renderIconNode = (node: LucideIconNode) =>
  node.map(([tag, attrs]) => `<${tag} ${attrsToString(attrs)} />`).join('');

const createSvgSource = (
  name: LucideNativeTabIconName,
  size: number,
  color: ColorValue,
) => {
  const svg = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${String(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">`,
    renderIconNode(lucideIcons[name]),
    '</svg>',
  ].join('');

  return {
    uri: `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`,
  };
};

export const lucideNativeTabIcons = {
  getImageSource: async (
    name: LucideNativeTabIconName,
    size: number,
    color: ColorValue,
  ): Promise<ImageSourcePropType | null> => createSvgSource(name, size, color),
};
