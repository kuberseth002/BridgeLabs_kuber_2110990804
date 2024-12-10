//using repl
//1.single digit
const singledigit = Math.floor(Math.random()*10)
console.log("single digit:" +singledigit);

//2.dice number
const dice = Math.floor(Math.random()*6)
console.log("dice number:" +dice);


//3.add two dice number

const dice1=Math.floor(Math.random()*6)+1
const dice2=Math.floor(Math.random()*6)+1
const sum  = dice1+dice2

console.log("dice1:" +dice1);
console.log("dice2:" +dice2);
console.log("sum is:"+sum);


//4.calculate sum and find average

// const num=[]
// let sum1=0
// for(let i=0;i<5;i++){
//   const num = Math.floor(Math.random()*90)+10
//   num.push(num)
//   sum+=num;
// }

// const average = sum1/num
// console.log("num",num);
// console.log("sum",sum1);
// console.log("Average",average);


//5.unit conversion:

const inches = 42;
const feet = inches / 12;
console.log(`${inches} inches is equal to ${feet} feet.`);

//b part
const lengthFeet = 60;
const widthFeet = 40;
const lengthMeters = lengthFeet * 0.3048;
const widthMeters = widthFeet * 0.3048;
console.log(`Plot dimensions: ${lengthMeters} meters x ${widthMeters} meters.`);

//c part

const areaOnePlot = lengthMeters * widthMeters;
const totalAreaMeters = areaOnePlot * 25;
const totalAreaAcres = totalAreaMeters / 4046.86;
console.log(`Total area of 25 plots: ${totalAreaAcres.toFixed(2)} acres.`);







//if else

const coinFlip = Math.random() < 0.5 ? "Heads" : "Tails";
console.log(`Coin Flip Result: ${coinFlip}`);


