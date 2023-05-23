import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-element',
  templateUrl: './task-element.component.html',
  styleUrls: ['./task-element.component.scss'],
})
export class TaskElementComponent implements OnInit {
  @Input('task') task: any;

  constructor() {}

  ngOnInit() {}
}
