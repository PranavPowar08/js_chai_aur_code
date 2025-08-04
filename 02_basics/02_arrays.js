const marval_heros =["Thor","IronMan","Spiderman"]
const dc_heros =["Superman","Flash","Batman"]

// marval_heros.push(dc_heros)
// console.log(marval_heros)
// console.log(marval_heros[3])
// console.log(marval_heros[3][1])

// const all_heros =marval_heros.concat(dc_heros)
// console.log(all_heros)

const all_new_Heros =[...marval_heros,...dc_heros]
// console.log(all_new_Heros)

const newArr =[1,2,3,[4,5,6],7,[8,9,[1,2]]]
const real_newArr=newArr.flat(Infinity)
console.log(real_newArr)

console.log(Array.isArray("Pranav"))
console.log(Array.from("Pranav"))
console.log(Array.from({name : "Interview"}))

let score1=100
let score2=200
let score3=300
let score4=400

console.log(Array.of(score1,score2,score3,score4))