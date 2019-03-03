import { REQUEST_BEGINS, REQUEST_SUCCESS, REQUEST_FAILED } from '../types'


const requestBegins = () => {

    return {

        type: REQUEST_BEGINS,

    }
}


const requestSuccess = () => {
    return {
        type: REQUEST_SUCCESS
    }
}


const requestFailed = () => {
    return {
        type: REQUEST_FAILED
    }
}





/*****************************        thunk / callback / request server for username:password        *********************   */

// username, password, onSucceed, onFailed

export const requestSignIn = () => {

    return dispatch => {
        dispatch(requestBegins())
        
    }


}