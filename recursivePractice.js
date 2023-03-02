const fibonacci = (number) => {
    // Iterative form of a function looking for fibonacci numbers.
    let result = [0, 1];
    if (number === 1) {
        return [0];
    } else if (number === 2) {
        return result;
    } else {
        while (number > 2) {
            const lastNumber = result.at(-1) + result.at(-2);
            result.push(lastNumber);
            number--;
        }
    };

    return result;
};

// For debugging.
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(8));

const fibonacciRecurse = (number, result = [0, 1]) => {
    // Recursive form of a function looking for fibonacci numbers.
    if (number === 2) {
        return result;
    } else if (number === 1) {
        return [0];
    } else if (result.length < number) {
        lastNumber = result.at(-1) + result.at(-2);
        result.push(lastNumber);
        fibonacciRecurse(number, result);
    };

    return result;
};

// For debugging.
console.log(fibonacciRecurse(1));
console.log(fibonacciRecurse(2));
console.log(fibonacciRecurse(8));

const mergeSort = (array) => {
    /* Recursive form because I don't know how to do it via iteration.
        That said, this is a good example of a recursive function.
    */
    if (array.length === 1) {
        return array;
    } else {
        const middlePoint = Math.floor(array.length / 2);
        const firstHalf = array.slice(0, middlePoint);
        const secondHalf = array.slice(middlePoint, array.length);
        const left = mergeSort(firstHalf);
        const right = mergeSort(secondHalf);
        const result = [];
        let i = 0;
        let j = 0;
        while (result.length != array.length) {
            if (i >= left.length) {
                result.push(right[j]);
                j++;
            } else if (j >= right.length) {
                result.push(left[i]);
                i++;
            } else if (left[i] > right[j]) {
                result.push(right[j]);
                j++;
            } else {
                result.push(left[i]);
                i++;
            };
        };
        return result;
    };
};

// For debugging.
console.log(mergeSort([21]));
console.log(mergeSort([346, 65, 68496, 253, 78, 68, 789]));
console.log(mergeSort([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));