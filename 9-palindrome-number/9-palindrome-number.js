/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let palindrome = [];
    let test = x
    let newNumber = 0
    while(test > 0){
        //obtain last digit of number
          //remainder of 10 division is last digit
          palindrome.push((test%10));
        
          //subtract remainder to get multiple of 10
          test -= test%10;
        
          //divide by 10 to reduce number
          test /= 10;
        }
    
    for(let i = 0 ; i < palindrome.length ; i++){
        newNumber += palindrome[i] * (10 ** (palindrome.length - (i+1)))  
    }
    
    return x === newNumber
};