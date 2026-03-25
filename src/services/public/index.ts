import type { AxiosInstance } from 'axios';

import { PublicService } from './public.service';

export * from './public.service';

export class Client {
  protected _public?: PublicService;

  constructor(readonly axios: AxiosInstance) {}

  get public() {
    return (this._public = this._public ?? PublicService.build(this.axios));
  }

  static build(axios: AxiosInstance) {
    return new Client(axios);
  }
}
