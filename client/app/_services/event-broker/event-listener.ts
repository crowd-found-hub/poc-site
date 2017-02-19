import { Subscription } from 'rxjs/Subscription';
import { IEventListener } from './interfaces/event-listener';

export class EventListener implements IEventListener {
    constructor( private _subscription: Subscription ) {
    }
    public ignore() : void {
        this._subscription.unsubscribe();
    }
}