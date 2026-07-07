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
import { SafeAreaView } from 'react-native-safe-area-context';
import { twMerge } from 'tailwind-merge';
import { Text } from './text';

interface FullscreenModalProps {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  animationType?: RNModalProps['animationType'];
  showCloseButton?: boolean;
  containerClassName?: string;
  headerClassName?: string;
  contentClassName?: string;
}

export const FullscreenModal = ({
  visible,
  onClose,
  children,
  title,
  animationType = 'slide',
  showCloseButton = true,
  containerClassName,
  headerClassName,
  contentClassName,
}: FullscreenModalProps) => {
  return (
    <RNModal
      animationType={animationType}
      visible={visible}
      presentationStyle="fullScreen"
      statusBarTranslucent
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        className="flex-1"
      >
        <SafeAreaView
          className={twMerge('flex-1 bg-background', containerClassName)}
        >
          {(title || showCloseButton) && (
            <View
              className={twMerge(
                'min-h-14 flex-row items-center gap-3 border-b border-outline/40 px-4',
                headerClassName,
              )}
            >
              <View className="flex-1">
                {title && <Text variant="title">{title}</Text>}
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

          <View className={twMerge('flex-1 p-4', contentClassName)}>
            {children}
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </RNModal>
  );
};
