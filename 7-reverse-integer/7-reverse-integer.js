/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(r) {
    //reversed number store
    let number = Math.abs(r)
    let revInt = 0
    while(number >= 1){
        //rev.push(number%10)
        revInt += (number%10) * (10 ** (number.toString().length -1)) 
        number = (number - (number%10))/10
    }

    if(r < 0){
       revInt *= -1;
       }
    if((revInt < -(2 ** 31)) || (revInt > (2 ** 31) -1)){
        return 0;
       }
    
    return revInt
};