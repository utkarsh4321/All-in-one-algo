process.stdin.on('data',(userInput)=>{
    n = parseInt(userInput)
    for(let i = 1;i<=n;i++){
        for(let j = n;j>=i;j--){
            process.stdout.write("* ");
        }
        process.stdout.write("\n");
    }
    process.exit();
    })