import { AuthsService as WenexAuthsService } from '@wenex/sdk/services/auth';
import type { AxiosInstance } from 'axios';

export class AuthsService extends WenexAuthsService {
  constructor(protected readonly axios: AxiosInstance) {
    super(axios, '/-/');
  }

  static override build(axios: AxiosInstance) {
    return new AuthsService(axios);
  }
}
