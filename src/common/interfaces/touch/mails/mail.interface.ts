import { EmailSendDto } from '@wenex/sdk/common/interfaces/touch';
import { TemplateType } from '../../../enums/touch';

export type Mail =
  | {
      template: TemplateType.WELCOME;
      options: Omit<EmailSendDto, 'html' | 'text'>;
      context?: never;
    }
  | {
      template: TemplateType.OTP_CODE;
      options: Omit<EmailSendDto, 'html' | 'text'>;
      context: {
        otp_code?: string;
      };
    }
  | {
      template: TemplateType.VERIFICATION;
      options: Omit<EmailSendDto, 'html' | 'text'>;
      context: {
        confirmation_code?: string;
        verification_state?: string;
      };
    }
  | {
      template: TemplateType.RESET_PASSWORD;
      options: Omit<EmailSendDto, 'html' | 'text'>;
      context?: {
        secret?: string;
      };
    };

export interface MailContext {
  // Repass
  secret?: string;

  // Otp Code
  otp_code?: string;

  // Registration
  confirmation_code?: string;
  verification_state?: string;
}

export interface IMail {
  template: TemplateType;
  options: Omit<EmailSendDto, 'html' | 'text'>;
  context?: MailContext;
}
