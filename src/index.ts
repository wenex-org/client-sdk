import { AxiosInstance } from 'axios';
import { Platform } from '@wenex/sdk';

import * as Services from './services';

export * from './services';

export class ClientKit<Properties extends object = object> extends Platform<Properties> {
  constructor(readonly axios: AxiosInstance) {
    super(axios, '/-/');
  }

  protected _public?: Services.PublicClient;

  get public() {
    return (this._public = this._public ?? Services.PublicClient.build(this.axios));
  }

  // ***************************
  // Platform Common Services
  // ***************************

  protected override _auth?: Services.AuthClient<Properties>;

  override get auth() {
    return (this._auth = this._auth ?? Services.AuthClient.build<Properties>(this.axios));
  }

  static override build<Properties extends object = object>(axios: AxiosInstance) {
    return new ClientKit<Properties>(axios);
  }
}
