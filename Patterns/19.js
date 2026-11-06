let n = 4;
for (let i = 1; i <= n; i++) {
  let row = "";
  let spaceCount = n - i;
  row += " ".repeat(spaceCount);

  for (let j = 1; j <= i; j++) {
    row += String.fromCharCode(64 + j);
  }
  for (let r = i - 1; r >0; r--) {
    row += String.fromCharCode(64+ r);
  }
  row += " ".repeat(spaceCount);
  console.log(row);
}

// let n = 4;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   let spaceCount = n - i;
//   row += " ".repeat(spaceCount);
//   for (let j = 1; j <= 2 * i - 1; j++) {

//     j == 2 * i - 1 ? row += String.fromCharCode(64 + i) : row += String.fromCharCode(64 + j);
//   }
//   row += " ".repeat(spaceCount);
//   console.log(row);
// }
