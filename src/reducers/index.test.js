import { errorMsg } from '../reducers/errorMsg';
import { user } from '../reducers/user';
import { messages } from '../reducers/messagesReducer';

describe('errorMsg', () => {
  it('should return the initial state', () => {
    const expected = '';
    const result = errorMsg(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should update the error message', () => {
    const mockAction = {
      type: 'HAS_ERRORED',
      errorMsg: 'error message'
    }
    const results = errorMsg(undefined, mockAction)
    expect(results).toEqual('error message')
  });
});

describe('user', () => {
  it('should return the initial state', () => {
    const expected = null;
    const result = user(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should update the store with the user', () => {
    const mockUser = {
      id: 1,
      firstName: 'Alyssa',
      lastName: 'Lundgren',
      feeling: 'Happy'
    };
    const mockAction = {
      type: 'CREATE_USER',
      user: mockUser
    }
    const result = user(undefined, mockAction);
    expect(result).toEqual(mockUser)
  })

  it('should remove a user from the store', () => { 
    const mockAction = {
      type: 'REMOVE_USER'
    };
    const result = user(undefined, mockAction)
    expect(result).toEqual(null)
  });
});


describe('messages', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = messages(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should update the store with a new message', () => {
    const mockMessage = {
      message: 'Some very important message from the Doctor',
      isUser: false
    }
    const mockAction = {
      type: 'ADD_MESSAGE',
      message: 'Some very important message from the Doctor',
      isUser: false
    }
    const result = messages(undefined, mockAction)
    expect(result).toEqual([mockMessage])
  });

  it('should remove the messages from the store', () => {
    const mockEarlyState = [{message:'Some very important message from the Doctor', isUser: false}]
    const mockAction = {
      type: 'CLEAR_MESSAGES'
    }
    const result = messages(mockEarlyState, mockAction)
    expect(result).toEqual([])
  });
});