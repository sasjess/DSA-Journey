let n = 5;
for (let i = n; i > 0; i--) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row += String.fromCharCode(65 + j);
  }
  console.log(row);
}
