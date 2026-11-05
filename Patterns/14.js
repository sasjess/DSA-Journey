let n = 4;
for(let i = 1 ; i <= n ; i++){
    let row = "";
    for(let j = 1 ; j<= i ; j++){
        row += j;
    }
    let spaceCount = (2*n)-(2*i);
    row += " ".repeat(spaceCount)
    for(let j = i ; j> 0 ; j--){
        row += j;

        
    }
    console.log(row);
    
}
//new learning :
// `.repeat() method is a built-in JavaScript
//  feature for strings. It takes whatever string you give it and duplicates it side-by-side a specific number of times.
// If spaceCount is 6, it generates: "      " (6 spaces)`