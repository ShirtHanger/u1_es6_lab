### Part 1 - Spreading Out

```js
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
```

## Part 2 - Merging Objects

```js
const faveFoods = {
    fryMeToTheMoon: "54th Street",
    jumboCinnamonPretzel: "Ben's Pretzels",
    generalTaosChicken: "Happy Garden",
}

const teamFaveFoods = {
    empenadas: "Mexico",
    curry: 'India',
    tacos: "Mexico",
    pizza: 'Italy',
    spanakopita: 'Greece',
}

const allFoods = {
    ...faveFoods,
    ...teamFaveFoods,
}

console.log(allFoods)
```

## Part 3 - Destructuring

```js
const shirtHanger = {
    fullName: 'John Doe',
    age: 23,
    home: 'New Windsor, NY',
}

let { fullName, age, home } = shirtHanger

console.log(fullName)

console.log(age)

console.log(home)

// Struggling to figure this out

let { ownedPet } = shirtHanger

let petName = 'Nala'
let petBreed = 'Cane Corso'
let petAge = '2'

ownedPet = {
    petName,
    petBreed,
    petAge,
}

console.log(ownedPet.petName)
```