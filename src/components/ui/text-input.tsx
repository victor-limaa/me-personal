import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  View,
} from 'react-native';
import { Text } from './text';

interface TextInputProps extends RNTextInputProps {
  label?: string;
}

export const TextInput = ({ label }: TextInputProps) => {
  return (
    <View className="gap-2">
      {label && (
        <Text variant="label" className="text-text-secondary">
          {label}
        </Text>
      )}
      <RNTextInput className=" align-center text-md h-16 rounded-md border border-gray-300 p-2 text-primary" />
    </View>
  );
};
