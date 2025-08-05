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
