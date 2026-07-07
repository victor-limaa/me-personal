import { Text } from '@/components/ui/text';
import { Colors } from '@/constants/colors';
import Lucide from '@react-native-vector-icons/lucide';
import { Pressable } from 'react-native';

export const AddWorkoutSheetCard = ({ onPress }: { onPress: () => void }) => {
  return (
    <Pressable
      className="w-full items-center justify-center gap-4 rounded-md border-2 border-dashed border-outline bg-background-element p-4"
      onPress={onPress}
    >
      <Lucide name="file-plus-2" size={48} color={Colors.dark.primary} />
      <Text variant="title">Adicionar Nova Ficha</Text>
      <Text variant="stats">Crie blocos de treinos independentes</Text>
    </Pressable>
  );
};
