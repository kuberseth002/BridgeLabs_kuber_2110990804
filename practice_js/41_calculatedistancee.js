function calcdistance([x1,y1],[x2,y2]){
  let distance=Math.sqrt((x2-x1)**2+(y2-y1)**2)
  return distance
 
}
let x=[3,4]
let y=[5,7]
console.log(calcdistance(x,y));
 