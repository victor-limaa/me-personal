import { Exercise } from '../types';

export const EXERCISE_CARD_HEIGHT = 80;
export const EXERCISE_CARD_GAP = 2;
export const EXERCISE_CARD_OFFSET = EXERCISE_CARD_HEIGHT + EXERCISE_CARD_GAP;

export type ExercisePositions = Record<string, number>;

export const clamp = (value: number, min: number, max: number) => {
  'worklet';

  return Math.min(Math.max(value, min), max);
};

export const movePosition = (
  positions: ExercisePositions,
  fromIndex: number,
  toIndex: number,
) => {
  'worklet';

  const nextPositions = { ...positions };

  Object.keys(nextPositions).forEach((exerciseId) => {
    const currentIndex = nextPositions[exerciseId];

    if (currentIndex === fromIndex) {
      nextPositions[exerciseId] = toIndex;
      return;
    }

    if (
      fromIndex < toIndex &&
      currentIndex > fromIndex &&
      currentIndex <= toIndex
    ) {
      nextPositions[exerciseId] = currentIndex - 1;
      return;
    }

    if (
      fromIndex > toIndex &&
      currentIndex >= toIndex &&
      currentIndex < fromIndex
    ) {
      nextPositions[exerciseId] = currentIndex + 1;
    }
  });

  return nextPositions;
};

export const getExercisePositions = (exercises: Exercise[]) =>
  exercises.reduce<ExercisePositions>((positions, exercise, index) => {
    positions[exercise.id] = index;
    return positions;
  }, {});

export const reorderExercises = (
  exercises: Exercise[],
  fromIndex: number,
  toIndex: number,
) => {
  const nextExercises = [...exercises];
  const [movedExercise] = nextExercises.splice(fromIndex, 1);

  nextExercises.splice(toIndex, 0, movedExercise);

  return nextExercises;
};
