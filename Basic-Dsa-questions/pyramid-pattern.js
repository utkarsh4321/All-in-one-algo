process.stdin.on('data',(userInput)=>{
    const row = parseInt(userInput);
    const column = row * 2 - 1;
    // let star;
    // let spaces;
    for(let i = 1;i<=row;i++){
        // star = 2 * i - 1;
        // spaces = column - star;
        for(let k = 1;k<=row-i;k++){
            process.stdout.write(" ");
        }
        for(let l = 1;l<=2*i - 1;l++){
            process.stdout.write("*");
        }
        for(let m = 1;m<=row-i;m++){
            process.stdout.write(" ")
        }
        console.log()
    }
    process.exit();
    })