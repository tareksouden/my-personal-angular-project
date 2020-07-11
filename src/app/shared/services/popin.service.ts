import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable()
export class PopinService {

private subject = new Subject<{ visible: boolean, message: string }>();
popinObs$ = this.subject.asObservable();

personId:string;

popinObj: { visible: boolean, message: string };

displayPopin(messageToShow, personId) {
        this.popinObj = { visible: true, message: messageToShow }
        this.subject.next(this.popinObj);
        this.personId = personId;
    }
}
