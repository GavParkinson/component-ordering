import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-container-flex',
  templateUrl: './feature-container-flex.component.html',
  styleUrls: ['./feature-container-flex.component.scss']
})
export class FeatureContainerFlexComponent implements OnInit {
  @Input() orders!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
