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
import {createStore , applyMiddleware } from 'redux'
import AppContainer from './src/Routes'


import rootReducer from './src/services/reducers/rootReducer'






export const store = createStore(rootReducer ,applyMiddleware(thunk))


 export default class App extends Component{

  someEvent() {
    // call navigate for AppNavigator here:
    // this.navigator &&
    //   this.navigator.dispatch(
    //     NavigationActions.navigate({ routeName: someRouteName })
    //   );
  }
  render() {
    return (
    <Provider  store={store} >

<AppContainer
        // ref={nav => {
        //   this.navigator = nav;
        // }}
      />
    
    </Provider>)
  }
}





