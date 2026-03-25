import { App, Client } from '@wenex/sdk/common/interfaces/domain';

export type Agent<Properties extends object = object> = { app?: Partial<App<Properties>>; client: Partial<Client<Properties>> };
