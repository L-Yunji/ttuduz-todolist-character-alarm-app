// components/TodoListItem.js
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const TodoListItem = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.circle} />
      </TouchableOpacity>
      <Text style={styles.text}>TodoList items will be shown here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    flex: 4,
  
    width: 100,
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 17,
    letterSpacing: 0,
    textAlign: "left",
    color: "#373636",

  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 15,
    borderColor: '#424242',
    borderWidth: 2,
    marginRight: 19,
    marginLeft: 10,
  },
});

export default TodoListItem;
