import axios from 'axios';

import { ClientKit } from '../src';

describe('test client kit', () => {
  it('should define client instance', () => {
    expect(ClientKit.build(axios.create())).toBeDefined();
  });
});
