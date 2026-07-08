import { Text } from '@/components/ui/text';
import { Colors } from '@/constants/colors';
import Lucide from '@react-native-vector-icons/lucide';
import { Pressable, View } from 'react-native';
import { Exercise } from '../types';

interface ExerciseCardProps {
  exercise: Exercise;
  index?: number;
  onPress?: () => void;
}

export const ExerciseCard = ({
  exercise,
  index,
  onPress = () => {},
}: ExerciseCardProps) => {
  const details = `${exercise.series} sets x ${exercise.reps} reps`;

  return (
    <Pressable
      className="min-h-20 flex-row items-center justify-between rounded-md border border-solid border-surface bg-background-selected px-4 py-3"
      onPress={onPress}
    >
      <View className="flex-1 flex-row items-center pr-4">
        {typeof index === 'number' && (
          <View className="mr-3 h-8 w-8 items-center justify-center rounded-md border border-solid border-surface bg-background-element">
            <Text
              variant="title"
              className="font-mono text-sm font-bold text-surface-tint"
            >
              {index + 1}
            </Text>
          </View>
        )}
        <View className="flex-1">
          <Text
            variant="title"
            className="text-lg font-semibold leading-6 text-text-secondary"
            numberOfLines={1}
          >
            {exercise.name}
          </Text>
          <Text
            variant="title"
            className="font-mono text-lg font-bold leading-6 text-surface-tint"
            numberOfLines={1}
          >
            {details}
          </Text>
        </View>
      </View>
      <Lucide name="menu" size={22} color={Colors.dark.outline} />
    </Pressable>
  );
};
