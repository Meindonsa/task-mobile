import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input('title') title: any;

  constructor(private router: Router) {}

  ngOnInit() {}

  search() {
    this.router.navigate(['search']);
  }
}
