import { OtpMethod } from '../../enums/auth';

export interface OtpRequest {
  captcha: string;

  email?: string;
  phone?: string;

  username?: string;

  method?: OtpMethod;
}
