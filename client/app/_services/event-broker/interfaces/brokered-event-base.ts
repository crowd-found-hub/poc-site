import { IEventListener } from './event-listener';

export interface IBrokeredEventBase {
    name:string;
    emit( data: any ): void;
    listen( next: (data: any) => void ): IEventListener;
}