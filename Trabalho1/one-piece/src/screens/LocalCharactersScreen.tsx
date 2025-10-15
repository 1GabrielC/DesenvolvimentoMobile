import React, { useState } from 'react';
import { View, Text, Button, FlatList, Alert, StyleSheet } from 'react-native';
import { getFavorites, removeFavorite, clearFavorites } from '@/storage/asyncStorage';
import type { Character } from '@/types';
import { useAsyncEffect } from '@/hooks/useAsyncEffect';

export default function LocalCharactersScreen() {
  const [items, setItems] = useState<Character[]>([]);

  async function refresh() {
    const data = await getFavorites();
    setItems(data);
  }

  useAsyncEffect(() => { refresh(); }, []);

  async function onRemove(id?: string | number) {
    if (!id) return;
    await removeFavorite(id);
    Alert.alert('Removido!');
    await refresh();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.h1}>Favoritos (Persistência local)</Text>
        <Button title="Limpar tudo" onPress={clearFavorites} />
      </View>
      <FlatList
        data={items}
        keyExtractor={(item) => String(item.id ?? item._id ?? Math.random())}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.name}</Text>
            <Button title="Remover" onPress={() => onRemove(item.id ?? item._id)} />
          </View>
        )}
        ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 24 }}>Nenhum favorito salvo.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  h1: { fontSize: 18, fontWeight: 'bold' },
  card: { padding: 12, borderWidth: 1, borderColor: '#ddd', borderRadius: 12, marginVertical: 6 },
  title: { fontSize: 16, fontWeight: '600', marginBottom: 6 },
});
