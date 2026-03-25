import { RepassType } from '../../../enums/auth';

export interface RepassRequest {
  type: RepassType;
  captcha: string;

  email?: string;
  phone?: string;

  password?: string;

  secret?: string;
}
