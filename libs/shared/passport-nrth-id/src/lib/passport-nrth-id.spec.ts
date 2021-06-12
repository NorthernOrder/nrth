import { passportNrthId } from './passport-nrth-id';

describe('passportNrthId', () => {
  it('should work', () => {
    expect(passportNrthId()).toEqual('passport-nrth-id');
  });
});
