import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  day: number;
};

export default function DayCell({ day }: Props) {
  return (
    <View style={styles.cell}>
      <Text style={styles.text}>{day}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cell: {
    width: 40,
    height: 40,
    margin: 4,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  text: {
    fontSize: 16,
  },
});
