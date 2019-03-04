import React, { Component } from 'react'
import { Text, StyleSheet, View, AsyncStorage , TouchableOpacity} from 'react-native'

export default class Home extends Component {

  logoutUser = async ()=>{
      try{
        await AsyncStorage.removeItem('TOKEN')
        this.props.navigation.navigate('Login')
      }catch(error){
        console.log(`removing Error ${error} `)
      }
  }

  render() {

    return (
      <View style={styles.container} >
        <Text style={styles.HomeText} > Home </Text>
        <Text style={styles.UsernameText} > welcome {this.props.navigation.getParam('username', 'NO-NAME')} ! </Text>


        <TouchableOpacity onPress={this.logoutUser.bind(this)}>
        <Text style={styles.LogoutText} >Logout</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({


    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    HomeText:{
      fontSize:20,
      color:'blue'
    },
    UsernameText:{
      fontSize:30,
      color:'#000'

    },
    LogoutText:{
      fontSize:20,
      color:'red'

    }
})
