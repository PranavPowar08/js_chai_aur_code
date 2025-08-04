const score = 400
// console.log(score)

const balance =new Number(100)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))
const firstNumber =23.8966
const otherNumber =123.8966
// console.log(firstNumber.toPrecision(3))
// console.log(otherNumber.toPrecision(3))

const hundreds = 1000000
// console.log(hundreds.toLocaleString())
// console.log(hundreds.toLocaleString('en-IN'))

const a =Number.MIN_VALUE
// console.log(a)


// ======================== MATHS==========================
// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.3))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2))  //take top value
// console.log(Math.floor(4.2)) //take base value
// console.log(Math.floor(4.6))
// console.log(Math.max(4,3,8,9,4))
// console.log(Math.min(4,3,8,9,4))

console.log(Math.random())
console.log(Math.random()*10)
console.log((Math.random()*10)+1)

const min =10
const max =20

const value =Math.random()*(max - min+1)
const inRangeValue =Math.floor(value)+min
console.log(inRangeValue)