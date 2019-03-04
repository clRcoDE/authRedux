
import { REQUEST_BEGINS, REQUEST_SUCCESS, REQUEST_FAILED } from '../types'

import {AsyncStorage} from 'react-native'

const initialState={
    loading:false,
}

export default rootReducer =(state=initialState , action)=>{


   switch(action.type){
       case  REQUEST_BEGINS:
       return{
           ...state,
           loading:true
       }
       case REQUEST_SUCCESS:
       this.storeToken(action.token)
       return {
           ...state,
           loading:false,

       }
       case REQUEST_FAILED:
       return{
           ...state,
           loading:false
       }
       default:
       return state
   }
}


storeToken = async (token) => {
    try{
        await AsyncStorage.setItem('TOKEN',token)
        console.log('data stored sucessfully !!')
    }catch{
        console.log('cant store data')
    }
}