/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
var Realm=require('realm');


export default class App extends Component {
  componentWillMount() {
    StatusBar.setHidden(true);
  }
  render() {
    let realm = new Realm({
      schema: [
        {
          name: 'Girl',
          properties: {
            name: 'string'
          }
        }
      ]
    });
    realm.write(()=>{
      realm.create('Girl',{name:'Tina'})

    })
    return (
      <View>
        <Text>Count of Girl in Realm: {realm.objects('Girl').length}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00e640',
  },

});
