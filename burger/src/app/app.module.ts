import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './orders/order/order.component';
import { OrderService } from './shared/order.service';
import { DateComponent } from './orders/date/date.component';
import { InfoOrderComponent } from './orders/info-order/info-order.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { SessionComponent } from './session/session.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SessionService } from './shared/session.service';
import { UserService } from './shared/user.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrderComponent,
    DateComponent,
    InfoOrderComponent,
    OrderListComponent,
    SessionComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    RouterModule.forRoot([
      {
        path: '',
        component: SessionComponent
    },
    {
      path: 'index',
      component: SessionComponent
  },
  {
      path: 'waiteron',
      component: OrdersComponent
    }
    ])
  ],
  providers: [OrderService, SessionService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }