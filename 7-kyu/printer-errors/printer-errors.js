function printerError(s) {
    if (s === "") return "0/0";
    
    let numErrors = 0;
    s.split("").forEach(c => {
      if (c > "m") numErrors++;
    })
  
    return `${numErrors}/${s.length}`;
}