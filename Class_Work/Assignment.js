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
//1.Generate 5 random 3-digit numbers
const randomNumbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 900 + 100));

console.log("Random 3-Digit Numbers:", randomNumbers);

const minValue = Math.min(...randomNumbers);
const maxValue = Math.max(...randomNumbers);

console.log(`Minimum Value: ${minValue}`);
console.log(`Maximum Value: ${maxValue}`);



//2.find date range
function isDateInRange(day, month) {
  if (month === 3 && day >= 20) { 
    return true; 
  } else if (month > 3 && month < 6) { 
    return true;
  } else if (month === 6 && day <= 20) { 
    return true;
  } else {
    return false;
  }
}

const day = 21;
const month = 5; 

console.log(isDateInRange(day, month));



// 3.find leap year
function isLeapYear(year) {
  if (year < 1000 || year > 9999) {
    return "Please enter a valid 4-digit year.";
  }

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a Leap Year.`;
  } else {
    return `${year} is not a Leap Year.`;
  }
}

const year = 2000;
console.log(isLeapYear(year));



//4.coin flip
const coinFlip = Math.random() < 0.5 ? "Heads" : "Tails";
console.log(`Coin Flip Result: ${coinFlip}`);




function numberToWord(number) {
  const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
  if (number >= 0 && number <= 9) {
    return words[number];
  } else {
    return "Invalid input. Enter a single-digit number.";
  }
}

console.log(numberToWord(5));
console.log(numberToWord(12)); 


function numberToWeekday(number) {
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  if (number >= 1 && number <= 7) {
    return weekdays[number - 1];
  } else {
    return "Invalid input. Enter a number between 1 and 7.";
  }
}

console.log(numberToWeekday(1)); 
console.log(numberToWeekday(8)); 





function displayPlaceValue(number) {
  const placeValues = {
    1: "Unit",
    10: "Ten",
    100: "Hundred",
    1000: "Thousand",
    10000: "Ten Thousand",
    100000: "Lakh",
  };

  return placeValues[number] || "Invalid input. Enter a valid place value (1, 10, 100, 1000, etc.).";
}

console.log(displayPlaceValue(1)); 
console.log(displayPlaceValue(100)); 
console.log(displayPlaceValue(500)); 







function Operations(a, b, c) {
  const results = {
    operation1: a + b * c, 
    operation2: a % b + c, 
    operation3: c + a / b, 
    operation4: a * b + c  
  };

  const values = Object.values(results);
  const max = Math.max(...values);
  const min = Math.min(...values);

  return { results, max, min };
}

const { results, max, min } = Operations(5, 3, 2);
console.log("Results:", results);
console.log("Maximum:", max);
console.log("Minimum:", min);



//switch statement:

const number=2
switch(number){
  case 1:console.log("one");
  break


  case 2:console.log("two");
  break

  case 3:console.log("three");
  break
  
  case 4:console.log("four");
  break

  case 5:console.log("five");
  break

  case 6:console.log("six");
  break

  default:"invalid input"
}




let weekdays=4

switch(weekdays){
  case 1:console.log("it is a monday");
  break;

  case 2:console.log("it is a tuesday");
  break;

  case 3:console.log("it is a wednesday");
  break;

  case 4:console.log("it is a thursday");
  break;

  case 5:console.log("it is a friday");
  break;

  case 6:console.log("it is a saturday");
  break;

  case 7:console.log("it is a sunday,Holiday!!");
  break;

  default:console.log("no day ,invalid inpuit");
  
}




let unit=3

switch(unit){
  case 1:console.log("10");
  break;

  case 2:console.log("100");
  break;

  case 3:console.log("1000");
  break;

  default:console.log("invalid inpuit");
  
}






