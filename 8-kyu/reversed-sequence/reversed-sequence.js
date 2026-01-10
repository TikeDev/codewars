const reverseSeq = n => {
  // return array starting at n down to 1, separated by 1
  let res = [];
  for (let i = n; n > 0; n--)
    res.push(n);
  
  return res;
};