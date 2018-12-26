import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Main from './source/main';


export default class App extends Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

const AppStack = createStackNavigator({
  main:{
    screen:Main
  }
},{
  initialRouteName:'main',
  headerMode:'none'
});

const AppContainer = createAppContainer(AppStack)