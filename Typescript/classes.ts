// classes:a blueprint of an object

class Invoice{
  client:string
  details:string
  amount:number

  constructor(c:string, d:string, a:number){
    this.client=c;
    this.details=d;
    this.amount=a;
  }

  format(){
    return `${this.client} owes ${this.amount} for ${this.details}`
  }
}

const invone = new Invoice('kuber','work at college',250)
const invtwo = new Invoice('seth','work at college',5450)


let invoices:Invoice[]=[]
invoices.push(invone)
invoices.push(invtwo)

invone.client='ks'
invtwo.amount=50
console.log(invone,invtwo);
