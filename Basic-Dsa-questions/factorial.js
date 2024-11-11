process.stdin.on('data',(userInput)=>{
    const num = parseInt(userInput);
    // iterator method
    let fact = 1;
    for(let i = 1;i<=num;i++){
       fact *= i; 
      
    }
    // factorial method
    function facts(n){
        if(n==1){
            return 1;
        }
        return n * facts(n-1);
    }
    console.log(facts(5))
    console.log(fact);
    process.exit();
    })