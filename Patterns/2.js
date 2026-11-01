let i ;
let j;
let n = 5;
for (i=0;i<n ; i++ ){
    let row ="";
    for(j = 0; j< n; j++){
        if(j<= i){
            row += " * ";
        }else{
            row += "   ";
        }
    }
console.log(row)
}