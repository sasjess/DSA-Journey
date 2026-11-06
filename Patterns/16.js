let n = 5;
for (let i = 0 ; i < n ; i++){
    let row = '';
    for (let j = 0;j <= i ;j++ ){
        row += String.fromCharCode(65 + j) + " ";
    }
    console.log(row);
    
}

// `String.fromCharCode(65 + j): Converts ASCII numbers into letters. 65 is the 
// ASCII code for uppercase 'A'. Adding j moves to the next letter (66 for 'B', 67 
// for 'C', etc.). Use 97 instead of 65 if you want lowercase letters (a, b, c, d)`