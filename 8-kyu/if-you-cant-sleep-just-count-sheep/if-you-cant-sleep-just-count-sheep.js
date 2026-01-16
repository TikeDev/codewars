var countSheep = function (num){
  let sleepStr = "";
  for (let i = 1; i <= num; i++)
    sleepStr += `${i} sheep...`;
  
  return sleepStr;
}