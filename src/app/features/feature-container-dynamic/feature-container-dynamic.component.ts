import { Component, ComponentFactoryResolver, Input, OnInit } from '@angular/core';
import { ComponentDataType } from 'src/app/models/component-data-type';
import {
  FeatureAComponent,
  FeatureBComponent,
  FeatureCComponent,
  FeatureDComponent,
  CompType,
  Item } from '../index'
import { IntroductionComponent } from '../introduction/introduction.component';

@Component({
  selector: 'app-feature-container-dynamic',
  templateUrl: './feature-container-dynamic.component.html',
  styleUrls: ['./feature-container-dynamic.component.scss']
})
export class FeatureContainerDynamicComponent implements OnInit {
  @Input() items!: ComponentDataType[];
  components: CompType[] = [];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  addComponent(type: string, data: Item) {
    let component: any;
    switch(type) {
      case 'introduction':
        component = IntroductionComponent;
        break;
      case 'featureA':
        component = FeatureAComponent;
        break;
      case 'featureB':
        component = FeatureBComponent;
        break;
      case 'featureC':
        component = FeatureCComponent;
        break;
      case 'featureD':
        component = FeatureDComponent;
        break;
      default:
        return;
    }

    const childComponent = this.componentFactoryResolver.resolveComponentFactory(component);

    // Set data here
    let compAndData = new CompType();
    compAndData.component = childComponent;
    compAndData.data = data;
    this.components.push(compAndData);
  }

  // getComponentData() {
  //   this.components.forEach(component => {
  //     // Access data from all components
  //     console.log(component.data);
  //   })
  // }

  // onCompDataChanged(item: Item) {
  //   console.log('Item:', item);
  //   const comp = this.components.filter(a => a.data.id === item.id);
  //   comp[0].data = item;
  // }

  ngOnInit(): void {
    this.items.forEach(item => {
      this.addComponent(item.name, item.data);
    })
  }

}
