import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, ActivityIndicator , AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { requestSignIn } from '../services/actions/actions'




class Login extends Component {


    constructor(props) {
        super(props)
        this.state = {
            username: null,
            password: null
        }
    }


    requester = () => {

        const {username , password } = this.state
        this.props.requestSignIn(username ,password , this.onSucceed ,  this.onFail ) 




        
    }

    onSucceed = (username) => {
        this.props.navigation.navigate('HomeScreen',{ username :`${username}` })
    }

    onFail = () => {
       alert('wrong user/pass')
    }


    getInputs = (input, inputType) => {
        if (inputType === 'username') {

            this.setState({ username: input })

        } else if (inputType === 'password') {

            this.setState({ password: input })

        }
    }

    fetchUser = async (tokenValue)=>{
        let data = await fetch(`http://10.0.2.2:3000/comments?Token=${tokenValue}`)
        .then(response=>{
            if(response.ok){
                return response.json()
            }
            else{
                console.warn('check your connection')
            }
        })
        .then(result=>{
            if(result.length){
                console.log(result[0])
                return result[0]
            }
        })
        return data
    }

    retrieveData= async () => {
        try { 
            const token = await AsyncStorage.getItem('TOKEN')
            console.log(token)
            if(token !== null) {
              const user = await this.fetchUser(token)
              console.log(user)
              if(user){
                  this.onSucceed(user.username)
              }
            }
        }catch(error){
            console.log(`'AsyncStorage Error ---->----> ${error}`)
        }
        
    }
componentDidMount(){
this.retrieveData()

}

    render() {
        return (
            <View style={styles.container} >
                <View style={styles.header}>
                </View>
                <View style={styles.body}>
                    <View style={styles.usernameWrapper}>

                        <TextInput 
                        placeholder={'username'} 
                        onChangeText={(username) => this.getInputs(username, 'username')}  
                        value={this.state.username} />

                    </View>
                    <View style={styles.passwordWrapper}>

                        <TextInput 
                        placeholder={'password'} 
                        onChangeText={(password) => this.getInputs(password, 'password')}  
                        value={this.state.password} />


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
        backgroundColor: 'gold',
        alignItems: 'center',
        justifyContent: 'center',
    },

    footer: {
        flex: 1,
        // backgroundColor:'lime'
    },

    succeedText:{
        color:'lime',
        fontSize:20
    },
    failText:{
        color:'red',
        fontSize:20
    }

})
const mapStateToProps = state => {

    return {
        loading: state.loading
    }
}



export default connect(mapStateToProps, { requestSignIn })(Login)
