let n = 5; 

for (let i = 1; i <= (2 * n - 1); i++) { 
    let row = ""; 
    
    // Determine how many stars to print for the current row
    let stars = i <= n ? i : (2 * n - i); 
    
    // Build the row string
    for (let j = 1; j <= stars; j++) { 
        row += "*"; 
    } 
    
    console.log(row); 
}
