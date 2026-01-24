function dirReduc(arr){ 
  let pairs2Reduce = {
    "NORTH":"SOUTH",
    "SOUTH":"NORTH",
    "EAST":"WEST",
    "WEST":"EAST",    
  }
  
  // recursively remove pairs that cancel out
  return reduceRec(arr, pairs2Reduce);
}
​
function reduceRec(arr, pairs2Reduce){
  let len = arr.length;
  
  // remove adjacent pairs of directions that cancel out
  for (let i = 0; i < arr.length; i++){
    let curr = arr[i], next = arr[i+1];
    if (curr === pairs2Reduce[next]){
      arr.splice(i,2);
    }
  }  
  
  // if length has changed, gotta reduce more
  if (arr.length !== len)
     reduceRec(arr, pairs2Reduce);
​
  return arr;
}