export const messages = (state=[], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return action
    default:
      return state;
  }
}