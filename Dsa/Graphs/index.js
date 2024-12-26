// function addEdge(mat,i,j){
//   mat[i][j]=1;
//   mat[j][i]=1;
// }
// function displaymatrix(mat){
//   for(const row of mat){
//     console.log(row.join(" "));
    
//   }
// }

// const v=4


// let mat=Array.from({length:v},()=>Array(v).fill(0));

// addEdge(mat,0,1);
// addEdge(mat,0,2);
// addEdge(mat,1,2);
// addEdge(mat,2,3);


// console.log("Matrix:");
// displaymatrix(mat)



//  using list


function addEdge(adj,i,j){
  adj[i].push(j);
  adj[j].push(i);
}


function displayadjlist(adj){
  for(let i =0;i<adj.length;i++){
    console.log(`${i}`);

    for(const j of adj[i]){
      console.log(`${j}`);
      
    }
    console.log();
  }
}


const v1 = 4;
const adj = Array.from({length:v1},()=>[])


addEdge(adj,0,1);
addEdge(adj,0,2);
addEdge(adj,1,2);
addEdge(adj,2,3);

console.log("Adjacent matrix:");
displayadjlist(adj);

