// components/TodoInsert.js
import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

const TodoInsert = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add an item!"
        placeholderTextColor={'#999'}
        autoCorrect={false}
      />
      <View style={styles.button}>
        <Button title={'ADD'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: 296,
    height: 42,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 22,
    borderBottomColor: '#9e9e9e',
    fontSize: 14,
    marginTop: 12,
    marginLeft: 32,
    marginRight: 32
  },
  button: {
    marginRight: 0,
  },
});

export default TodoInsert;
