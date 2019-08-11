
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
import { VRShooterRoutingModule } from './vr-shooter-routing.module';
import { VRShooterComponent } from './vr-shooter.component';

@NgModule({
  declarations: [
    VRShooterComponent
  ],
  imports: [
    VRShooterRoutingModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VRShooterModule { }
