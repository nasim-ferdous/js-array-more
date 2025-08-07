// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input:

var numbers = ["Tom", "Tim", "Tin", "Tik"];
var output;
for (var number of numbers) {
  output = numbers.join("");
}
console.log(output);

// Output:

// 'TomTimTinTik'
