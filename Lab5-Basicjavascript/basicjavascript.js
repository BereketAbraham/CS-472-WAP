/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}
/* max returns the maximum of 2 arguments */
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    };
}
console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));

//console.log("Expected----- output of max(20,10) is 20 and  " + myFunctionTest(20, function(){return 20;} ));


/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
    return max(max(a, b), c);
}
console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));



function isVowel(alphabet){
    if(alphabet.length !== 1)
        return false;
    if(alphabet==='a' || alphabet==='e' || alphabet==='i' || alphabet==='o' || alphabet==='u')
        return true;
    else
        return false;
}
console.log("Expected output of isVowel is True  " + myFunctionTest(true, isVowel("u")));
console.log("Expected output of isVowel is False  " + myFunctionTest(true, isVowel("z")));



function sum(arr){
    var s=0;
    for(var i=0; i<arr.length;i++){
        s+= arr[i];
    }
    return s;
}
console.log("Expected output of sum is 20  " + myFunctionTest(20, sum([10, 2, 4, 4])));

//1....reducer sum
function sum1(arr){
    const  reducer = (accum, num) => accum + num;
    return arr.reduce(reducer);
}
console.log("*** Reduce Array method *** Expected output of sum is 20  " + myFunctionTest(20, sum1([10, 2, 4, 4])));


function multiply(arr){
    var product=1;
    for(var i=0; i<arr.length;i++){
        product*= arr[i];
    }
    return product;
}
console.log("Expected output of multiply is 240  " + myFunctionTest(240, multiply([10, 4, 3, 2])));

//2.. reducer sum
function multiply1(arr){
    const reducer = (a,b)=>a*b;
    return arr.reduce(reducer);
}

console.log("*** Reduce Array method *** Expected output of multiply is 240  " + myFunctionTest(240, multiply1([10, 4, 3, 2])));


function reverse(str){
    var reversed = "";
    for(var i = 0;i<str.length;i++)
    {
        reversed += str.charAt(str.length-i-1);
    }
    return reversed;
}

console.log("Expected output of reverse is esreveR  " + myFunctionTest("esreveR", reverse("Reverse")));

//3..... reverse
function reverseString(str){
    return str.split("").reverse().join("");
}

console.log("*** Split, reverse and join array methods *** Expected output of Hello is olleH " + myFunctionTest("olleH", reverseString("Hello")));

function findLongestWord(wordList) {

    var maxLength = wordList[0].length;

    for(var i=1; i< wordList.length; i++) {
        if(maxLength<wordList[i].length ) {
            maxLength=wordList[i].length;
        }
    }
    return maxLength;
}


console.log("Expected output of findLongestWord is 9  " + myFunctionTest(9, findLongestWord(["hello","world","this","is","wonderful"])));

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


function filterLongWords(a,x) {

    var b= [];
    var j=0;
    for(var i=0; i< a.length; i++) {
        if(a[i].length > x) {
            b[j]= a[i];
            j++;
        }
    }
    return b;
}

console.log("Expected output of filterLongWords is 'wonderful'  " + testArray(["really","wonderful"], filterLongWords(["this","is","really","very","wonderful"],4)));

const a = [1,3,5,3,3];
const b = a.map(function(elem, i, array) {
    return elem * 10;
});


console.log("Expected output after multiplying by 10 [10,30,50,30,30]  " + testArray([10,30,50,30,30], b));


const e = a.reduce(function(prevVal,elem, i, array) {
    return prevVal * elem;
})
console.log("Result of multiplication of each element is 135  " + myFunctionTest(135, e));


const a1 = [3,3,3,3];
const c = a1.filter (function( elem , i , array){
    return elem === 3;
});
if(c.length== a1.length)
    console.log("Array with all elements equal to 3 is [3,3,3,3]  " + testArray([3,3,3,3], c));