import React, { Component } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Calendar from './components/calendarItem';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}><Text>header</Text></View>
        <View style={styles.calendar}>
          <Calendar />
        </View>
        <View style={styles.content}><Text>content</Text></View>
        <View style={styles.nav}><Text>nav</Text></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#eeeeee',
  },
  header: {
    width:'100%',
    height:'10%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },

  calendar: {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 16, // to provide rounded corners
    marginLeft: 32,
    marginRight: 32,
    marginBottom: 15,
    marginTop: 16,
  },
  content: {
    width:'100%',
    height:'35%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30, // to provide rounded corners
    borderTopRightRadius: 30, // to provide rounded corners
  },
  nav: {
    width:'100%',
    height:'8%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1ad657',
  },
});
