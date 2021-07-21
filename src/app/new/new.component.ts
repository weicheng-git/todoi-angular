import { Component, OnInit } from '@angular/core';
import { TodoiBase } from '../types/vars';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.less'],
})
export class NewComponent implements OnInit {
  new: TodoiBase = {
    title: '',
    id: 0,
    createTime: new Date(),
    checked: false,
  };
  constructor() {}

  ngOnInit(): void {}
}
