/* 
Define an object faveFoods that has keys representing three of your 
favorite foods and the values should be the restaurant 
or locale where they are from.

Now make another object and do the same thing 
but this time ask your teammates what their 
three favorite foods are.

Using the spread operator, build a final object
allFoods with the items from faveFoods 
and teamFaveFoods together.
 */

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