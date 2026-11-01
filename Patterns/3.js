let i ;
let j;
let n = 5;

for (i = 0 ; i <n ; i ++){
    let row = "";
    for(j = n ; j >=0  ; j--){
        if( i < j){
            row += "   "
        }else {
            row += " * "
        }
    }
    console.log(row);
}