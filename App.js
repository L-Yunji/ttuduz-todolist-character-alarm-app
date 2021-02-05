import React, { useState } from 'react';
import { ScrollView, Modal, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button, Alert, YellowBox, TouchableHighlight } from 'react-native';
import Carousel from 'react-native-carousel-control';
import Feather from 'react-native-vector-icons/Feather';

//20200205 modified
export default class App extends React.Component {

  state = {
    isVisible: false
  };

  displayModal(show) {
    this.setState({ isVisible: show })
  }



  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>네비게이션 부분입니다.</Text>
          
        </View>
        <View style={styles.circleindicator}>


          <TouchableOpacity onPress={() => Alert.alert('캐릭터')}
            style={styles.characterbutton}>
            <Image
              source={
                require('./characterimage/강.png')
              }
              style={{ width: 37, height: 30}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('캐릭터')}
            style={styles.characterbutton}>
            <Image
              source={
                require('./characterimage/수.png')
              }
              style={{ width: 37, height: 30}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('캐릭터')}
            style={styles.characterbutton}>
            <Image
              source={
                require('./characterimage/토원본귀.png')
              }
              style={{ width: 37, height: 30}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('캐릭터')}
            style={styles.characterbutton}>
            <Image
              source={
                require('./characterimage/판.png')
              }
              style={{ width: 37, height: 30}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('캐릭터')}
            style={styles.characterbutton}>
            <Image
              source={
                require('./characterimage/펭.png')
              }
              style={{ width: 37, height: 30}}
            />
          </TouchableOpacity>
  

        </View>
        
        <View style={styles.category}>

          <TouchableOpacity
            onPress={() => Alert.alert('확인')}
            style={styles.categorybutton}>
            <Text>공부</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Alert.alert('확인')}
            style={styles.categorybutton}>
            <Text>운동</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Alert.alert('확인')}
            style={styles.categorybutton}>
            <Text>취미</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Alert.alert('확인')}
            style={styles.categorybutton}>
            <Text>약속</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Alert.alert('확인')}
            style={styles.categorybutton}>
            <Text>기타</Text>
          </TouchableOpacity>




        </View>
        <View style={styles.cardview}>

          <Carousel pageStyle={{ backgroundColor: "white", height: 260, width: 188 }}
          >
            <TouchableOpacity>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0UZUOTlXVlH90c5kSpdzwLiIcRAYTUr4oA&usqp=CAU'
                }}
                style={{ width: 154, height: 203 }}
              />
              <Text>1번적용.......</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert('모달화면 띄우기')}>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0UZUOTlXVlH90c5kSpdzwLiIcRAYTUr4oA&usqp=CAU'
                }}
                style={{ width: 154, height: 203 }}
              />
              <Text>몽몽</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert('모달화면 띄우기')}>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0UZUOTlXVlH90c5kSpdzwLiIcRAYTUr4oA&usqp=CAU'
                }}
                style={{ width: 154, height: 203 }}
              />
              <Text>몽</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert('모달화면 띄우기')}>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0UZUOTlXVlH90c5kSpdzwLiIcRAYTUr4oA&usqp=CAU'
                }}
                style={{ width: 154, height: 203 }}
              />
              <Text>몽몽</Text>
            </TouchableOpacity>


          </Carousel>
          <Text>Indicator자리</Text>
          <TouchableOpacity
            onPress={() => {
              this.displayModal(true);
            }}
            style={styles.categorybutton}>
          <Feather name={'book-open'} size={25} color={'black'}/>
          </TouchableOpacity>

        </View>
        <View style={styles.navigator}>
          <Text>네비게이터 적용해 줄 공간입니다.</Text>

        </View>


        <Modal
          animationType={'fade'}
          transparent={true}
          visible={this.state.isVisible}
          onRequestClose={() => {
            Alert.alert('Modal is closed');
          }}

        >
          <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)'
          }}>
            <View style={{
              backgroundColor: '#fff',
              width: 300,
              height: 300,
              borderRadius: 10,
              shadowColor: '#000',
              shadowOffset: {
                width: 4,
                height: 1,
              },
              shadowOpacity: 0.1,
              shadowRadius: 1.00,
              elevation: 24,
            }}>
              <Text>캐릭터 사진</Text>
              <Text>설명 : 달수리는 물에 사는~~~</Text>

              <Text onPress={() => { this.displayModal(!this.state.isVisible); }}>닫기</Text>
            </View>
          </View>

        </Modal>

      </View>



    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'gray',
  },
  circleindicator: {
    height: 72,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  category: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    elevation: 2,
  },


  cardview: {
    height: 390,
    alignItems: 'center',
    justifyContent: 'center',

  },
  charactercard: {
    marginTop: 32,
    marginLeft: 17,
    marginRight: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },



  navigator: {
    height: 52,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'gray',
  },

  //button component

  // 캐릭터 버튼
  characterbutton: {
    height: 48,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 100,
  },
  characteraddbutton: {
    height: 48,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    padding: 0,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 100,
  },

  categorybutton: {
    height: 32,
    width: 53,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    padding: 10,
    borderWidth: 0.8,
    borderColor: 'black',
    borderRadius: 20,
  },




});