process.stdin.on('data',(userInput)=>{
    const year = parseInt(userInput);
    if(year % 400 == 0 || (year % 100 !== 0 && year % 4 == 0)){
        console.log(`Year ${year} is leap year`);

    }else{
        console.log(`Year ${year} is not leap year`);
    }
    process.exit();
    })