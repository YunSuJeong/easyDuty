import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WorkTypeList() {
  return (
    <View style={styles.container}>
      <Text>근무 종류 리스트 화면입니다</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: '#fff',
        justifyContent: 'center',      // 세로 중앙 정렬
        alignItems: 'center',          // 가로 중앙 정렬
    },
});