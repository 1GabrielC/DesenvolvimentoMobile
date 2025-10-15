import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, ScrollView, StyleSheet } from 'react-native';
import { getCharacterById, createCharacter, updateCharacter, deleteCharacter } from '@/api/character';
import CharacterCard from '@/components/CharacterCard';
import type { Character } from '@/types';
import { saveFavorite } from '@/storage/asyncStorage';

export default function CharacterScreen() {
  const [id, setId] = useState('1');
  const [payloadName, setPayloadName] = useState('Novo Personagem');
  const [data, setData] = useState<Character | null>(null);
  const [loading, setLoading] = useState(false);

  async function onRead() {
    try {
      setLoading(true);
      const item = await getCharacterById(id);
      setData(item);
    } catch (e: any) {
      Alert.alert('Erro', e?.response?.data?.error ?? String(e));
    } finally {
      setLoading(false);
    }
  }

  async function onCreate() {
    try {
      setLoading(true);
      const created = await createCharacter({ name: payloadName });
      Alert.alert('Criado!', JSON.stringify(created, null, 2));
    } catch (e: any) {
      Alert.alert('Erro ao criar', e?.response?.data?.error ?? String(e));
    } finally {
      setLoading(false);
    }
  }

  async function onUpdate() {
    try {
      setLoading(true);
      const updated = await updateCharacter(id, { name: payloadName });
      Alert.alert('Atualizado!', JSON.stringify(updated, null, 2));
    } catch (e: any) {
      Alert.alert('Erro ao atualizar', e?.response?.data?.error ?? String(e));
    } finally {
      setLoading(false);
    }
  }

  async function onDelete() {
    try {
      setLoading(true);
      const ok = await deleteCharacter(id);
      Alert.alert(ok.ok ? 'Deletado!' : 'Falha ao deletar');
    } catch (e: any) {
      Alert.alert('Erro ao deletar', e?.response?.data?.error ?? String(e));
    } finally {
      setLoading(false);
    }
  }

  async function onSaveFavorite() {
    if (!data) return;
    await saveFavorite(data);
    Alert.alert('Favoritos', 'Salvo localmente com AsyncStorage.');
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.h1}>One Piece CRUD</Text>

      <Text style={styles.label}>ID (READ/UPDATE/DELETE):</Text>
      <TextInput style={styles.input} value={id} onChangeText={setId} inputMode="numeric" />
      <Button title={loading ? 'Carregando...' : 'READ: Buscar /character/:id'} onPress={onRead} />

      <View style={{ height: 16 }} />

      <Text style={styles.label}>Nome (POST/PUT payload):</Text>
      <TextInput style={styles.input} value={payloadName} onChangeText={setPayloadName} />
      <View style={styles.row}>
        <View style={styles.col}><Button title="POST: Criar" onPress={onCreate} /></View>
        <View style={styles.col}><Button title="PUT: Atualizar" onPress={onUpdate} /></View>
        <View style={styles.col}><Button title="DELETE" onPress={onDelete} /></View>
      </View>

      {data ? (
        <View style={{ marginTop: 24 }}>
          <CharacterCard data={data} />
          <Button title="Salvar nos Favoritos (AsyncStorage)" onPress={onSaveFavorite} />
        </View>
      ) : null}

      <View style={{ height: 24 }} />
      <Button title="Ir para Favoritos (Local)" onPress={() => { /* done in header via stack */ }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  h1: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  label: { marginTop: 12, marginBottom: 6, fontWeight: '600' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 12 },
  row: { flexDirection: 'row', gap: 8 },
  col: { flex: 1 },
});
