import { Lucide } from '@react-native-vector-icons/lucide';
import { ReactNode } from 'react';
import {
  KeyboardAvoidingView,
  Modal as RNModal,
  ModalProps as RNModalProps,
  Platform,
  Pressable,
  View,
} from 'react-native';
import { twMerge } from 'tailwind-merge';
import { Text } from './text';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  description?: string;
  animationType?: RNModalProps['animationType'];
  closeOnBackdropPress?: boolean;
  showCloseButton?: boolean;
  backdropClassName?: string;
  containerClassName?: string;
  contentClassName?: string;
}

export const Modal = ({
  visible,
  onClose,
  children,
  title,
  description,
  animationType = 'fade',
  closeOnBackdropPress = true,
  showCloseButton = true,
  backdropClassName,
  containerClassName,
  contentClassName,
}: ModalProps) => {
  const handleBackdropPress = () => {
    if (closeOnBackdropPress) {
      onClose();
    }
  };

  return (
    <RNModal
      animationType={animationType}
      transparent
      visible={visible}
      statusBarTranslucent
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        className="flex-1"
      >
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Fechar modal"
          className={twMerge(
            'flex-1 items-center justify-center bg-black/70 px-4 py-6',
            backdropClassName,
          )}
          onPress={handleBackdropPress}
        >
          <Pressable
            accessibilityRole="none"
            className={twMerge(
              'max-h-full w-full max-w-[560px] rounded-md border border-outline/40 bg-background-element p-4 shadow-xl shadow-black',
              containerClassName,
            )}
            onPress={(event) => event.stopPropagation()}
          >
            {(title || description || showCloseButton) && (
              <View className="mb-4 flex-row items-start gap-3">
                <View className="flex-1 gap-1">
                  {title && <Text variant="title">{title}</Text>}
                  {description && (
                    <Text variant="label" className="text-text-secondary">
                      {description}
                    </Text>
                  )}
                </View>

                {showCloseButton && (
                  <Pressable
                    accessibilityRole="button"
                    accessibilityLabel="Fechar"
                    className="h-10 w-10 items-center justify-center rounded-md bg-background-selected"
                    hitSlop={8}
                    onPress={onClose}
                  >
                    <Lucide name="x" size={20} />
                  </Pressable>
                )}
              </View>
            )}

            <View className={twMerge('gap-4', contentClassName)}>
              {children}
            </View>
          </Pressable>
        </Pressable>
      </KeyboardAvoidingView>
    </RNModal>
  );
};
