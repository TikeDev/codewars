function isValidWalk(walk) {
  // has to be 10 blocks
  if (walk.length !== 10) return false;
  
  let walked = {};
  walk.forEach(direction => { walked[direction] = (walked[direction] ?? 0) + 1; });
 
  // directions walked need to cancel each other out to end up at start
  return (walked['n']===walked['s']) && (walked['e']===walked['w']);
}