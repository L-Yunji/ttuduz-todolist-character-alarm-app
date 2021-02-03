import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, View, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={{
          width: 360,
          height: 64,
          backgroundColor: "#fff",
          marginBottom: 16
    }}><Text style={styles.characterName}>낑이</Text></View>

    <View style={{
          width: 242,
           height: 241,
          borderRadius: 124,
          alignItems: "center",
          backgroundColor: "#ffffff",
          marginBottom: 12
          }}></View>
       <View style={styles.card}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffa8c7',
    alignItems: "center"
  },
  characterName: {
    color: '#373636',
    fontSize: 18,
    fontFamily: "Roboto",
    fontWeight: 'bold',
    fontStyle: "normal",
    lineHeight: 22,
    letterSpacing: 0,
    marginTop: 20,
    marginBottom: 16,
    textAlign: 'center',
    backgroundColor: '#fff',
    width: 36,
    height: 24
  },
  card: {
    backgroundColor: '#fff',
    width: 360,
    height: 283,
    borderTopLeftRadius: 30, // to provide rounded corners
    borderTopRightRadius: 30, // to provide rounded corners
    marginLeft: 0,
    marginRight: 0

  }
});

export default App;