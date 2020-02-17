import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

export default class InputComponent extends Component {
  render() {
    const { placeholder, value, keyboardType, secureTextEntry, autoFocus, onChangeText, validation } = this.props;
    return (
      <View style={styles.row}>
        <TextInput
          placeholder={placeholder}
          value={value}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          autoCorrect={false}
          autoFocus={autoFocus}
          autoCapitalize="none"
          onChangeText={(text) => onChangeText(text)}
          style={styles.input}
        />
        {(validation === 'isEmpty') && <Text style={styles.textWarning}>This field is not empty</Text>}
        {(validation === 'isNumber') && <Text style={styles.textWarning}>This field must be number</Text>}
      </View>
    )
  }  
}

const styles = StyleSheet.create({
  row: {
    marginTop: 20
  },
  input: {
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10
  },
  textWarning: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: '#F17171'
  }
});