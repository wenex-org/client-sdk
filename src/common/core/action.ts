import { Action as WenexAction } from '@wenex/sdk/common/core';

enum Internal {}

export type Action = WenexAction | `${Internal}`;
