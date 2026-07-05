import Lucide, { LucideIconName } from '@react-native-vector-icons/lucide';
import { Pressable } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { Text } from './text';

interface ButtonProps {
  title: string;
  leftIcon?: LucideIconName;
  rightIcon?: LucideIconName;
  variant?: 'primary' | 'glow' | 'dashed';
}

export const Button = ({
  title,
  leftIcon,
  rightIcon,
  variant = 'primary',
}: ButtonProps) => {
  const variantStyles = {
    primary: 'bg-primary text-onPrimary',
    glow: 'bg-surface-tint text-onPrimary shadow-lg shadow-white border border-solid border-2 border-primary/50 ',
    dashed: 'bg-background-element border-2 border-dashed border-outline',
  };

  const textVariantStyles = {
    primary: 'text-on-primary',
    glow: 'text-on-primary/70',
    dashed: 'text-outline',
  };

  return (
    <Pressable
      className={twMerge(
        variantStyles[variant],
        'flex-row items-center justify-center gap-2 rounded-md p-4',
      )}
    >
      {leftIcon && <Lucide name={leftIcon} size={24} />}
      <Text variant="title" className={twMerge(textVariantStyles[variant])}>
        {title}
      </Text>
      {rightIcon && <Lucide name={rightIcon} size={24} />}
    </Pressable>
  );
};
