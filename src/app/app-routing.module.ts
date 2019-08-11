import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';

const routes: Routes = [
  { path: 'vr-shooter',
    loadChildren: './vr-shooter/vr-shooter.module#VRShooterModule',
    pathMatch: 'full'
  },
  { path: '',
    redirectTo: '/vr-shooter',
    pathMatch: 'full'
  },
  { path: '**',
    loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {

    preloadingStrategy: PreloadAllModules // <-This will load the other modules once the first module loads
  }

    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
