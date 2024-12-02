// let name="sss"
// function outerfun(){
//   // let name="kuber seth"

//   function innerfun(){
//     // let name="seth"
//     console.log(name);
    
//   }
//   innerfun()
// }
// outerfun()


function outer(){
  let name="kuber"  //iss namme ka reference function kai sath bind hogya h no copy  

  function inner(){
    console.log(name);
    
  }
  return inner;

}
let inner = outer()
inner();