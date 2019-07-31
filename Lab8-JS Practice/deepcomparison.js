(function() {

    function deepEqual(left, right) {
        // console.log(Object.keys(left)); These are just for me to check what
        // keys are found
        // console.log(Object.keys(right));

        if (Object.keys(left).length !== Object.keys(right).length)
            return false;
        // if unequal number of elements found they are not equal

        if (typeof (left) !== typeof (right))
            return false; // type of checking for comparision

        if (typeof (left) === "object") {
            // if type of found to be object we
            // consider it has key : value so
            // call for every objects using loop
            // and recursive function call

            for ( let key in left) {
                return deepEqual(left[key], right[key]);
            }
        } else {
            if (left === right)
                return true;
            // here we reach if the left and right both are
            // not of object so checking using === for
            // equality
            // if equal return true else false
            else
                return false;
        }

    }

    let obj = {
        here : {
            is : "an"
        },
        object : 2
    };
    console.log(deepEqual(obj, obj));
    // → true
    console.log(deepEqual(obj, {
        here : 1,
        object : 2
    }));
    // → false
    console.log(deepEqual(obj, {
        here : {
            is : "an"
        },
        object : 2
    }));
    // → true
    console.log("==============================================");

}());