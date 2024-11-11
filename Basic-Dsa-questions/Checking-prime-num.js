// Checking for Prime Numbers
// Difficulty: Easy
// Topics: Basic Programming, Number Theory
// Description: Write a program to determine if a number is prime.
// Example:
// Input: number = 7
// Output: Prime
// Explanation: 7 has no divisors other than 1 and itself, so it is a prime number.

let num = 4;
let count = 0;
for(let i =1;i*i<=num;i++){
    if(num % i == 0){
        count++;
        if(parseInt(num / i) !== i){
            count++;
        }
    }
}
if(count == 2){
    console.log("Number is prime");
}else{
    console.log("number is nor prime");
}