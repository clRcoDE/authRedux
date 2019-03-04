import React, { Component } from 'react'
import { Text, StyleSheet, View, AsyncStorage , TouchableOpacity , TextInput, Dimensions } from 'react-native'




let dim= Dimensions.get('window')
export default class HomeScreen extends Component {
static navigationOptions=({navigation})=>{
HellModal=()=>{
navigation.navigate('Modal')
}
HellBack=()=>{
navigation.goBack()
}

  return{
    headerTransparent:true,
    headerTitle:(<View style={styles.headerInput}><TextInput   style={styles.input} placeholder={'search news'} /></View>),
    headerLeft:(<TouchableOpacity  style={styles.sideButtons} onPress={HellBack.bind(this)} ><Text>Back</Text></TouchableOpacity>),
    headerRight:(<TouchableOpacity  style={styles.sideButtons} onPress={HellModal.bind(this)} ><Text>More</Text></TouchableOpacity>)
  }
}
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
        backgroundColor:'#5041f4',
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

    },
    // headerInput:{
    //   // backgroundColor:'white',
    //   borderRadius:15,
    //   justifyContent: 'center',
    //   alignItems: 'center',
      // width:dim.width*(70/100),
    //   // height:35,
    //   margin:6,
    //   backgroundColor:'#eee'
    // },
    headerInput:{
      justifyContent: 'center',
      // alignItems: 'center', 
      width:dim.width*(72/100),
      // borderWidth: 2,
      height:40,
      borderRadius:50,
      backgroundColor:'white',
    },
    input:{
      // width:300,
      
      // justifyContent: 'center',
      // alignItems: 'center',
      // width:dim.width*(75/100),
      flex:1,
      alignItems: 'center',
      textAlign:'center'
    },
    sideButtons:{
      // backgroundColor:'red',
      width:dim.width*(11/100),
      alignItems: 'center',
      height:30,
      justifyContent: 'center',
    }
})
