import { RequestConfig } from '@wenex/sdk/common/core/types';
import type { AxiosInstance } from 'axios';
import { Agent } from '../../common';

export class PublicService {
  protected readonly url = (path?: string) => `/public${path ? `/${path}` : ''}`;

  constructor(protected axios: AxiosInstance) {}

  async agent<Properties extends object = object>(id: string, config?: RequestConfig): Promise<Agent<Properties>> {
    return (await this.axios.get<Agent<Properties>>(this.url(`${id}/agent`), config)).data;
  }

  static build(axios: AxiosInstance) {
    return new PublicService(axios);
  }
}
