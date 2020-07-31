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
        weight: 0.01
    },
    {
        name: 'pé de pano',
        type: 'horse',
        age: 1,
        weight: 60
    },
]

const petNames = pets.map((pet) => {
    return pet.name
})

console.log(petNames)