import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { FullwidthComponent } from './layout/fullwidth/fullwidth.component';

const routes: Routes = [
  {
     path: 'home',
     component: DefaultComponent,
   },

   {path: '',
    component: FullwidthComponent,
// children:[
// {
//   path:'login',
//   component: LoginComponent
// }]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
