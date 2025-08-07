// Given an array of student objects, print each student’s name and marks.

const objects = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 },
];
for (let object of objects) {
  console.log(object.name + " scored " + object.marks);
}
// Expected ooutput:
// John scored 85
// Alice scored 90
