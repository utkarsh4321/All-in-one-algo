process.stdin.on('data',(userInput)=>{
    const num = parseInt(userInput);
    const n = parseInt(Math.log10(num)) + 1;
    let tempNum = num;
    let sum = 0;
    while(tempNum>0){
        let lastDigit = tempNum % 10;
        console.log(lastDigit)
        sum += lastDigit ** n;
        tempNum  = parseInt(tempNum / 10);
    }

    if(sum == num){
        console.log(num + " is armstrong number");
    }else{
        console.log(num + " is not armstrong number");
    }
    process.exit();
    })