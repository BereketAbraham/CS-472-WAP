(function() {
    "use strict";

    function arrayToList(arr) {
        let retVal = {

            rest : null

        };

        for (let i = 0; i < arr.length; i++) {

            if (retVal.rest === null) { // if its first element in list
                retVal.value = arr[i]; // dynamically adding value attribute to
                // retVal object
                retVal.rest = {

                    rest : null
                };
            } else {
                let counter = retVal;
                while (counter.rest !== null) {
                    counter = counter.rest;
                }
                counter.value = arr[i];
                counter.rest = {

                    rest : null
                };

            }

        }

        return retVal;

    }
    console.log(arrayToList([ 1, 2, 3 ]));

    function listToArray(list) {

        let arr = [];

        while (list !== null) {
            if (list.value !== undefined)
                arr.push(list.value);
            list = list.rest;
        }

        return arr;

    }

    console.log(listToArray({    //This is simple test to check if given list can be converted to array.
        value : 1,
        rest : {
            value : 2,
            rest : {
                value : 3,
                rest : null
            }
        }

    }))

    console.log(listToArray(arrayToList([ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ])));

    function prepend(element, list) {
        return { // appending at beginning is simplest i found
            value : element,
            rest : list
        };

    }

    console.log(prepend(10, prepend(20, null)));

    function nth(list, index) {
        return listToArray(list)[index];
        // I used this function listToArray() already written above so code re-use for me
        // after that i got the index of that array to return.
        // I have not checked for index out of bound condition
        // I assumed index will be with in bound for simplicity
    }

    function nthNextMethod(list, index) {       // This is same function() that works as nth()
        // I went through while loop until list is not null
        //every time i decreased index by 1 and updated list as next list
        while (list !== null) {                 // when index===0 that's the data I was looking for.
            // simply return list.value now.
            if (list.value !== undefined) {

                if (index-- === 0) {
                    return list.value;
                }
            }
            list = list.rest;

        }

    }

    function recursiveNth(list, index) {

        if (index === 0)

            return list.value;

        return recursiveNth(list.rest, --index);    //This is simplest recursive I have found for this purpose

    }

    console.log(recursiveNth(arrayToList([ 10, 20, 30 ]), 1));  //These are sample data from given assignment pdf file
    console.log(nth(arrayToList([ 10, 20, 30 ]), 1));
    console.log(nthNextMethod(arrayToList([ 10, 20, 30 ]), 1));

    console.log("==============================================");

}());
