process.stdin.on('data',(userInput)=>{
    n = parseInt(userInput)
    for(let i = 1;i<=n;i++){
        // for loop for spaces
        for(let j = 1;j<=(n-i + 1);j++){
            process.stdout.write(`  `)
        }
        // for loop for star
        for(let k = 1;k<(2*i);k++){
            process.stdout.write(`* `)
        }
        process.stdout.write("\n");
    }
    process.exit();
    })