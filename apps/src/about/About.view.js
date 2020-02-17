// import plugin
import React, { Component } from 'react';
import { View, Text } from 'react-native';

// import style
import styles from './About.style.js';

// export class
export default class AboutView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>AboutView Screen</Text>
      </View>
    );
  }
}