let price = 25;
let comp_price = price;

price = 20;
comp_price = 15;
// primitive value gula change korle onno value teu change hoi na.

// console.log(price);
// console.log(comp_price);

const products = [25, 25, 25];
const comp_products = [];
for (const product of products) {
  comp_products.push(product);
} // alada vabe array toiri korar jonno

// const comp_products = products;
// products[0] = 33;
comp_products[0] = 54;
products[1] = 44;
// console.log(products);
// console.log(comp_products);
//non-primitive gula (array, object) egula ekta change korle onno ektau change hoye jai

const numbers = [1, 2, 3, 4];

// const new_numbers = Array.from(numbers);
// const new_numbers = [].concat(numbers);
const new_numbers = [...numbers];
numbers.push(6);
new_numbers.push(5, 6);
console.log(numbers);
console.log(new_numbers);

// shallow copy vs deep copy
