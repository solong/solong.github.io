import { Component, OnInit } from '@angular/core';
import { EmailHideService } from '../email-hide.service';
import {Email} from '../email';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private emailHideService: EmailHideService) { }

  info: Email = { id: 1, address: 'Click to show address' };
  support: Email = { id: 2, address: 'Click to show address' };
  legal: Email = { id: 3, address: 'Click to show address' };

  ngOnInit(): void {
  }

  public getInfo(): void {
    this.emailHideService.getEmails().subscribe(emails => this.info = emails[0]);
  }

  public getSupport(): void {
    this.emailHideService.getEmails().subscribe(emails => this.support = emails[1]);
  }

  public getLegal(): void {
    this.emailHideService.getEmails().subscribe(emails => this.legal = emails[2]);
  }

}
