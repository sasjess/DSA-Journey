//star square
let n = 4;

for (let i = 1; i <= n; i++) {
  let row = "";
  let starsCount;
  
  i == 1 || i == 4 ? (starsCount = n) : (starsCount = (n / 2));
let spaceCount = n - starsCount;
  row += "*".repeat(starsCount / 2);
  row += " ".repeat(spaceCount);
  row += "*".repeat(starsCount / 2);

  console.log(row);
}
