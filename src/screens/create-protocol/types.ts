export interface Exercise {
  id: string;
  name: string;
  muscleGroup: string;
  series: number;
  reps: number;
  delay?: number;
  weight?: number;
  observations?: string;
}

export interface WorkoutSheet {
  id: string;
  name: string;
  exercises: Exercise[];
}
