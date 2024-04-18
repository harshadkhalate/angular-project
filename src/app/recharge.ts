import { Plan } from "./plan";
import { Subscriber } from "./subscriber";

export class Recharge {

    id?: number; // Optional since it's automatically generated
  subscriber!: Subscriber;
  plan!: Plan;
  rechargeDate!: Date;
  planExpirationDate!: Date;
  paymentMethod!: string;

  

}
