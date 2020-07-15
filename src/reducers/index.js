import { combineReducers } from 'redux'
import loginReducer from './loginReducer'

function loader(state = false, action) {
    switch (action.type) {
        case "LOADER":
            return action.payload
         default:
             return state
    }
}
const rootReducer = combineReducers({
    loginReducer,
    loader
  })
  export default rootReducer