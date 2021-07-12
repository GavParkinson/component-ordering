import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-feature-d',
  templateUrl: './feature-d.component.html',
  styleUrls: ['./feature-d.component.scss']
})
export class FeatureDComponent implements OnInit {
  @Input() data!: Item;
  constructor() { }

  ngOnInit(): void {
  }

}
