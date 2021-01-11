import {combineReducers} from 'redux'
import { taskReducer } from './taskReducer'
import {subTaskReducer} from './subTaskReducer'

const rootReducer = combineReducers({
    task: taskReducer,
    subTask: subTaskReducer
});

export default rootReducer