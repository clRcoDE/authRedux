
import { REQUEST_BEGINS, REQUEST_SUCCESS, REQUEST_FAILED } from '../types'


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
       default:
       return state
   }
}