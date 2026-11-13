//star square
let n = 4;

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n; j++) {
    i == 1 || i == n || j == 1 || j == n ? (row += "*") : (row += " ");
  }

  console.log(row);
}

// not suitable for every input - Bad
// //star square
// let n = 8;

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   let starsCount;

//   i == 1 || i == n ? (starsCount = n) : (starsCount = (n / 2));
// let spaceCount = n - starsCount;
//   row += "*".repeat(starsCount / 2);
//   row += " ".repeat(spaceCount);
//   row += "*".repeat(starsCount / 2);

//   console.log(row);
// }
