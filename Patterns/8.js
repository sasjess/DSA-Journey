//pyramid pattern
 
 
let i;
let j;
let n= 5;

for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < n - i - 1; j++) {
        row += " ";
    }

    for (let j = 0; j < 2 * i + 1; j++) {
        row += "*";
    }

    console.log(row);
}