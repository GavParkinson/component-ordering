import { Component } from '@angular/core';
import { FeatureAComponent, FeatureBComponent, FeatureCComponent, FeatureDComponent, IntroductionComponent, Item } from './features';
import { ComponentDataType } from './models/component-data-type';
import { ISortedOrder } from './models/sorted-order';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'component-ordering';

  orders: any =  {
    featureA: 5,
    featureB: 3,
    featureC: 1,
    featureD: 4,
    introduction: 2
  }

  sortedOrders: ISortedOrder[] = [
    {index: 2, component: IntroductionComponent},
    {index: 5, component: FeatureAComponent},
    {index: 3, component: FeatureBComponent},
    {index: 1, component: FeatureCComponent},
    {index: 4, component: FeatureDComponent},
  ].sort((a,b) => a.index > b.index ? 1 : -1);

  itemsWithData: ComponentDataType[] = [
    {name: 'introduction', data: new Item(1,2,'This is an introduction','Some more intro here','Intro again')},
    {name: 'featureA', data: new Item(2,5,'one','a','alpha')},
    {name: 'featureB', data: new Item(3,3,'two','b','bravo')},
    {name: 'featureC', data: new Item(4,1,'three','c','charlie')},
    {name: 'featureD', data: new Item(5,4,'four','d','delta')},
  ].sort((a,b) => a.data.index > b.data.index ? 1 : -1);
}
