var encryptThis = function(text) {
  let textArr = text.split(' ');  // ["hello", "world"] // ["A"]
  
  let encArr = textArr.map((wordStr) => {
    if (wordStr.length === 1) return String(wordStr[0].charCodeAt(0));
    
    let word = wordStr.split(''); 
    let firstAscii = word[0].charCodeAt(0);
​
    let last = word[word.length-1];
    word[word.length-1] = word[1];
    word[1] = last;
    word[0] = firstAscii;
​
    return word.join("");   
  });
  
  return encArr.join(" ");
}