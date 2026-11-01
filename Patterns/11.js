let i, j, r;
let n = 5;

for (i = 0; i <n; i++) {
  let row = " ";
  //space
  for (j = 0; j < n - i - 1; j++) {
    row += " ";
  }
  //stars
  for (r = 0; r < i * 2 + 1; r++) {
    row += "*";
  } //space
  for (j = 0; j <= n - i - 1; j++) {
    row += " ";
  }
  console.log(row);
}
for (let i = 1; i <=n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
        row += " ";
        
    }
    for (let l = 0; l < (2*n)- (2*i)+1; l++) {
        row += "*";
        
    }
    for (let k = 0; k < i; k++) {
        row += " ";
        
    }
    console.log(row);
    
}