import {Injectable} from '@angular/core';
import {IBrokeredEventBase} from './interfaces/brokered-event-base';
import {BrokeredEvent} from './brokered-event';
import {IEventListener} from './interfaces/event-listener';

@Injectable()
export class EventBrokerService {
    private _events: { [name: string]: IBrokeredEventBase };
    constructor() {
        this._events = {};
    }
    public register<T>(eventName: string ) : BrokeredEvent<T> {
        var event = this._events[eventName];
        if ( typeof event === 'undefined' ) {
            event = this._events[eventName] = new BrokeredEvent<T>(eventName);
        }
        return event as BrokeredEvent<T>;
    }
    public listen<T>(eventName: string, next: (value: T) => void) : IEventListener {
        return this.register<T>(eventName).listen(next);
    }
    public emit<T>(eventName: string, data: T) : void {
        return this.register<T>(eventName).emit(data);
    }
}