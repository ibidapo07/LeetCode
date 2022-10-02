/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for (let i = 0 ; i< s.length; i++){
        //s.unshift(s[s.length-1]);
        s.splice( s.length-i,0,s[0] );
        s.splice(0,1);
    }
};