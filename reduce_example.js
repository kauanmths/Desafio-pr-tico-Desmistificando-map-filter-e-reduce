const pets = [
    {
        name: 'bolinha',
        type: 'dog',
        age: 15,
        weight: 30
    },
    {
        name: 'mingal',
        type: 'cat',
        age: 6,
        weight: 2
    },
    {
        name: 'dog',
        type: 'rex',
        age: 4,
        weight: 5
    },
    {
        name: 'marrom',
        type: 'cat',
        age: 2,
        weight: 1
    },
    {
        name: 'gulp',
        type: 'fish',
        age: 1,
        weight: 1
    },
    {
        name: 'pé de pano',
        type: 'horse',
        age: 1,
        weight: 60
    },
]

const totalPets = pets.reduce((total, pet) => {
    return {
        totalAge: total.totalAge + pet.age,
        totalWeight: total.totalWeight + pet.weight
    }    
}, {totalAge: 0, totalWeight: 0 })

//console.log(totalPets)


const totalWeightDogs1 = pets.reduce((total, pet) => {
    if(pet.type !== 'dog') return total

    return total + pet.weight
   }, 0)
   
//console.log(totalWeightDogs1)

const totalWeightDogs2= pets.filter((pet) => {   
    return pet.type === 'dog'})
.reduce((total, pet) => {
    return total + pet.weight}, 0)

console.log(totalWeightDogs2)
