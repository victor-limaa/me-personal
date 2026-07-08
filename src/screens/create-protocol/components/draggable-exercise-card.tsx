import { Colors } from '@/constants/colors';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  type SharedValue,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { Exercise } from '../types';
import { ExerciseCard } from './exercise-card';
import {
  EXERCISE_CARD_HEIGHT,
  EXERCISE_CARD_OFFSET,
  type ExercisePositions,
  clamp,
  movePosition,
} from './workout-sheet-card.helpers';

interface DraggableExerciseCardProps {
  exercise: Exercise;
  index: number;
  itemsCount: number;
  positions: SharedValue<ExercisePositions>;
  onDragEnd: (fromIndex: number, toIndex: number) => void;
}

export const DraggableExerciseCard = ({
  exercise,
  index,
  itemsCount,
  positions,
  onDragEnd,
}: DraggableExerciseCardProps) => {
  const translateY = useSharedValue(index * EXERCISE_CARD_OFFSET);
  const startY = useSharedValue(0);
  const isDragging = useSharedValue(false);

  const panGesture = Gesture.Pan()
    .activateAfterLongPress(120)
    .onBegin(() => {
      isDragging.value = true;
      startY.value =
        (positions.value[exercise.id] ?? index) * EXERCISE_CARD_OFFSET;
      translateY.value = startY.value;
    })
    .onUpdate((event) => {
      const maxTranslateY = (itemsCount - 1) * EXERCISE_CARD_OFFSET;
      const nextTranslateY = clamp(
        startY.value + event.translationY,
        0,
        maxTranslateY,
      );
      const currentIndex = positions.value[exercise.id] ?? index;
      const nextIndex = clamp(
        Math.round(nextTranslateY / EXERCISE_CARD_OFFSET),
        0,
        itemsCount - 1,
      );

      translateY.value = nextTranslateY;

      if (nextIndex !== currentIndex) {
        // Reanimated SharedValue is intentionally mutated from the gesture worklet.
        // eslint-disable-next-line react-hooks/immutability
        positions.value = movePosition(
          positions.value,
          currentIndex,
          nextIndex,
        );
      }
    })
    .onFinalize(() => {
      const nextIndex = positions.value[exercise.id] ?? index;

      isDragging.value = false;
      translateY.value = withSpring(nextIndex * EXERCISE_CARD_OFFSET);

      if (nextIndex !== index) {
        runOnJS(onDragEnd)(index, nextIndex);
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    const currentIndex = positions.value[exercise.id] ?? index;
    const restingTranslateY = currentIndex * EXERCISE_CARD_OFFSET;

    return {
      height: EXERCISE_CARD_HEIGHT,
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
      zIndex: isDragging.value ? 10 : 0,
      transform: [
        {
          translateY: isDragging.value
            ? translateY.value
            : withSpring(restingTranslateY),
        },
        {
          scale: withSpring(isDragging.value ? 1.03 : 1),
        },
      ],
      shadowColor: Colors.dark.primary,
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: withSpring(isDragging.value ? 0.25 : 0),
      shadowRadius: 12,
      elevation: isDragging.value ? 8 : 0,
    };
  });

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View style={animatedStyle}>
        <ExerciseCard exercise={exercise} index={index} />
      </Animated.View>
    </GestureDetector>
  );
};
