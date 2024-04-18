import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanComponent } from './plan/plan.component';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { RechargeFormComponent } from './recharge-form/recharge-form.component';

const routes: Routes = [{ path: 'plan', component: PlanComponent},
{path :'validate', component:SubscriberComponent
},{path:'recharge',component:RechargeFormComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
