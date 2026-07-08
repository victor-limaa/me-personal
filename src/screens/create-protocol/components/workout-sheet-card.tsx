import { TextInput } from '@/components/ui/text-input';
import { Colors } from '@/constants/colors';
import Lucide from '@react-native-vector-icons/lucide';
import { useEffect } from 'react';
import { Pressable, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { Exercise } from '../types';
import { AddExerciseModal } from './add-exercise-modal';
import { DraggableExerciseCard } from './draggable-exercise-card';
import {
  EXERCISE_CARD_GAP,
  EXERCISE_CARD_HEIGHT,
  getExercisePositions,
  reorderExercises,
} from './workout-sheet-card.helpers';

interface WorkoutSheetCardProps {
  name?: string;
  onDelete?: () => void;
  onNameChange?: (newName: string) => void;
  exercises?: Exercise[];
  onAddExercise?: (exercise: Exercise) => void;
  onReorderExercises?: (exercises: Exercise[]) => void;
}

export const WorkoutSheetCard = ({
  name = '',
  onDelete = () => {},
  onNameChange = (newName: string) => {},
  exercises = [],
  onAddExercise = () => {},
  onReorderExercises = () => {},
}: WorkoutSheetCardProps) => {
  const positions = useSharedValue(getExercisePositions(exercises));
  const exerciseListHeight =
    exercises.length > 0
      ? exercises.length * EXERCISE_CARD_HEIGHT +
        (exercises.length - 1) * EXERCISE_CARD_GAP
      : 0;

  const handleDragEnd = (fromIndex: number, toIndex: number) => {
    onReorderExercises(reorderExercises(exercises, fromIndex, toIndex));
  };

  useEffect(() => {
    positions.value = getExercisePositions(exercises);
  }, [exercises, positions]);

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
      {exercises.length > 0 && (
        <View style={{ height: exerciseListHeight }}>
          {exercises.map((exercise, index) => (
            <DraggableExerciseCard
              key={exercise.id}
              exercise={exercise}
              index={index}
              itemsCount={exercises.length}
              positions={positions}
              onDragEnd={handleDragEnd}
            />
          ))}
        </View>
      )}
      <AddExerciseModal onAddExercise={onAddExercise} />
    </View>
  );
};
