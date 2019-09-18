export const messages = (state=[], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [...messages, {message: action.message, isUser: action.isUser}]
    default:
      return state;
  }
}
