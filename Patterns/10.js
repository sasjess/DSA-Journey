let n= 3;

for (let i = 1; i <=n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
        row += "   ";
        
    }
    for (let l = 0; l < (2*n)- (2*i)+1; l++) {
        row += " * ";
        
    }
    for (let k = 0; k < i; k++) {
        row += "   ";
        
    }
    console.log(row);
    
}