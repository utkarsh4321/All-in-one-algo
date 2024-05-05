process.stdin.on('data',(userInput)=>{
    n = parseInt(userInput)
    // First way
    process.stdout.write(`First way \n`)

    for(let i = n;i>=1;i--){
        for(let j = 1;j<=i;j++){
            process.stdout.write(`${j} `)
        }
        process.stdout.write("\n");
    }
    // second way
    process.stdout.write(`Second way \n`)

    for(let i = 1;i<=n;i++){
        for(let j = 1;j<=n - i + 1;j++){
            process.stdout.write(`${j} `)
        }
        process.stdout.write("\n");
    }
    process.exit();
    })