/**
 * Exercise #1
 *
 * forEach(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is
 * passed each element and the index.
 *
 */


function forEach(array, callback) {
    for (var i = 0; i < array.length; i++) {
        const element = array[i];
        callback(element, i);
    }
}




/**
 * Exercise #2
 *
 * map(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. A new
 * array is returned which contains
 * whatever was returned from each
 * time the callback was invoked.
 *
 */
function map(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        result = callback(element, i);
        newArray.push(result);
    }
    return newArray;
}


/**
 * Exercise #3
 *
 * filter(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. A new
 * array is returned which contains
 * _only_ the elements for which the
 * callback returned a truthy value.
 *
 */
function filter(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        result = callback(element, i);
        if (result) {
            newArray.push(element);
        }
    }
    return newArray;
}

/**
 * Exercise #4
 *
 * find(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns the _first element_
 * for which the callback returns a
 * truthy value.
 *
 */
function find(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        result = callback(element, i);
        if (result) {
            return element;
        }
    }
    return newArray;
}
/**
 * Exercise #5
 *
 * findIndex(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns the _index of
 * the first element_ for which the
 * callback returns a truthy value.
 *
 */
function findIndex(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        result = callback(element, i);
        if (result) {
            return i;
        }
    }
}
/**
 * Exercise #6
 *
 * every(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns a boolean value
 * representing if every time the
 * callback was invoked it returned
 * a truthy value.
 *
 */

function every(array, callback) {
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        const result = callback(element, i);
        if (!result) {
            return false
        }
    }
    return true;
}



/**
 * Exercise #7
 *
 * some(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns a boolean value
 * representing if _any_ time the
 * callback was invoked it returned
 * a truthy value.
 *
 */
function some(array, callback) {
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        const result = callback(element, i);
        if (result) {
            return true
        }
    }
    return false;
}
/**
 * Exercise #8
 *
 * reduce(array, callback, initialValue)
 *
 * Reduce is often used for combining
 * values together.
 *
 * `reduce` should take 3 arguments:
 * `array`, `callback` and `initialValue`.
 *
 * The callback is invoked for every
 * element in the array and is passed
 * **the current cumulative value**,
 * each element and the index. Whatever
 * the callback returns is the new
 * cumulative value. The function
 * should return the final cumulative
 * value.
 *
 */


function reduce(array, callback, initialValue) {
    let cumValue = initialValue === undefined ? 0 : initialValue;
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        cumValue = callback(cumValue, element, i);
    }
    return cumValue;
}