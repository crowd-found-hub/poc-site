import { Subject }    from 'rxjs/Subject';
import { EventListener } from './event-listener';
import { IEventListener } from './interfaces/event-listener';
import { IBrokeredEvent } from './interfaces/brokered-event';

export class BrokeredEvent<T> implements IBrokeredEvent<T> {
    private _subject: Subject<T>;
    constructor( public name: string ) {
        this._subject = new Subject<T>();
    }
    public emit( data: T ): void {
        this._subject.next(data);
    }
    public listen(next: (value: T) => void): IEventListener {
        return new EventListener(this._subject.subscribe( next ));
    }
}