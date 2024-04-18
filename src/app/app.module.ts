import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { FormsModule } from '@angular/forms';
import { PlanComponent } from './plan/plan.component';
import { RechargeFormComponent } from './recharge-form/recharge-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SubscriberComponent,
    PlanComponent,
    RechargeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
