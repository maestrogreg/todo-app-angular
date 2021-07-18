import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddClass: boolean = false;
  private subject = new Subject<any>()

  constructor() { }

  toggleAddTask():void {
    this.showAddClass = !this.showAddClass
    this.subject.next(this.showAddClass);
  }
  onToggle():Observable<any>{
      return this.subject.asObservable();
  }
}
