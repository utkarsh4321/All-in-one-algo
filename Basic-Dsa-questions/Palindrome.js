process.stdin.on('data',(userInput)=>{
    const num = userInput;

    if(isNaN(num.toString())){
        let tempNum = num.toString().trim();
        // string
        let i = 0;
        let j = tempNum.length - 1;
        let flag = true;
        while(i<j){
            if(tempNum[i] !== tempNum[j]){
                flag = false;
                break;
            }
            i++;
            j--;
        }
        if(flag){
            console.log("is Palindrome")
        }else{
            console.log("Not palindrome")
        }

    }else{
        // number
        const num2 = parseInt(num);
        let tempNum = parseInt(num);
        let reverseNo = 0;
        while(tempNum > 0){
            let lastDi = tempNum % 10;
            reverseNo = (10 * reverseNo) + lastDi;
            tempNum = parseInt(tempNum / 10);
        }
        if(reverseNo == num2){
            console.log(num2 + ' Is palindrome')
        }else{
            console.log(num2 + ' is not palindrome')
        }
    }

    process.exit();
    })