import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface TextProps extends RNTextProps {
  variant?: 'label' | 'base' | 'title' | 'headline' | 'stats';
}

export const Text = (props: TextProps) => {
  const { children, className, variant = 'base', ...textProps } = props;

  const variants = {
    label: 'text-xs font-bold font-inter',
    base: 'text-base font-normal font-inter',
    title: 'text-xl font-bold font-inter',
    headline: 'text-2xl font-bold font-inter',
    stats: 'text-xs font-normal font-mono',
  };

  return (
    <RNText className={twMerge(variants[variant], className)} {...textProps}>
      {children}
    </RNText>
  );
};
