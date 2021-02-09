// components/TodoList.js
import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      <Text>TodoList</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
  },
});

export default TodoList;
