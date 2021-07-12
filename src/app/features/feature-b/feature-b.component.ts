import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-feature-b',
  templateUrl: './feature-b.component.html',
  styleUrls: ['./feature-b.component.scss']
})
export class FeatureBComponent implements OnInit {

  @Input() data!: Item;
  constructor() { }

  ngOnInit(): void {
  }

}
