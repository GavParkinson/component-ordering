import { Component, Input, OnInit } from '@angular/core';
import { ISortedOrder } from 'src/app/models/sorted-order';

@Component({
  selector: 'app-feature-container',
  templateUrl: './feature-container.component.html',
  styleUrls: ['./feature-container.component.scss']
})
export class FeatureContainerComponent implements OnInit {
  @Input() orders!: ISortedOrder[];

  constructor() { }

  ngOnInit(): void {
  }

}
