import { Scope as WenexScope } from '@wenex/sdk/common/core';

enum Internal {
  // Touch
  SendTouchMails = 'send:touch:mails',
}

export type Scope = WenexScope | `${Internal}`;
