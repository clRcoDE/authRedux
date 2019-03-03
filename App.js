/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {createAppContainer , createSwitchNavigator  , createStackNavigator} from 'react-navigation'
import {createStore , applyMiddleware } from 'redux'


import rootReducer from './src/services/reducers/rootReducer'



import Home from './src/pages/Home'
import Login from './src/pages/Login'
import Signup from './src/pages/Signup'







export const store = createStore(rootReducer ,applyMiddleware(thunk))


 export default class App extends Component{
  render() {
    return (
    <Provider  store={store} >

    <AppContainer/>
    
    </Provider>)
  }
}





const HomeStack = createSwitchNavigator(
  {
    Home:Home
  }
)


const AuthStack = createStackNavigator(
  {
    Login:Login,
    Signup:Signup
  },{
    headerMode:'none'
  }
)


const AppStarterSwitch = createSwitchNavigator(
  {
    Auth:AuthStack,
    Home:HomeStack
  }
)

const AppContainer = createAppContainer(AppStarterSwitch)

