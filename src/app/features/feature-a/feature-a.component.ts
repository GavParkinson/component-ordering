import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-feature-a',
  templateUrl: './feature-a.component.html',
  styleUrls: ['./feature-a.component.scss']
})
export class FeatureAComponent implements OnInit {

  @Input() data!: Item;
  constructor() { }

  ngOnInit(): void {
  }

}
