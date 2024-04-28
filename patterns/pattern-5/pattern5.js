process.stdin.on('data',(userInput)=>{
    n = parseInt(userInput)
    for(let i = 1;i<=n;i++){
        for(let j = 1;j<=i;j++){
            process.stdout.write(`${i} `)
        }
        process.stdout.write("\n");
    }
    process.exit();
    })