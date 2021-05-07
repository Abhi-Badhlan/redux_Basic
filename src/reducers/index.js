import { combineReducers } from 'redux';
import redu from './incDec';
import redu2 from './mulDiv'
const rootReducer= combineReducers({
    redu,
    redu2

})
export default rootReducer;