import React from 'react';
import Clock from './components/Clock';
import styled from 'styled-components/native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <ScrollView
          centerContent={true}
          contentInsetAdjustmentBehavior="automatic">
          <Clock />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const ScrollView = styled.ScrollView`
  flex: 1;
  background-color: black;
`;

const SafeAreaView = styled.SafeAreaView`
  background-color: black;
  flex: 1;
`;

const StatusBar = styled.StatusBar.attrs(() => ({
  barStyle: 'light-content',
}))``;

export default App;
