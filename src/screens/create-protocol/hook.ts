import { useState } from 'react';
import { Exercise, WorkoutSheet } from './types';

export const useCreateProtocol = () => {
  const [protocolName, setProtocolName] = useState<string>('');
  const [workoutSheets, setWorkoutSheets] = useState<WorkoutSheet[]>([]);

  const addWorkoutSheet = (name: string) => {
    const newWorkoutSheet: WorkoutSheet = {
      id: Date.now().toString(),
      name,
      exercises: [],
    };
    setWorkoutSheets([...workoutSheets, newWorkoutSheet]);
  };

  const removeWorkoutSheet = (workoutSheetId: string) => {
    setWorkoutSheets((prevSheets) =>
      prevSheets.filter((sheet) => sheet.id !== workoutSheetId),
    );
  };

  const updateWorkoutSheetName = (workoutSheetId: string, newName: string) => {
    setWorkoutSheets((prevSheets) =>
      prevSheets.map((sheet) =>
        sheet.id === workoutSheetId ? { ...sheet, name: newName } : sheet,
      ),
    );
  };

  const addExerciseToWorkoutSheet = (
    workoutSheetId: string,
    exercise: Exercise,
  ) => {
    setWorkoutSheets((prevSheets) =>
      prevSheets.map((sheet) =>
        sheet.id === workoutSheetId
          ? { ...sheet, exercises: [...sheet.exercises, exercise] }
          : sheet,
      ),
    );
  };

  const reorderWorkoutSheetExercises = (
    workoutSheetId: string,
    exercises: Exercise[],
  ) => {
    setWorkoutSheets((prevSheets) =>
      prevSheets.map((sheet) =>
        sheet.id === workoutSheetId ? { ...sheet, exercises } : sheet,
      ),
    );
  };

  return {
    protocolName,
    setProtocolName,
    workoutSheets,
    addWorkoutSheet,
    addExerciseToWorkoutSheet,
    removeWorkoutSheet,
    reorderWorkoutSheetExercises,
    updateWorkoutSheetName,
  };
};
