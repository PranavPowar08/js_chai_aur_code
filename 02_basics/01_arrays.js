console.log("Arrays")

const myArr = [0,1,3,4,8,9]
// console.log(myArr[3])

const myHero =["IronMan","Batman","Spider","Hulk","Strange"]

const myArr2 =  new Array(1,2,3,4)
// console.log(myArr2[2])
console.log(myArr2)

// ==============Array Methods ===================

// add element at last
myArr2.push(6)
console.log(myArr2)
// remove last element
myArr2.pop(6)
console.log(myArr2)
// Add at first element
myArr2.unshift(9)
console.log(myArr2)
// Removes first element
myArr2.shift()
console.log(myArr2)

console.log(myArr2.includes(5))
console.log(myArr2.indexOf(5))
console.log(myArr2.indexOf(4))

const newarr =myArr.join()
console.log(newarr)
console.log(myArr)

console.log(typeof newarr)
console.log(typeof myArr)

// Slice ,Splice
console.log('Slice')
const arr3=[0,1,2,3,4,5]
console.log("A ",arr3)

const myn1 =arr3.slice(1,3)
console.log(myn1)
console.log("B ",arr3)

console.log("Splice")
const arr=[0,1,2,3,4,5]
console.log("A ",arr)
const myn2 =arr.splice(1,3)
console.log(myn2)
console.log("B ",arr)