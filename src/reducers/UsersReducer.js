export default function usersReducer(state={users: []}, action) {
  switch(action.type) {
    case 'ADD_USER':
      return { ...state, users: state.users.concat(action.user) }
    default:
    return state
  }
}
