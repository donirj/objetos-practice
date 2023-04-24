const personalData = {
    name: 'andoni',
    lastname: 'resendiz',
    age: 29,
    height: 1.85,
    isDev: true
}

const andoniAge = personalData.age
console.log(andoniAge)

const friendsData = [
 {
    name: 'andoni',
    lastname: 'resendiz',
    age: 29,
    height: 1.85,
    isDev: true
},
  {
    name: 'flaid',
    lastname: 'camacho',
    age: 28,
    height: 1.75,
    isDev: false
},
  {
    name: 'manu',
    lastname: 'gbaka',
    age: 25,
    height: 1.83,
    isDev: false
}
]

const listSorted = friendsData.sort((a,b) => b.age - a.age)
console.log(listSorted)