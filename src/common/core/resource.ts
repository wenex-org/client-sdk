import { Resource as WenexResource } from '@wenex/sdk/common/core';

enum Internal {
  // Touch
  Touch = 'touch:all',
  TouchMails = 'touch:mails',
}

export type Resource = WenexResource | `${Internal}`;
