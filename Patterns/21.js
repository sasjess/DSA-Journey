let n = 5;
for (let i = 0; i < n; i++) {
  let row = "";
  let star = (2 * n - 2 * i) / 2;
  let space = 2 * i;

  row += "*".repeat(star);
  row += " ".repeat(space);
  row += "*".repeat(star);
  console.log(row);
}
for (let i = 1; i <= n; i++) {
  let row = "";
  let space = 2 * n - 2 * i;
  let star = (2 * i) / 2;

  row += "*".repeat(star);
  row += " ".repeat(space);
  row += "*".repeat(star);

  console.log(row);
}
