const numbers = [1, 4, 8, 9, 2, 5];
// console.log(numbers);
numbers.sort(); // ascending
// console.log(numbers);

const friends = ["nokib", "rakib", "akib", "bakib", "dakib"];
friends.sort(); // ascending
// console.log(friends);

const ages = [1, 20, 15, 100, 115, 5, 200];
// ages.sort();
// console.log(ages);
//  sort korar somoy js e string akare kore..mane first letter bibechona kore sort kore number er khetreu tai..first nmbr bibechona kore sort kore
// const sorted_ages = ages.sort(function (a, b) {
//   return a - b;
// }); // ascending
const sorted_ages = ages.sort(function (a, b) {
  return b - a;
}); //descending
console.log(sorted_ages);
