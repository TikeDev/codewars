function collatz(n, count=1) {
  if (n === 1) return count;
  let num = (n % 2 === 0) ? n / 2 : n * 3 + 1;
  return collatz(num, count + 1);
}