/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let addToPrev = (arr,index) => {
        if(index < 0){
            arr.unshift(1)
        }else{
            arr[index] += 1
            if(arr[index] == 10){
                arr[index] = 0;
                addToPrev(arr,index-1)
            }
        }

        return 0

    }

    digits[digits.length - 1] += 1

    if(digits[digits.length - 1] == 10){
        digits[digits.length - 1] = 0;
        addToPrev(digits,digits.length-2);
    }
    
    return digits;
};