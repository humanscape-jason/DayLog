import {hi} from 'date-fns/locale';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {Animated, Button, StyleSheet, Text, View} from 'react-native';
import LogContext from '../contexts/LogContext';

const CalendarScreen = () => {
  return (
    <View style={styles.block}>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {},
  rectangle: {width: 100, height: 100, backgroundColor: 'black'},
});

export default CalendarScreen;
