import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  names: Array<{name: string, url: string}> = [
    {name: 'Home', url: '/home'},
    {name: 'Development', url: '/development'},
    {name: 'Consulting', url: '/consulting'},
    {name: 'Case Studies', url: '/case-studies'},
    {name: 'Open Source', url: '/open-source'},
    {name: 'Support', url: '/support'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
