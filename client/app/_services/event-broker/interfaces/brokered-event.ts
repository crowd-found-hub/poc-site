import { IBrokeredEventBase } from './brokered-event-base';
import { IEventListener } from './event-listener';

export interface IBrokeredEvent<T> extends IBrokeredEventBase  {
    emit( data: any ): void;
    listen( next: (data: any) => void ): IEventListener;
}