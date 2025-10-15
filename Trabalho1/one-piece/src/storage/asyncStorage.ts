import AsyncStorage from '@react-native-async-storage/async-storage';
import type { Character } from '@/types';

const KEY = '@onepiece:favorites';

export async function getFavorites(): Promise<Character[]> {
  const raw = await AsyncStorage.getItem(KEY);
  return raw ? (JSON.parse(raw) as Character[]) : [];
}

export async function saveFavorite(c: Character): Promise<void> {
  const current = await getFavorites();
  const exists = current.find((x) => (x.id ?? x._id) === (c.id ?? c._id));
  const next = exists ? current : [...current, c];
  await AsyncStorage.setItem(KEY, JSON.stringify(next));
}

export async function removeFavorite(id: string | number): Promise<void> {
  const current = await getFavorites();
  const next = current.filter((x) => (x.id ?? x._id) !== id);
  await AsyncStorage.setItem(KEY, JSON.stringify(next));
}

export async function clearFavorites(): Promise<void> {
  await AsyncStorage.removeItem(KEY);
}
