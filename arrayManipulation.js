// arrayManipulation.js

/**
 * Processes an array of numbers.
 * Squares each even number and triples each odd number.
 *
 * @param {number[]} arr - The array of numbers to be processed.
 * @return {number[]} The processed array with squared even numbers and tripled odd numbers.
 */
function processArray(arr) {
    // Use the map function to apply the required transformation to each element in the array
    return arr.map(num => {
        if (num % 2 === 0) {
            // Square the number if it is even
            return num * num;
        } else {
            // Triple the number if it is odd
            return num * 3;
        }
    });
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5];
const resultArray = processArray(inputArray);
console.log(resultArray); // Output: [3, 4, 9, 16, 15]
