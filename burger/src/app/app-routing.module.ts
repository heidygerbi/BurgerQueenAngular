import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
// import { AppComponent } from './app.component';
import { SessionComponent } from './session/session.component';

const routes: Routes = [
  {path: 'waiteron' , component: OrdersComponent},
  {path: 'index' , component: SessionComponent}];
//     {
//       path: '',
//       component: SessionComponent
//   },
//   {
//     path: 'index',
//     component: SessionComponent
//   },
//   {
//     path: 'waiteron',
//     component: OrdersComponent
//   }
// ];
  // )
// ],
//   {path: 'waiteron' , component: OrdersComponent},
//   {path: 'index' , component: AppComponent},
//   {path: '', pathMatch: 'full', redirectTo: 'index'}];
// ,{path: '#kitchen' , component: OrderskitchenComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
