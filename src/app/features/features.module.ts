import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from './introduction/introduction.component';
import {
  FeatureAComponent,
  FeatureBComponent,
  FeatureCComponent,
  FeatureDComponent,
  FeatureContainerComponent,
  FeatureContainerFlexComponent
 } from './index';

@NgModule({
  declarations: [
    IntroductionComponent,
    FeatureAComponent,
    FeatureBComponent,
    FeatureCComponent,
    FeatureDComponent,
    FeatureContainerComponent,
    FeatureContainerFlexComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IntroductionComponent,
    FeatureContainerComponent,
    FeatureContainerFlexComponent
  ]
})
export class FeaturesModule { }
