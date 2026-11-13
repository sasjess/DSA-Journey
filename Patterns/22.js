let n =5;
for(let i = 0 ; i<=n ;i++){
    let row="";
    let starsCount = 2*i/2;
    let spaceCount = (2*n)-( 2*i);

    row += "*".repeat(starsCount)
    row += " ".repeat(spaceCount)
    row += "*".repeat(starsCount)

    console.log(row);
}

    for(let j = 1 ; j<=n ;j++){
    let row="";
    let spaceCount = 2*j;
    let starsCount = (2*n-(2*j))/2;

    row += "*".repeat(starsCount)
    row += " ".repeat(spaceCount)
    row += "*".repeat(starsCount)

    console.log(row);
    

}
