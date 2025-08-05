console.log("Functions")

function saymyname (){
    console.log("P")
    console.log("R")
    console.log("A")
    console.log("N")
    console.log("A")
    console.log("V")
}

// saymyname()

function addTwoNumbers( a , b){
    return a+b;
}
// console.log(addTwoNumbers(5,4))
// console.log(typeof addTwoNumbers())

const result =addTwoNumbers(5,4)
// console.log("Rusult :" + result)

function loginMessage (userName){
    return `${userName} Just Logged In.`
}

// loginMessage("Pranav")
// console.log(loginMessage("Pranav"))
// console.log(loginMessage())


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage(""))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice (...num1){     //Rest and Spread oprator ...  now it is rest 
    return num1
}

console.log(calculateCartPrice(2))
console.log(calculateCartPrice(200 ,300, 400))

// how to pass Objects in Function
const user={
    name:"Raamu",
    age:25
}

function handelObject(anyobject){
    console.log(`Username ${anyobject.name} and age is ${anyobject.age}`)
}

handelObject(user)
handelObject({
    name:"Pranav",
    age:23
})

const arr =[200,300,400,500]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(`Second Value in array ${returnSecondValue(arr)}`)