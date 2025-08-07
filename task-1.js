// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input:
const colors = ["red", "blue", "green", "yellow", "orange"];

const reverse = [];
for (let i = colors.length - 1; i >= 0; i--) {
  reverse.push(colors[i]);
}
console.log(reverse);

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']
