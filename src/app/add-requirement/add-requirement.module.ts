import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRequirementRoutingModule } from './add-requirement-routing.module';
import { AddRequirementComponent } from './add-requirement.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AddRequirementComponent    
  ],
  imports: [
    CommonModule,
    AddRequirementRoutingModule,
    SharedModule
  ]
})
export class AddRequirementModule { }
