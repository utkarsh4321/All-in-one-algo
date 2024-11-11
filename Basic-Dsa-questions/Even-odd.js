// Determining Even/Odd Numbers
// Difficulty: Easy
// Topics: Basic Programming
// Description: Write a program to check whether a number is even or odd.
// Example:
// Input: number = 4
// Output: Even
// Explanation: Since 4 is divisible by 2, it is an even number.

process.stdin.on('data',(userInput)=>{
    const num = parseInt(userInput);
    if(num % 2 == 0){
        console.log("Number is even");
    }else{
        console.log("Number is odd");
    }
    process.exit();
    })
