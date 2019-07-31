(function() {

    "use strict";



    function testArrayEquality(expected, found) {
        if(expected.length !== found.length)
            return "TEST FAILED.  Expected length " + expected.length + " found length" + found.length;
        for(var i = expected.length; i--;) {
            if(expected[i] !== found[i])
                return "TEST FAILED.  Expected " + expected[i] + " found " + found[i];
        }

        return "TEST SUCCEEDED";
    }


    function reverseArray(arr) {
        let newArray = [];
        for (let i = 0; i < arr.length; i++) {
            newArray[i] = arr[arr.length - i - 1];
        }
        return newArray;
    }
    console.log(reverseArray([ "A", "B", "C" ]));
    console.log("Testing above result "+testArrayEquality(["C","B","A"],reverseArray(["A","B","C"])));

    let arrayValue = [ 1, 2, 3, 4, 5 ];
    reverseArrayInPlace(arrayValue);
    console.log(arrayValue);

    console.log("Testing above result "+testArrayEquality([5,4,3,2,1],reverseArrayInPlace([1,2,3,4,5])));




    function reverseArrayInPlace(arr) {
        for (let i = 0; i < arr.length / 2; i++) {
            let tmp = arr[i];
            arr[i] = arr[arr.length - i - 1];
            arr[arr.length - i - 1] = tmp;
        }
        return arr;

    }

}());