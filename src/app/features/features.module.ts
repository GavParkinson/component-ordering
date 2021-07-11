import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from './introduction/introduction.component';
import {
  FeatureAComponent,
  FeatureBComponent,
  FeatureCComponent,
  FeatureDComponent,
  FeatureContainerComponent,
  FeatureContainerFlexComponent,
  GuestCardComponent,
  UserCardComponent,
  ProfileComponent,
  ProfileHostDirective
 } from './index';


@NgModule({
  declarations: [
    IntroductionComponent,
    FeatureAComponent,
    FeatureBComponent,
    FeatureCComponent,
    FeatureDComponent,
    FeatureContainerComponent,
    FeatureContainerFlexComponent,
    GuestCardComponent,
    UserCardComponent,
    ProfileComponent,
    ProfileHostDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IntroductionComponent,
    FeatureContainerComponent,
    FeatureContainerFlexComponent,
    ProfileComponent,
    ProfileHostDirective
  ]
})
export class FeaturesModule { }
