import { Component } from '@angular/core';
import { FeatureAComponent, FeatureBComponent, FeatureCComponent, FeatureDComponent, IntroductionComponent } from './features';
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
}
