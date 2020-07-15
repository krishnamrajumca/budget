const initialState = {
    loggedIn:false,
    logging:false,
    loginDetails:null,
    error:null
}
function loginReducer(state = initialState, action) {
    switch (action.type) {
        case "LOGIN_PENDING":
            return loginPending(state)
        case "LOGIN_SUCCESS":
            return loginSuccess(state,action.payload)
        case "LOGIN_FAILED":
                return loginFailed(state,action.error)
        default:
            return {...state}
    }
}


const loginPending = (state)=>{
    return {
        ...state,
        logging:true
    }
}

const loginSuccess = (state,payload)=>{
    return {
        ...state,
        loggedIn:true,
        logging:false,
        loginDetails:payload
    }
}
const loginFailed = (state,payload)=>{
    return {
        ...state,
        loggedIn:false,
        logging:false,
        loginDetails:null,
        error:payload
    }
}
export default loginReducer