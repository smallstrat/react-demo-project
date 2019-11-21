import {
  createStore,
  combineReducers
} from 'redux'

import countReducer from './reducers/countReducer'
import todoReducer from './reducers/todoReducer'

// 合并所有的纯函数reducer，reducer用于改变store
const rootReducer = combineReducers({
  countReducer,
  todoReducer
})

// 创建store
const store = createStore(rootReducer)

export default store
