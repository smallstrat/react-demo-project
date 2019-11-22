import {
  SONG_ADD,
  SONG_GET_LIST
} from '../actionTypes'

let initState = {
  list: []
}

export default function songReducer(state=initState, action) {
  switch (action.type) {
    case SONG_ADD:
      let list = [...state.list, action.payload]
      return { ...state, ...{list} }
      break
    case SONG_GET_LIST:      
      return { ...state, ...{list:[...state.list, ...action.payload]} }
      break;
    default:
      return state
  }
}
