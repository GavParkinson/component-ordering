import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  @Input() data!: Item;
  constructor() { }

  ngOnInit(): void {
  }

}
