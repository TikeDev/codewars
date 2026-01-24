function findNextSquare(sq) {
  let sqrt = Math.sqrt(sq);
  return Number.isInteger(sqrt) ? (sqrt+1)**2: -1;
}