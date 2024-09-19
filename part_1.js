/* 
Define two arrays, fruits and vegetables filled with their respective content.
Using the spread operator, make a new array 'produce' that contains all of the fruits and vegetables
Make another 3 arrays: Beef, Seafood, Poultry.
Use the Spread Operator to join these all as an array called Meat
Merge your Meat and Produce to make a large array called Foods */

const fruits = ['apple', 'banana', 'strawberry']

const vegetables = ['carrots', 'potatoes', 'spinach']

produce = [...fruits, ...vegetables]

console.log(produce)

const beef = ['Steak', 'Bacon', 'Sausage', 'Liver']

const seafood = ['mahi-mahi', 'tuna', 'crab']

const poultry = ['ostrich', 'chicken', 'duck']


meat  = [...beef, ...seafood, ...poultry]

foods  = [...meat, ...produce]

console.log(produce)
console.log(meat)
console.log(foods)