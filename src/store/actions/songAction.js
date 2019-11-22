import {
  SONG_ADD,
  SONG_GET_LIST
} from '../actionTypes'
import fetch from '@/utils/fetch'

// 同步actions  ==> Vuex Mutations
export function addSong(payload) {
  return {
    type: SONG_ADD,
    payload: payload
  }
}

// 异步数据  ==> Vuex Actions
export function getSongList(data) {
  return function(dispatch) {
    fetch('/db/song.json', 'GET', data, res=>{
      // 调接口成功时，发出第2个dispatch==>action
      dispatch({
        type: SONG_GET_LIST,
        payload: res
      })
    })
  }
}
