import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-feature-c',
  templateUrl: './feature-c.component.html',
  styleUrls: ['./feature-c.component.scss']
})
export class FeatureCComponent implements OnInit {
  @Input() data!: Item;
  constructor() { }

  ngOnInit(): void {
  }

}
