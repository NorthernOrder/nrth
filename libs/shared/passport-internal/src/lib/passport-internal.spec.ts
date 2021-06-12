import { passportInternal } from './passport-internal';

describe('passportInternal', () => {
  it('should work', () => {
    expect(passportInternal()).toEqual('passport-internal');
  });
});
