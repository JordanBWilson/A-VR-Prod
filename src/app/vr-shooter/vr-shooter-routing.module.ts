import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VRShooterComponent } from './vr-shooter.component';
// import { AuthGuard } from '../auth/auth.guard';




const routes: Routes = [
  {
    path: '',
    component: VRShooterComponent
    // canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VRShooterRoutingModule { }
