import * as actions from '../actions';

describe('actions', () => {
  it('should have a type of CREATE_USER', () => {
    const mockUser = {
      id: 1,
      firstName: 'Alyssa',
      lastName: 'Lundgren',
      feeling: 'Happy'
    };
    const expectedAction = {
      type: 'CREATE_USER',
      user: {
        id: 1,
        firstName: 'Alyssa',
        lastName: 'Lundgren',
        feeling: 'Happy'
      }
    };
    const result = actions.createUser(mockUser);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of REMOVE_USER', () => {
    const expectedAction = {
      type: 'REMOVE_USER'
    }
    const result = actions.removeUser();
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of HAS_ERRORED', () => {
    const mockError = 'ERRORRRR';
    const expectedAction = {
      type: 'HAS_ERRORED',
      errorMsg: 'ERRORRRR'
    }
    const result = actions.hasErrored(mockError)
    expect(result).toEqual(expectedAction)
  });

  // it('should have a type of ADD_MESSAGE', () => {
  //   const newMessage = {
  //     message: 'Some important message from the Doctor',
  //     isUser: false
  //   }
  //   const expectedAction = {
  //     type: 'ADD_MESSAGE',
  //     message: 'Some important message from the Doctor',
  //     isUser: false
  //   }
  //   const result = actions.addMessageToStore(newMessage);
  //   expect(result).toEqual(expectedAction)
  // })

  it('should have a type of CLEAR_MESSAGES', () => {
      const expectedAction = {
        type: 'CLEAR_MESSAGES'
      }
      const result = actions.clearStoredMessages();
      expect(result).toEqual(expectedAction)
  })
});
