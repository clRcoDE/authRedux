import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Modal extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text  style={styles.modalText}  > Modal Page </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:'royalblue',
justifyContent: 'center',
alignItems: 'center',

},
modalText:{
    fontSize:30,
    color:'#003'
}


})
