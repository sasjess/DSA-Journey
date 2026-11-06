let n = 5;
for(let i = 1 ; i <=n ; i++){
    let row= "";
    count = n-i+1;
    for(let j = 1 ; j <= n ; j++){
        j > i ? row += " " : row += String.fromCharCode(64 + count)
        count = count + 1;
    }
    console.log(row);
    
}