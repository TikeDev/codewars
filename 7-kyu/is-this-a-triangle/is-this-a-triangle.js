function isTriangle(a,b,c)
{
  // can't have 2 smallest sides adding up equal or less than the largest,
  // they'd just be 2 lines on top of each other
  let [smallest, med, largest] = [a, b, c].sort((a, b) => a - b);
  return smallest + med <= largest ? false: true;
}
​