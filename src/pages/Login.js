import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import {connect} from 'react-redux'
import {requestSignIn} from '../services/actions/actions'



 class Login extends Component {





        requester = () => {
         this.props.requestSignIn()


        }



    render() {
        return (
            <View style={styles.container} >
                <View style={styles.header}>
                </View>
                <View style={styles.body}>
                    <View style={styles.usernameWrapper}>
                        <TextInput placeholder={'username'} />
                    </View>
                    <View style={styles.passwordWrapper}>
                        <TextInput placeholder={'password'} />
                    </View>
                    <TouchableOpacity
                        onPress={() => this.requester()} >
                        <Text style={styles.loginText} >Login</Text>
                        
                    </TouchableOpacity>
                    {this.props.loading && <ActivityIndicator animating={true} size={'large'} />}

                </View>
                <View style={styles.footer}>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        // justifyContent:'center',
        // alignItems:'center'
    },
    header: {
        flex: 1,
        // backgroundColor:'royalblue'
    },
    body: {
        flex: 3,
        backgroundColor:'gold',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: {
        flex: 1,
        // backgroundColor:'lime'
    }

})
const mapStateToProps = state =>{

    return{
        loading : state.loading
    }
}



export default connect(mapStateToProps , {requestSignIn})(Login)
