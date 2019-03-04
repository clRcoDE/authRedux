import { REQUEST_BEGINS, REQUEST_SUCCESS, REQUEST_FAILED } from '../types'







const requestBegins = () => {

    return {

        type: REQUEST_BEGINS,

    }
}


const requestSuccess = (result) => {
    return {
        type: REQUEST_SUCCESS,
        token:result.Token
    }
}


const requestFailed = () => {
    return {
        type: REQUEST_FAILED
    }
}





/*****************************        thunk / callback / request server for username:password        *********************   */

// username, password, onSucceed, onFailed

export const requestSignIn = ( username ,password ,  onSucceed , onFailed ) => {

    return dispatch => {
        dispatch(requestBegins())
        fetch(`http://10.0.2.2:3000/comments?username=${username}&password=${password}`)
        .then((response)=>{if(response.ok){return response.json()}})
        .then(result=>{
            if( result.length ){
                
dispatch(requestSuccess(result[0]))
onSucceed(username)
            }else{

                dispatch(requestFailed())
                onFailed()
            }
        })
        .catch(e=>{dispatch(requestFailed());alert('connection error')})


            // { return 
            // if(response.ok ){
            //     return response.json()
            // }
            // else{
            //    throw new Error(response.statusText)
            // }
        // }
        
        
        // ).then(result=> { 
        //     if(result[0].username === username){
        //         dispatch(requestSuccess())
        //         onSucceed()
        //     }else{
        //         dispatch(requestFailed())
        //         onFailed()
        //     }
        // } )
        
        
    }


}