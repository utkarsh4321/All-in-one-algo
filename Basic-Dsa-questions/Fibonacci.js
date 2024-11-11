process.stdin.on('data',(userInput)=>{
    const num = parseInt(userInput);
    const temp = []
    if(num < 1)
        return;
    let prev1 = 0;
    let prev2 = 1;
    console.log(prev1 + " ")
    temp.push(prev1);
    if(num == 1)
        return;
    console.log(prev2 + " ")
    temp.push(prev2);
    
    for(let i = 3;i<=num;i++){
        let sum = prev1 + prev2;
        prev1 = prev2;
        prev2 = sum;
        console.log(sum + " ");
        temp.push(sum);
    }
    console.log(temp.toString());
    process.exit();
    })