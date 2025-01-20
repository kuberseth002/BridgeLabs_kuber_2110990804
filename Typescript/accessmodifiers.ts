// classes:a blueprint of an object

class Invoices{
  readonly client:string
  private details:string
  public amount:number //default class

  constructor(c:string, d:string, a:number){
    this.client=c;
    this.details=d;
    this.amount=a;
  }

  format(){
    return `${this.client} owes ${this.amount} for ${this.details}`
  }
}

const invones = new Invoice('kuber','work at college',250)
const invtwos = new Invoice('seth','work at college',5450)


let invoicess:Invoice[]=[]
invoices.push(invone)
invoices.push(invtwo)

invone.client='ks'
invtwo.amount=50
console.log(invone,invtwo);
 