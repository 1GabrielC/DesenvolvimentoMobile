import api from './client';
import type { Character } from '@/types';

export async function getCharacterById(id: string | number): Promise<Character> {
  const resp = await api.get(`/character/${id}`);
  return resp.data as Character;
}

export async function createCharacter(payload: Character): Promise<Character> {
  const resp = await api.post('/character', payload);
  return resp.data as Character;
}

export async function updateCharacter(id: string | number, payload: Partial<Character>): Promise<Character> {
  const resp = await api.put(`/character/${id}`, payload);
  return resp.data as Character;
}

export async function deleteCharacter(id: string | number): Promise<{ ok: boolean }> {
  const resp = await api.delete(`/character/${id}`);
  return { ok: resp.status >= 200 && resp.status < 300 };
}
