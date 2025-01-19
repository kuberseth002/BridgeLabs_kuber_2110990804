//async code


async function getdata() {
  setTimeout(function(){
    console.log("inside async code");
  },3000)
}
let res=getdata()


//await:->



//fetch Api


async function data() {
//get requst
  let response= await fetch('https://jsonplaceholder.typicode.com/posts')    //async task
  //parse data ->async
  let data=await response.json()
 console.log(data); 
}
data()
   

//scenario
//prepare url/api endpoint--> sync
//await //fetch data:-->network call->async   flow of execution stop krdiya jaise recieve hogya next line mai chla jaye ga
//process data->print-->sync


//using post request

const header= new Headers();
header.append("Content-type","application/json")

const url="https://jsonplaceholder.typicode.com/posts"

const options={
  method:"POST",
  body:JSON.stringify({username:"kuber seth"}),
  headers:header,
};

async function getdata() {
  const response = await fetch(url)
  let data = await response.json()
  console.log("get data response:", data);
  
  
}

async function postdata() {
  const response = await fetch(url,options)
  let data=await response.json();
  console.log("post data response:",data);
}

async function processdata(){
  await postdata()
  await getdata()
}
processdata()

