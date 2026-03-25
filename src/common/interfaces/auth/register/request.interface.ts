import { OtpMethod } from '../../../enums';

export interface RegisterRequest {
  captcha: string;

  email?: string;
  phone?: string;

  username?: string;
  password?: string;

  method?: OtpMethod;

  terms: boolean;
}
