import { Text } from '@/components/text';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  return (
    <SafeAreaView className='flex-1'>
      <ScrollView className='flex-1 bg-background'>
      <View className='p-4'>
        <Text variant='headline' className='text-primary' >Personal Tracker</Text>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}
