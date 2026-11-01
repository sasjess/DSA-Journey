let i,j,r;
let n= 5;

for(i=0 ; i < n ; i++){
    let row="";
    //space
    for(j= 0 ; j <(n-i-1); j++){
          row += "   ";
    }
    //stars
     for(r = 0 ; r < ((i*2)+1 ); r++){
          row += " * "
          
    }//space
    for(j= 0 ; j <=(n-i-1); j++){
          row += "   "
    }
    

console.log(row)
}