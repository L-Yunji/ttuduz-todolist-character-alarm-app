import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, View, Text, Image, ScrollView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={{
          width: 360,
          height: 64,
          backgroundColor: "#fff",
          marginBottom: 16}}>
            
            <Text style={styles.characterName}>낑이</Text></View>

    <View style={{
          width: 242,
           height: 241,
          borderRadius: 124,
          alignItems: "center",
          backgroundColor: "#ffffff",
          marginBottom: 12
          }}>

          <Image
            style={{width: 160, height: 211, marginTop: 17}}
            source={require('./character_png/rabbit_body.png')} />
            </View>
       <View style={styles.card}>
          <TextInput style={styles.input}/></View>
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
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30, 
    marginLeft: 0,
    marginRight: 0
  },
  input: {
    width: 296,
    height: 42,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 22,
    borderBottomColor: '#9e9e9e',
    fontSize: 14,
    marginTop: 52,
    marginLeft: 32,
    marginRight: 32
  },
});

export default App;