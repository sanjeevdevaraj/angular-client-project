import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterClientComponent } from './index/client-detail/register-client/register-client.component';
import { ViewClientComponent } from './index/client-detail/view-client/view-client.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'registerClient', pathMatch: 'full'
  },
  {
    path: 'registerClient',
    component: RegisterClientComponent
  },
  {
    path: 'viewClient',
    component: ViewClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
