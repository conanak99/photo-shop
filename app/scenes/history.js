import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import styles from '../styles/commonStyle';

const History = () =>
  <View style={styles.container}>
    <Text style={styles.welcome}>
      History
    </Text>
    <Text style={styles.instructions}>
      To get started, edit index.ios.js
    </Text>
    <Text style={styles.instructions}>
      Press Cmd+R to reload,{'\n'}
      Cmd+D or shake for dev menu
    </Text>
  </View>;


export default History;
