// inverted star triangle

let i;
let j;
let n = 5;

for( i = 0 ; i <n ; i ++){
    let row = "";
    for(j = n ; j >i ; j--){
        row += " * "
    }
    console.log(row);
}