import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  return (
    <View className="flex-1 flex-row justify-center">
      <SafeAreaView className="bg-warning-500">
        <View className="flex-1 bg-primary">
          <Text>Home Screen</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     paddingHorizontal: Spacing.two,
//     alignItems: 'center',
//     gap: Spacing.three,
//     paddingBottom: BottomTabInset + Spacing.three,
//     paddingTop: Spacing.three,
//     maxWidth: MaxContentWidth,
//   },
// });
