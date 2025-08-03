import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';

import MonthCalendar from '../screens/MonthCalendar';
import WorkTypeList from '../screens/WorkTypeList';
import ScheduleEdit from '../screens/ScheduleEdit';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  tabNav: undefined;
  edit: undefined;
};

function TabNavigator() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
    headerShown: false,
    tabBarIcon: ({ focused }) => {
      if (route.name === 'calendar') {
        return (
          <Image
            source={require('../assets/calendar.png')}
            style={{
              width: 24,
              height: 24,
              tintColor: focused ? '#689EEE' : '#999',
            }}
          />
        );
      } else if (route.name === 'workType') {
        return (
          <Image
            source={require('../assets/worklist.png')}
            style={{
              width: 24,
              height: 24,
              tintColor: focused ? '#689EEE' : '#999',
            }}
          />
        );
      }
    },
    tabBarLabel: () => null,
  })}
      >
        <Tab.Screen name="calendar" component={MonthCalendar} />
        <Tab.Screen name="workType" component={WorkTypeList} />
      </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="tabNav" component={TabNavigator} />
        <Stack.Screen name="edit" component={ScheduleEdit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
