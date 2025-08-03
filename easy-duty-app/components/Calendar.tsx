import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Calendar, CalendarList } from 'react-native-calendars';      // 라이브러리 사용

type Props = {
  setCurrentYM: (val: string) => void;
};

export default function CalendarView({ setCurrentYM } : Props) {
  return (
    <SafeAreaView style={styles.container}>
      <CalendarList 
        // 좌우 스와이프로 달 이동
        horizontal={true}
        pagingEnabled={true}

        // 상단 텍스트 숨기기
        renderHeader={() => null}
        hideArrows={true}

        // 월 바뀔 때 상단 상태 업데이트
        onVisibleMonthsChange={(months) => {
          const firstMonth = months[0];
          const formatted = `${firstMonth.year}년 ${String(firstMonth.month).padStart(2, '0')}월`;
          setCurrentYM(formatted);
        }}

        // 날짜 누르면 출력
        onDayPress={(day) => {
          console.log('선택한 날짜:', day.dateString);
        }}

        markedDates={{
          '2025-07-21': { selected: true, selectedColor: '#4a90e2' },
          '2025-07-23': { marked: true, dotColor: 'red' },
        }}

        theme={{
          selectedDayBackgroundColor: '#4a90e2',
          todayTextColor: '#e53935',
        }}

        pastScrollRange={12}     // 과거 12개월까지
        futureScrollRange={12}   // 미래 12개월까지
      />
      {/* <Calendar
        onMonthChange={(monthObj) => {
          const formatted = `${monthObj.year}년 ${String(monthObj.month).padStart(2, '0')}월`;
          setCurrentYM(formatted);
        }}
        // 날짜 눌렀을 때 이벤트
        onDayPress={(day) => {
          console.log('선택한 날짜:', day.dateString);
        }}
        // 선택된 날짜 표시
        markedDates={{
          '2025-07-21': { selected: true, selectedColor: '#4a90e2' },
          '2025-07-23': { marked: true, dotColor: 'red' },
        }}
        theme={{
          selectedDayBackgroundColor: '#4a90e2',
          todayTextColor: '#e53935',
        }}

        renderHeader={() => null}
        hideArrows={true}
      /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20, paddingTop: 20

    //flex: 1,
    //justifyContent: 'center',      // 세로 중앙 정렬
    //alignItems: 'center',          // 가로 중앙 정렬
  },
  // row: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   marginBottom: 8,
  // },
  // dayLabel: {
  //   width: 40,
  //   textAlign: 'center',
  //   fontWeight: 'bold',
  //   color: '#444',
  // },
  // grid: {
  //   flexDirection: 'row',
  //   flexWrap: 'wrap', // 자동 줄바꿈
  //   justifyContent: 'flex-start',
  // },
});
