const nmbrs = [2, 4, 4, 4, 4, 65, 7];
const runs = [[], [], [], [], []];
const exam_marks = [
  [33, 43, 54, 54, 65],
  [22, 43, 66, 77, 46],
  [77, 66, 76, 56, 87],
  [44, 55, 65, 77, 78],
];
// console.log(exam_marks);
console.log(exam_marks[0]);
console.log(exam_marks[0][0]); // oi array er vitorer 0 index e j array ache tar 0 index er man show korbe]
const first_class_marks = exam_marks[0];
console.log(first_class_marks[0]);

exam_marks[0][2] = 99;
exam_marks[0].pop();
exam_marks[0].push(45);
// console.log(exam_marks);

for (const marks of exam_marks) {
  console.log(marks);
}
