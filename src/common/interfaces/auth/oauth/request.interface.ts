import { AuthSource } from '@wenex/sdk/common/enums/auth';

export interface OAuthRequest {
  code: string;
  source: AuthSource;
  captcha: string;
}
