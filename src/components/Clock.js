import React, { useState } from 'react';
import Svg from 'react-native-svg';
import { StyleSheet, Dimensions } from 'react-native';
import ClockMarkings from './ClockMarkings';
import Hand from './Hand';
import { useInterval } from '../helpers/useInterval';
import { getTime } from '../helpers/time';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const diameter = windowWidth - 40;
const center = windowWidth / 2;
const radius = diameter / 2;
const hourStickCount = 12;
const minuteStickCount = 12 * 6;

const Clock = () => {
  let [time, setTime] = useState(getTime);

  useInterval(() => {
    setTime(getTime);
  }, 1000);

  return (
    <Svg height={windowWidth} width={windowWidth} style={styles.container}>
      <ClockMarkings
        minutes={minuteStickCount}
        hours={hourStickCount}
        radius={radius}
        center={center}
      />
      <Hand
        angle={time.seconds}
        center={center}
        radius={radius}
        stroke="red"
        strokeWidth="1"
      />
      <Hand
        angle={time.minutes}
        center={center}
        radius={radius}
        stroke="white"
        strokeWidth="5"
      />
      <Hand
        angle={time.hours}
        center={center}
        radius={radius}
        stroke="white"
        strokeWidth="7"
      />
    </Svg>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: windowHeight / 4,
  },
});

export default Clock;
