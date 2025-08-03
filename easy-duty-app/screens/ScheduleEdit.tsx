import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import CalendarView from '../components/Calendar';

export default function ScheduleEdit() {
  const [currentYM, setCurrentYM] = useState('2025년 07월');
 
  return (
    <View style={styles.container}>
      <Header currentYM={currentYM}/>
      <CalendarView setCurrentYM={setCurrentYM} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#eee',
    alignItems: 'center',
  },
});