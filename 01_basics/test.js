// console.log("Pranav")

// let score =33

// console.log(typeof score)
// console.log(typeof(score))

// score ="33"

// console.log(typeof score)
// console.log(typeof(score))

// let numValue = Number(score)
// console.log(typeof numValue)

// console.log(13%5);

console.log("For Loop")
for(let i =0; i<5; i++){
    console.log(i*2)
}


console.log("While Loop")
let i = 1
while(i<10){
    console.log(i);
    i++;
}

console.log("Do_While Loop")

let j=1
do{
    console.log(j);
    j++;

}while(j<5);

console.log("For ..in Loop")
const person ={
    name:"Pranav",
    age:22,
    city:"Kolhapur"
}

for(let info in person){
    console.log(info,person[info])
}


console.log("For ..of Loop")
let arr =[1,2,3,4,5]
for(let val of arr){
    console.log(val)
}