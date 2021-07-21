/**
 * 封装 popper
 */

import { Component, OnInit } from '@angular/core';
import { createPopper } from '@popperjs/core';

@Component({
  selector: 'app-popper',
  templateUrl: './popper.component.html',
  styleUrls: ['./popper.component.less'],
})
export class PopperComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const popcorn = document.querySelector('#popcorn');
    const tooltip = document.querySelector('#tooltip');
    console.log(popcorn);

    createPopper(popcorn as HTMLElement, tooltip as HTMLElement, {
      placement: 'bottom',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
    });
  }
}
