import { TextInput } from '@/components/ui/text-input';
import { Colors } from '@/constants/colors';
import Lucide from '@react-native-vector-icons/lucide';
import { Pressable, View } from 'react-native';
import { Exercise } from '../types';
import { AddExerciseModal } from './add-exercise-modal';
import { ExerciseCard } from './exercise-card';

interface WorkoutSheetCardProps {
  name?: string;
  onDelete?: () => void;
  onNameChange?: (newName: string) => void;
  exercises?: Exercise[];
  onAddExercise?: (exercise: Exercise) => void;
}

export const WorkoutSheetCard = ({
  name = '',
  onDelete = () => {},
  onNameChange = (newName: string) => {},
  exercises = [],
  onAddExercise = () => {},
}: WorkoutSheetCardProps) => {
  return (
    <View className="w-full gap-4 rounded-md border border-solid border-surface bg-background-element p-4">
      <View className="w-full flex-row items-center">
        <View className="rounded-2 h-1/2 w-2 rounded bg-primary" />
        <TextInput
          containerClassName="ml-2 mr-3 flex-1"
          variant="tertiary"
          value={name}
          onChangeText={onNameChange}
          placeholder="Nome da Ficha"
          placeholderTextColor={Colors.dark.textSecondary}
        />
        <Pressable onPress={onDelete}>
          <Lucide name="trash-2" size={24} color={Colors.dark.textSecondary} />
        </Pressable>
      </View>
      {exercises.map((exercise) => (
        <ExerciseCard key={exercise.id} exercise={exercise} />
      ))}
      <AddExerciseModal onAddExercise={onAddExercise} />
    </View>
  );
};
