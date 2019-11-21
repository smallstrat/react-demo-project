

export function addCount(payload) {
  return {
    type: 'ADD',
    payload: payload
  }
}

export function subCount(payload) {
  return {
    type: 'SUB',
    payload: payload
  }
}
