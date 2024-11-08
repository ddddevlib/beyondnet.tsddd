import { jest } from '@jest/globals';

describe('Main function', () => {
  it('should log "Hello World"', () => {
    console.log = jest.fn();
    require('../src/main');
    expect(console.log).toHaveBeenCalledWith('Hello World');
  });
});
