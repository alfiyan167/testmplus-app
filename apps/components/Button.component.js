import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'native-base';

export default class ButtonComponent extends Component {
  render() {
    const { title, onPress } = this.props;
    return (
      <Button full style={styles.btn} onPress={() => onPress()}>
        <Text style={styles.text}>{title}</Text>
      </Button>
    )
  }  
}

const styles = StyleSheet.create({
  btn: {
    borderRadius: 5
  },
  text: {
    color: '#fff'
  }
});