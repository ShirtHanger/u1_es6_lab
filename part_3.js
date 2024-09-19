/* 

Define yourself in a javascript Object with three keys: name, age, and hometown.

Use the destructuring syntax to extract all three keys into variables. 
Log all three variables.

Now we are going to give you a pet. Use destructuring to do the following: 
1) add a pet object to your person, 
2) define three variables (age, breed, name) outside of the object and 
3) add those variables to your pet.

Log the most important thing about you: your pet's name.
*/

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