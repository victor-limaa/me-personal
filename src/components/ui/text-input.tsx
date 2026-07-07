import { Colors } from '@/constants/colors';
import { forwardRef } from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  View,
} from 'react-native';
import { twMerge } from 'tailwind-merge';
import { Text } from './text';

export interface TextInputProps extends RNTextInputProps {
  label?: string;
  className?: string;
  containerClassName?: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'unstyled';
  labelClassName?: string;
}

export const TextInput = forwardRef<RNTextInput, TextInputProps>(
  (
    {
      label,
      className,
      containerClassName,
      variant = 'primary',
      labelClassName,
      ...props
    },
    ref,
  ) => {
    const variantStyles = {
      primary:
        'border border-b border-solid border-text-secondary text-primary rounded-md',
      secondary: 'bg-background-selected rounded-t-2xl pl-4 text-primary',
      tertiary: 'border-b border-outline/20 bg-background-element text-primary',
      unstyled: 'text-primary',
    };
    return (
      <View className={twMerge('gap-2', containerClassName)}>
        {label && (
          <Text
            variant="label"
            className={twMerge('text-outline', labelClassName)}
          >
            {label}
          </Text>
        )}
        <RNTextInput
          className={twMerge(
            ' align-center text-md h-16 p-2',
            variantStyles[variant],
            className,
          )}
          placeholderTextColor={Colors.dark.surface}
          ref={ref}
          {...props}
        />
      </View>
    );
  },
);

TextInput.displayName = 'TextInput';
