import { Component, OnInit } from '@angular/core';
import { Plan } from '../plan';
import { ActivatedRoute } from '@angular/router';
import { Recharge } from '../recharge';
import { Subscriber } from '../subscriber';
import { RechargeService } from '../recharge.service';
import { SubscriberService } from '../subscriber.service';


@Component({
  selector: 'app-recharge-form',
  templateUrl: './recharge-form.component.html',
  styleUrl: './recharge-form.component.css'
})
export class RechargeFormComponent implements OnInit {
 
  sub_id :number | undefined
  selectedPlan!: Plan;
  subscriber!: Subscriber;
  rechargeSuccess: boolean = false;
  subscribe_name: string='';
  paymentMethod: string = ''; 
  subscribe_id!: number; 
  recharge: Recharge = new Recharge(); // Creating a new instance of Recharge



  constructor(private route: ActivatedRoute,
    private rechargeService: RechargeService,
    private subscriberService: SubscriberService
  ) { }

  ngOnInit(): void {
    
    
    this.route.queryParams.subscribe(params => {
      console.table(params); //
      if (params['plan']) {
        this.selectedPlan = JSON.parse(params['plan']) as Plan;
        
      }
      

      
    });
    
   
  }

  
  submitRechargeForm() {
    console.log(this);
    console.log("abcdddd");
    this.recharge.plan = this.selectedPlan;
    // Set subscriber, rechargeDate, planExpirationDate, and paymentMethod
    this.sub_id=this.subscribe_id;
    
    this.subscriberService.getSubscriberByName(this.subscribe_name).subscribe(subscriber => {
      this.subscriber = subscriber;
      if (this.subscriber) {
        
        this.recharge.subscriber =  this.subscriber;
        console.log("this.subscriber",this.subscribe_id);
        this.recharge.rechargeDate = new Date(); // Example: Set to current date
        this.recharge.planExpirationDate = this.calculateExpirationDate(); // Calculate expiration date
        this.recharge.paymentMethod = this.paymentMethod;
        
        console.log(this.recharge,"this is recharge:");
        
        // Submit recharge after subscriber details are fetched
        const subscriberJson = this.subscriber;
        this.rechargeService.submitRecharge(this.recharge).subscribe((e) => {
          
          // Handle success
          console.log("Handle success");
          this.rechargeSuccess=true;
        }, error => {
          // Handle error
        });
      }
    });
  }


  calculateExpirationDate(): Date {
    const rechargeDate = new Date(this.recharge.rechargeDate); // Convert to Date object
    const expirationDate = new Date(rechargeDate.getTime() + (28 * 24 * 60 * 60 * 1000)); // Add 28 days
    return expirationDate;
  }
}
