export { GrantsService } from '@wenex/sdk/services/auth';
import type { AxiosInstance } from 'axios';
import { AuthClient } from '@wenex/sdk';

import { AuthsService } from './auths.service';

export * from './auths.service';

export class Client<Properties extends object = object> extends AuthClient<Properties> {
  protected override _auths?: AuthsService;

  constructor(readonly axios: AxiosInstance) {
    super(axios, '/-/');
  }

  override get auths() {
    return (this._auths = this._auths ?? AuthsService.build(this.axios));
  }

  static override build<Properties extends object = object>(axios: AxiosInstance) {
    return new Client<Properties>(axios);
  }
}
