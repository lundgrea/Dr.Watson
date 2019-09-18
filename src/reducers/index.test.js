import { errorMsg } from '../reducers/errorMsg';
import { user } from '../reducers/user'

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
});