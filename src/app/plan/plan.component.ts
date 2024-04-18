import { Component, OnInit } from '@angular/core';
import { Plan } from '../plan';
import { PlanService } from '../plan.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.css'
})
export class PlanComponent implements OnInit{
  plans: Plan[] = [];

  popularPlans: Plan[] = [];
  validityPlans: Plan[] = [];
  dataPlans: Plan[] = [];
  unlimitedDataPlans: Plan[] = [];



  


  constructor(private planService: PlanService, private router: Router) { }

  ngOnInit(): void {
    this.loadPlans();
    this,this.loadPlanss();
  }

  loadPlanss(): void {
    this.planService.getAllPlans().subscribe(
      plans => this.plans = plans,
      error => console.error('Error fetching plans:', error)
    );
  }

  openRechargeForm(plan: Plan): void {
    this.router.navigate(['/recharge'], { queryParams: { plan: JSON.stringify(plan) } });
  }


  loadPlans(): void {
    this.planService.getAllPlans()
      .subscribe(plans => this.plans = plans);

      console.log(this.plans);

      this.plans.forEach(plan => {
        switch (plan.name) {
          case "Popular plans":
            this.popularPlans.push(plan);
            
            break;
            console.log(this.popularPlans);
          case "Validity plans":
            this.validityPlans.push(plan);
            break;
          case "Data plans":
            this.dataPlans.push(plan);
            break;
          case "Unlimited Data plans":
            this.unlimitedDataPlans.push(plan);
            break;
          default:
            break;
        }
      });

      console.log(this.dataPlans)
  }

  
}
