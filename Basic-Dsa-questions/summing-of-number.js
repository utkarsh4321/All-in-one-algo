process.stdin.on('data',(userInput)=>{
    const num = parseInt(userInput);
    let temp = num;
    let sum = 0;
    //Iterartor
    while(temp>0){
        let la = temp % 10;
        sum += la;
        temp = parseInt(temp / 10);
    }
    // Recursive 
   function tiger(n){
    if(n <= 0){
        return 0;
    }
    let rr = n%10;
    return rr + tiger(parseInt(n/10));
   }
   console.log('Recursive Ans ' + tiger(num));
    console.log('Iterative Ans ' + sum);
    process.exit();
    })