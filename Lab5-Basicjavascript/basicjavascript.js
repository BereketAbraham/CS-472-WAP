function myFunctionTest(expected, function2test) {
    if (expected === function2test()) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }
    ;
}

function myFunctionArrayTest(expected, function2test) {
    if (arraysEqual(expected, function2test())) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }
    ;
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
    ;
}

console.log("Expected output of max(13,10) is 13  " + myFunctionTest(13, function () {
    return max(13, 10);
}));

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
    return max(max(a, b), c);

}

console.log("Expected output of maxOfThree(8,5,6) is 8  " + myFunctionTest(8, function () {
    return maxOfThree(8, 5, 6);
}));

function isVowel(a) {
    if (a.length !== 1) {
        return false;
    } else {
        if (a === 'a' || a === 'i' || a === 'e' || a === 'o' || a === 'u') {
            return true;
        } else {
            return false;
        }
    }
}

console.log("Expected output of isVowel('e) is true " + myFunctionTest(true, function () {
    return isVowel('e');
}));

function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log("Expected output of sum of elements in array [1,2,3,4] is 10 " + myFunctionTest(10, function () {
    return sum([1, 2, 3, 4]);
}));

function multiply(arr) {
    const f = arr.reduce(function (prevVal, elem, i, array) {
        return prevVal * elem;
    });
    return f;
}

console.log("Expected output of the product of elements in an array[1,2,3,4] is 24 " +
    myFunctionTest(24, function () {
        return multiply([1, 2, 3, 4])
    }));

function reverse(str) {
    let output = "";
    for (let i = str.length; i >= 0; i--) {
        output += str.charAt(i);
    }
    return output;
}

console.log("Expected output of the reversed form of the string Hello is olleh " +
    myFunctionTest('ratset gaj', function () {
        return reverse('jag testar')
    }));

function findLongestWord(arr) {
    let length = 0;
    let word = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > length) {
            length = arr[i].length;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length == length) {
            word = arr[i];
        }
    }
    return word;
}

console.log("Expected output of the longest word in an array ['hello','good bye','how are you','good night'] is how are you " +
    myFunctionTest('how are you', function () {
        return findLongestWord(['hello', 'good bye', 'how are you',
            'good night'])
    }));

function filterLongWords(arr, j) {
    const c = arr.filter(function (elem, i, array) {
        return elem.length > j;
    })
    return c;
}

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length)
        return false;
    for (let i = arr1.length; i--;) {
        if (arr1[i] !== arr2[i])
            return false;
    }

    return true;
}

console.log("Expected output of the array of words['intelligent','clever','awesome'] who are longer than 5 are intelligent,clever,awesome " +
    myFunctionArrayTest(["intelligent", "clever", "awesome"], function () {
        return filterLongWords(["intelligent", "clever", "awesome", "hello"], 5);
    }));
const a = [1, 3, 5, 3, 3];
const b = a.map(function (elem, i, array) {
    return elem * 10;
})
console.log("multiply each element by 10 ..." + b);
const c = a.filter(function (elem, i, array) {
    return elem === 3;
});
console.log("return array with all elements equal to 3 ..." + c);
const d = a.reduce(function (prevValue, elem, i, array) {
    return prevValue * elem;
});
console.log("return the product of all elements ..." + d);
