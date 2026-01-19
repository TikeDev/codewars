function order(words){
  if (words === '') return '';
  
  let wordsArr = words.split(' ');
  let resultArr = new Array(wordsArr.length);
​
  
  wordsArr.forEach((word) => {
    let pos;
    
    for (let i = 0; i<word.length; i++){
      if (parseInt(word[i])){
        pos = parseInt(word[i]);
        break;
      }
    }
      
    resultArr[pos-1] = word;
  });
  
  return resultArr.join(' ');
}