import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { TextInput } from '@/components/ui/text-input';
import { Colors } from '@/constants/colors';
import { Lucide } from '@react-native-vector-icons/lucide';
import { Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const CreateProtocolScreen = () => {
  return (
    <SafeAreaView className="h-full flex-1 gap-8 bg-background p-4">
      <View>
        <TextInput label="Nome de Protocolo" />
      </View>

      <Pressable className="bg-background-element w-full items-center justify-center gap-4 rounded-md border-2 border-dashed border-outline p-4">
        <Lucide name="file-plus-2" size={48} color={Colors.dark.primary} />
        <Text variant="title">Adicionar Nova Ficha</Text>
        <Text variant="stats">Crie blocos de treinos independentes</Text>
      </Pressable>
      <Button title="Criar Protocolo" variant="glow" />
    </SafeAreaView>
  );
};
