import { Colors } from '@/constants/colors';
import Lucide, { LucideIconName } from '@react-native-vector-icons/lucide';
import { Pressable } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { Text } from './text';

interface ButtonProps {
  title: string;
  leftIcon?: LucideIconName;
  rightIcon?: LucideIconName;
  variant?: 'primary' | 'glow' | 'dashed';
  onPress?: () => void;
  disabled?: boolean;
}

export const Button = ({
  title,
  leftIcon,
  rightIcon,
  variant = 'primary',
  onPress = () => {},
  disabled = false,
}: ButtonProps) => {
  const variantStyles = {
    primary: 'bg-primary text-onPrimary',
    glow: 'bg-surface-tint text-onPrimary shadow-lg shadow-primary border border-solid border-2 border-primary/80 ',
    dashed: 'bg-background-element border border-dashed border-text-secondary',
  };

  const textVariantStyles = {
    primary: 'text-primary',
    glow: 'text-background',
    dashed: 'text-text-secondary',
  };

  const iconColor = {
    primary: Colors.dark.onPrimary,
    glow: Colors.dark.onPrimary,
    dashed: Colors.dark.textSecondary,
  };

  const disabledIconColor = Colors.dark.textDisabled;

  return (
    <Pressable
      className={twMerge(
        variantStyles[variant],
        disabled && 'bg-disabled text-disabled border-disabled shadow-none',
        'flex-row items-center justify-center gap-2 rounded-md p-4',
      )}
      disabled={disabled}
      onPress={onPress}
    >
      {leftIcon && (
        <Lucide
          name={leftIcon}
          size={24}
          color={disabled ? disabledIconColor : iconColor[variant]}
        />
      )}
      <Text
        variant="title"
        className={twMerge(
          textVariantStyles[variant],
          disabled && 'text-text-secondary',
        )}
      >
        {title}
      </Text>
      {rightIcon && (
        <Lucide
          name={rightIcon}
          size={24}
          color={disabled ? disabledIconColor : iconColor[variant]}
        />
      )}
    </Pressable>
  );
};
