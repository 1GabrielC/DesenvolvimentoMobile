import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CharacterScreen from '@/screens/CharacterScreen';
import LocalCharactersScreen from '@/screens/LocalCharactersScreen';

export type RootStackParamList = {
  Character: undefined;
  Local: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Character" component={CharacterScreen} options={{ title: 'Buscar Personagem (READ)' }} />
      <Stack.Screen name="Local" component={LocalCharactersScreen} options={{ title: 'Favoritos (AsyncStorage)' }} />
    </Stack.Navigator>
  );
}
