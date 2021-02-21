import { Injectable } from '@angular/core';
import { Email } from './email';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailHideService {
  EMAILS: Email[] = [
    { id: 1, address: 'info@solong.co.uk' },
    { id: 2, address: 'support@solong.co.uk' },
    { id: 3, address: 'legal@solong.co.uk' }
  ];
  constructor() { }

  getEmails(): Observable<Email[]> {
    return of(this.EMAILS);
  }
}
