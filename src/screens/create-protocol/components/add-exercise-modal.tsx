import { Button } from '@/components/ui/button';
import { CardInput } from '@/components/ui/card-input';
import { FullscreenModal } from '@/components/ui/fullscreen-modal';
import { TextInput } from '@/components/ui/text-input';
import { useState } from 'react';
import { View } from 'react-native';
import { Exercise } from '../types';

interface AddExerciseModalProps {
  onAddExercise: (exercise: Exercise) => void;
}

export const AddExerciseModal = ({ onAddExercise }: AddExerciseModalProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [muscleGroup, setMuscleGroup] = useState('');
  const [series, setSeries] = useState('');
  const [reps, setReps] = useState('');
  const [delay, setDelay] = useState('');
  const [weight, setWeight] = useState('');
  const [observations, setObservations] = useState('');
  const canAddExercise =
    !!name.trim() && !!muscleGroup.trim() && !!series.trim() && !!reps.trim();

  const resetForm = () => {
    setName('');
    setMuscleGroup('');
    setSeries('');
    setReps('');
    setDelay('');
    setWeight('');
    setObservations('');
  };

  const handleAddExercise = () => {
    if (!canAddExercise) {
      return;
    }

    onAddExercise({
      id: Date.now().toString(),
      name: name.trim(),
      muscleGroup: muscleGroup.trim(),
      series: Number(series) || 0,
      reps: Number(reps) || 0,
      delay: delay ? Number(delay) : undefined,
      weight: weight ? Number(weight) : undefined,
      observations: observations.trim() || undefined,
    });

    resetForm();
    setModalVisible(false);
  };

  return (
    <View>
      <Button
        variant="dashed"
        title="Adicionar Exercício"
        leftIcon="plus-circle"
        onPress={() => setModalVisible(true)}
      />
      <FullscreenModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        showCloseButton={false}
      >
        <View className="flex flex-1 gap-8 pb-4">
          <View className="gap-8 rounded-xl border border-surface bg-background-element p-4">
            <TextInput
              label="Nome do Exercício"
              className="text-xl"
              placeholder="Digite o nome do exercício"
              variant="secondary"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              label="Grupo Muscular"
              className="text-xl"
              placeholder="Digite o grupo muscular"
              variant="secondary"
              value={muscleGroup}
              onChangeText={setMuscleGroup}
            />
          </View>
          <View className="w-full flex-row gap-8">
            <CardInput
              icon="layers-2"
              label="Sets"
              placeholder="3"
              maxLength={2}
              value={series}
              onChangeText={setSeries}
            />
            <CardInput
              icon="repeat"
              label="Reps"
              placeholder="3"
              maxLength={2}
              value={reps}
              onChangeText={setReps}
            />
          </View>
          <View className="w-full flex-row gap-8">
            <CardInput
              icon="timer"
              label="Rest"
              placeholder="3"
              maxLength={2}
              value={delay}
              onChangeText={setDelay}
            />
            <CardInput
              icon="dumbbell"
              label="Carga"
              placeholder="3"
              maxLength={2}
              value={weight}
              onChangeText={setWeight}
            />
          </View>
          <TextInput
            label="Observações"
            className="text-xl"
            placeholder="Digite suas observações"
            variant="secondary"
            value={observations}
            onChangeText={setObservations}
          />
          <View className="mt-auto">
            <Button
              title="Adicionar Exercício"
              variant="glow"
              disabled={!canAddExercise}
              onPress={handleAddExercise}
            />
          </View>
        </View>
      </FullscreenModal>
    </View>
  );
};
