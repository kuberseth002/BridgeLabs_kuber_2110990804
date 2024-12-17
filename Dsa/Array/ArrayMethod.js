//Array length
let courses=["html","css","rule"]
console.log(courses.length);


//Array to string:arr.toString
let cours=["html","css","react","js"]
let str=cours.toString()
console.log(str);

//array join

let arr=["html","css","java"]
console.log(arr.join('|'));

//array delete

let emp={
  fname:"kuber",
  lname:"Seth",
  salary:40000
}
console.log(delete emp.salary);
console.log(emp);


//array concat:add all the array
let arr1=[1,2,3]
let arr2=[4,5,6]
let arr3=[7,8,9]

let newarr=arr1.concat(arr2,arr3)
console.log(newarr);


//array flat:merges all the given array

const ar=[['1','2'],['3','4','5',['6'],7]]

const fltarr=arr.flat()
console.log(fltarr);



//array.push

let numarr=[10,20,30,40,50];
numarr.push(60)
numarr.push(70,80,90)
console.log(numarr);

let strarr=["piyush","gaurav","kuber","ritu"]
strarr.push("sumit","amit")
console.log(strarr);


//unhsift:add elemt in fornt of array

let numArr=[20,30,40]

numArr.unshift(10,20)
console.log(numArr);

let strArr=["amit","sumit"];
strArr.unshift("sunil","anil")
console.log(strArr);


//pop:end of the array

let string=["amit","sumit","anil"]
string.pop()
console.log(string);


//shift:remove element from begining

let number=[20,30,40,50]
number.shift()
console.log(number);


//splice used to remove and add

let newar=[20,30,40,50]
newar.splice(1,3)
newar.splice(1,0,3,4,5)
console.log(newar);

//slice:return new arr bases of strt end index

const arr23=[1,2,3,4,5,6]
const case1=arr23.slice(3,4)
console.log(case1);


//some method:checks weather at least one elements of the array statifies the condition

function greater(element,index,array){
  return element>5
}
let array=[2,5,8,1,4]
let value=array.some(greater)
console.log(value);


//redduce:single value

let arr5=[88,50,25,10]
let sub=arr.reduce(geeks)

function geeks(total,num){
  return total-num
}
console.log(sub);
geeks()

//map
function geeks(){
  return arr.map(Math.sqrt)
}
let arrs=[4,9,16,25]
let subs=arr.map(geeks)

console.log(subs);

//array.reverse


//array values
const fruit=["mango","apple","cherry"]
const iterator=fruit.values()

for(const value of iterator){
  console.log(value);
  
}

//includes: element is present or not
let A=[1,2,3,4,5]
let a=A.includes(2)
console.log(a);


//sort:
let nums=[88,50,25,60]
let subss=nums.sort(geeks)

function geeks(a,b){
  return b-a
}
console.log(subss);


//fill used to fill array static value

let fill=[1,36,23,50,44]
fill.fill(87,1,3)
console.log(fill);

//

let ans=[45,235,100,4]
console.log(ans);
let new_arr=ans.reverse()
console.log(new_arr);


//indexof: find the index of array
let strings=['kuber','seth','hr']
console.log(strings.indexOf('hr'));

c