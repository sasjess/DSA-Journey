let n = 10;
for (let i = 1; i <= n; i++) {
  let row = "";
  let next;
  let start = i % 2 == 0 ? 0 : 1;
  
  // for(let j = 1 ; j <= i ; j++){
  row += start;

  // }
  for (let r = 1; r <= i-1; r++) {
    a = start
    next = start == "0" ? 1 : 0;
    row += next;
    start = next;
    
  }
  console.log(row);
}
