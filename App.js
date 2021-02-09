import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, View, Text, Image, ScrollView} from 'react-native';
import TodoInsert from './components/TodoInsert';
import TodoListItem from './components/TodoListItem';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={{
          width: 360,
          height: 64,
          backgroundColor: "#fff",
          elevation: 6,
          marginBottom: 16}}>
          
          <View style={styles.category}>
            <Text style={styles.categoryName}>운동</Text></View>
          <Text style={styles.characterName}>낑이</Text></View>

    <View style={{
          width: 242,
           height: 241,
          borderRadius: 124,
          alignItems: "center",
          backgroundColor: "#ffffff",
          marginBottom: 12
          }}>
          
          <View style={styles.item}>
            <Image 
              style={{position: 'absolute', top: 3.2, width: 27.9, height: 27.9}}
              source={require('./item_png/carrot.png')}/></View>

          <View style={styles.book}></View>

          <Image
            style={{width: 160, height: 211, marginTop: 17}}
            source={require('./character_png/rabbit_body.png')}/></View>

       <View style={styles.card}>

          <Text style={styles.day1}>?</Text>
          <Text style={styles.day2}>?</Text>
          <Text style={styles.dayday}>11.21 SAT</Text>
          <TextInput style={styles.input}/>
          <TodoInsert />
          <ScrollView contentContainerStyle={styles.input}><TodoListItem/></ScrollView>
          </View>

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
    position: 'absolute',
    top: 0,
    left: 162,
    color: '#373636',
    fontSize: 18,
    fontFamily: "Roboto",
    fontWeight: 'bold',
    fontStyle: "normal",
    lineHeight: 22,
    letterSpacing: 0,
    marginTop: 20,
    marginBottom: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 36,
    height: 24
  },

  category: {
    width: 52,
    height: 32,
    position: 'absolute',
    top: 16,
    right: 16,
    borderRadius: 16,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#9d9c9c"
  },

  categoryName: {
    position: 'absolute',
    top: 8,
    left: 14,
    fontFamily: "Roboto",
    fontSize: 12,
    fontWeight: "300",
    fontStyle: "normal",
    lineHeight: 14,
    letterSpacing: 0,
    color: "#373636"
  },


  item: {
    position: 'absolute',
    left: -43,
    top: 79, 
    width: 28,
    height: 52,
    borderRadius: 18,
    backgroundColor: "#fff"

  },

  book: {
    position: 'absolute',
    left: -43,
    top: 201, 
    width: 28,
    height: 28,
    backgroundColor: "#fff",
    borderRadius: 124
  },


  day1: {
    position: 'absolute',
    top: 17,
    left: 126,
    width: 8,
    height: 19,
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "300",
    fontStyle: "normal",
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: "left",
    color: "#000000"
  },

  day2: {
    position: 'absolute',
    top: 17,
    right: 126,
    width: 8,
    height: 19,
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "300",
    fontStyle: "normal",
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: "left",
    color: "#000000"
  },

  dayday: {
    position: 'absolute',
    top: 17,
    right: 149,
    width: 62,
    height: 17,
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "300",
    fontStyle: "normal",
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: "center",
    color: "#000000"
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