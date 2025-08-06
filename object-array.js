const numbers = [22, 33, 44, 55, 55];
const players = [{}, {}, {}, {}];
const employees = [
  { name: "ashik", designation: "content writer", salary: 20000 },
  { name: "basik", designation: "web dev", salary: 25000 },
  { name: "limom", designation: "doctor", salary: 30000 },
  { name: "simon", designation: "developer", salary: 25000 },
]; //array er vitore object thakte pare ..just array er index onujai object k call kore sob kora jabe
employees[0].name = "khairul";
// console.log(employees);
// console.log(employees[1]);
// console.log(employees[1].designation);
// console.log(employees[3].salary);

// for (const employee of employees) {
//   //   console.log(employee);
//   console.log(employee.designation);
// }

for (const emp of employees) {
  const person = emp;
  const person_info = person.name + ": " + person.salary;
  console.log(person_info);
}
