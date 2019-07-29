/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

//1....reducer sum
function sum1(arr){
    const  reducer = (accum, num) => accum + num;
    return arr.reduce(reducer);
}
console.log("*** Reduce Array method *** Expected output of sum is 20  " + myFunctionTest(20, sum1([10, 2, 4, 4])));

//2.. reducer sum
function multiply1(arr){
    const reducer = (a,b)=>a*b;
    return arr.reduce(reducer);
}

console.log("*** Reduce Array method *** Expected output of multiply is 240  " + myFunctionTest(240, multiply1([10, 4, 3, 2])));

//3..... reverse
function reverseString(str){
    return str.split("").reverse().join("");
}

console.log("*** Split, reverse and join array methods *** Expected output of Hello is olleH " + myFunctionTest("olleH", reverseString("Hello")));

function testArray(expected, found) {
    if(expected.length !== found.length)
        return "TEST FAILED.  Expected length " + expected.length + " found length" + found.length;
    for(var i = 0;i<expected.length;i++) {
        if(expected[i] !== found[i])
            return "TEST FAILED.  Expected " + expected[i] + " found " + found[i];
    }
    return "TEST SUCCEEDED";
}

//4......longest array
function filterLongWords(str,len) {
    return str.filter(function(str){return str.length>len;});
}
console.log("*** Split, reverse and join array methods *** Expected output of filterLongWords is '[hello,world]'  " + testArray(["world","hello"], filterLongWords(["hi","it","is","world","of","hello"],3)));



