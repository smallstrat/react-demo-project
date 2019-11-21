
let initState = {
  todolist: [1,2,3,4]
}

export default function todoReducer(state=initState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      let newArr = [...state.todolist, action.payload]
      return {...state, ...{todolist: newArr}}
      break;
    default:
      return state
  }
}
