import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { Character } from '@/types';

type Props = { data: Character };
export default function CharacterCard({ data }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{data.name}</Text>
      {data.epithet ? <Text style={styles.line}>Epíteto: {data.epithet}</Text> : null}
      {data.crew ? <Text style={styles.line}>Tripulação: {data.crew}</Text> : null}
      {data.bounty ? <Text style={styles.line}>Recompensa: {data.bounty}</Text> : null}
      {data.devilFruit ? <Text style={styles.line}>Akuma no Mi: {data.devilFruit}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { borderWidth: 1, borderColor: '#ddd', borderRadius: 12, padding: 12, marginVertical: 8, backgroundColor: '#fff' },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 6 },
  line: { fontSize: 14, marginVertical: 2 },
});
