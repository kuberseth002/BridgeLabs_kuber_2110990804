// promise .all utility

let promise1=new Promise((resolve,reject)=>{
  setTimeout(resolve,1000,"first")
})
let promise2=new Promise((resolve,reject)=>{
  setTimeout(resolve,20000,"second")
})

// let promise3=new Promise((resolve,reject)=>{
//   setTimeout(reject,3000,"third")
// })

// Promise.all(promise1,promise2,promise3)
// .then((values)=>{
//   console.log(values);
// }).catch((error)=>{
//   console.error(error);
// })


//promises Api's

function food(item,time){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(`${item} delivered`)
    },time)
  })
}


const pizza=food("pizza",2000);
const pasta=food("pasta",3000);
const drink=food("drink",1000);

Promise.all([pizza,pasta,drink]).then((result)=>{
  console.log("all items delivered");
  console.log(result);
  
})




//promise.race

function cab(company,time){
  return new Promise((resolve)=>{
    setTimeout(()=>{
    resolve(`${company} cab booked`)
  },time)
 })
}

const uber=cab("uber",2000);
const lyft=cab("lyft",3000);
const ola=cab("ola",1000)

Promise.race([uber,lyft,ola]).then((result)=>{
  console.log(result);
})


//allsetteled

function message(friend, success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      success ? resolve(`${friend} replied`) : reject(`${friend} ignored`);
    }, Math.random() * 2000);
  });
}

const friend1 = message("Alice", true);
const friend2 = message("Bob", false);
const friend3 = message("Charlie", true);

Promise.allSettled([friend1, friend2, friend3]).then((results) => {
  results.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log(result.value);
    } else {
      console.log(result.reason);
    }
  });
});


// promise.any 


function friend(friend, knowsAnswer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      knowsAnswer? resolve(`${friend} solved the problem`): reject(`${friend} doesn't know`);
    }, Math.random() * 2000);
  });
}

const friends1 = friend("Alice", false);
const friends2 = friend("Bob", true);
const friends3 = friend("Charlie", true);

Promise.any([friends1, friends2, friends3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("No one solved the problem.");
  });
