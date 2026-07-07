import { Colors } from '@/constants/colors';
import Lucide, { LucideIconName } from '@react-native-vector-icons/lucide';
import { useRef } from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  View,
  ViewProps,
} from 'react-native';
import { twMerge } from 'tailwind-merge';
import { TextInput, TextInputProps } from './text-input';

interface CardInputProps extends Omit<
  TextInputProps,
  'variant' | 'containerClassName'
> {
  icon: LucideIconName;
  containerClassName?: ViewProps['className'];
}

export const CardInput = ({
  icon,
  containerClassName,
  className,
  ...inputProps
}: CardInputProps) => {
  const inputRef = useRef<RNTextInput>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <Pressable
      className={twMerge(
        'flex-1 flex-row items-end justify-between rounded-xl border border-surface bg-background-element p-4',
        containerClassName,
      )}
      onPress={focusInput}
    >
      <TextInput
        ref={inputRef}
        variant="unstyled"
        containerClassName="flex-1"
        className={twMerge('p-0 text-6xl', className)}
        keyboardType="number-pad"
        {...inputProps}
      />
      <View className="mb-2 ml-2">
        <Lucide name={icon} size={24} color={Colors.dark.textSecondary} />
      </View>
    </Pressable>
  );
};
