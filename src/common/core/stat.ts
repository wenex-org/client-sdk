import { StatKey as WenexStatKey } from '@wenex/sdk/common/core';

enum Internal {
  // Touch
  TOUCH_COUNT__SEND_MAILS = 'TOUCH_COUNT__SEND_MAILS',
}

export type StatKey = WenexStatKey | `${Internal}`;
