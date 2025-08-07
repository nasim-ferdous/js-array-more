// Task 5
// Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

// Input:

const numbers = [1, 2, 3];
const new_numbers = [...numbers];
new_numbers[0] = 99;
console.log(numbers);
console.log(new_numbers);

// Expected Output:

// Original: [1, 2, 3] Copy: [99, 2, 3]
