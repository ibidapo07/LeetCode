/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    //reversed number store
     let rev = []
     let revInt = 0
    while(Math.abs(x) >= 1){
        rev.push(x%10)
        x = (x - (x%10))/10
    }
    
    for(let i = 0 ; i< rev.length; i++){
        revInt += rev[i] * 10 ** ((rev.length - 1)-i)
    }
    
    if(x < 0){
       revInt *= -1
       }
    if((revInt < -(2 ** 31)) || (revInt > (2 ** 31) -1)){
        return 0
       }
    
    return revInt
};