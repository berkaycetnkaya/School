import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TriggerService {

  constructor() { }

  private triggerEvent = new Subject<any>();

  triggerEvent$ = this.triggerEvent.asObservable();

  trigger(data: any) {
    this.triggerEvent.next(data);
  }
}
