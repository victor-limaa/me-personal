import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface TextProps extends RNTextProps {
  variant?: 'label' | 'base' | 'title' | 'headline' | 'stats';
}

export const Text = (props: TextProps) => {
  const { children, className, variant = 'base', ...textProps } = props;

  const variants = {
    label: 'text-base font-normal font-inter text-text-secondary',
    base: 'text-base font-normal font-inter text-text',
    title: 'text-xl font-bold font-inter text-text',
    headline: 'text-2xl font-bold font-inter text-text',
    stats: 'text-xs font-normal font-mono text-text-secondary',
  };

  return (
    <RNText className={twMerge(variants[variant], className)} {...textProps}>
      {children}
    </RNText>
  );
};
