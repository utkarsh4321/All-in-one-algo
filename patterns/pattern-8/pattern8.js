process.stdin.on('data',(userInput)=>{
    n = parseInt(userInput)
    for(let i = 1;i<=n;i++){
        total = n * 2 - i
        space = i -1
        star = total - space
        for(let j = 1;j<=total;j++){
            if(j<=space){
        process.stdout.write("  ");
      
            }else{
        process.stdout.write("* ");
            }
        }
        process.stdout.write("\n");
    }
    process.exit();
    })