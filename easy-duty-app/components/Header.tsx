import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';      // 타입 정의한 파일

type Props = {
  currentYM: string;
};

export default function Header({ currentYM }: Props) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  return (
    <View style={styles.header}>
      <Text style={styles.monthText}>{currentYM}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('edit')}>
        <Image source={require('../assets/edit.png')} style={{ width: 24, height: 24 }} resizeMode="contain"/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: '#f2f2f2',
  },
  monthText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
