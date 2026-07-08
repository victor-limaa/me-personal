import { Button } from '@/components/ui/button';
import { TextInput } from '@/components/ui/text-input';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AddWorkoutSheetCard } from './components/add-workout-sheet-card';
import { WorkoutSheetCard } from './components/workout-sheet-card';
import { useCreateProtocol } from './hook';

export const CreateProtocolScreen = () => {
  const {
    addWorkoutSheet,
    addExerciseToWorkoutSheet,
    removeWorkoutSheet,
    reorderWorkoutSheetExercises,
    protocolName,
    setProtocolName,
    updateWorkoutSheetName,
    workoutSheets,
  } = useCreateProtocol();
  const canCreateProtocol =
    !!protocolName.trim() &&
    workoutSheets.some((sheet) => sheet.exercises.length > 0);

  return (
    <SafeAreaView className="h-full flex-1 bg-background p-4">
      <FlatList
        data={workoutSheets}
        renderItem={({ item }) => (
          <WorkoutSheetCard
            name={item.name}
            exercises={item.exercises}
            onDelete={() => removeWorkoutSheet(item.id)}
            onNameChange={(newName) => updateWorkoutSheetName(item.id, newName)}
            onAddExercise={(exercise) =>
              addExerciseToWorkoutSheet(item.id, exercise)
            }
            onReorderExercises={(exercises) =>
              reorderWorkoutSheetExercises(item.id, exercises)
            }
          />
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View>
            <TextInput
              label="Nome de Protocolo"
              className="text-xl"
              value={protocolName}
              onChangeText={setProtocolName}
            />
          </View>
        }
        ListFooterComponent={
          <AddWorkoutSheetCard onPress={() => addWorkoutSheet('Nova Ficha')} />
        }
        contentContainerStyle={{
          gap: 32,
          paddingBottom: 32,
        }}
        showsVerticalScrollIndicator={false}
      />
      <View className="pt-4">
        <Button
          title="Criar Protocolo"
          variant="glow"
          disabled={!canCreateProtocol}
        />
      </View>
    </SafeAreaView>
  );
};
