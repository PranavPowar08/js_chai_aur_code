// let a = 10
// const b = 20
// var c = 30

if (true) {
    let a = 10          //This in scope
    const b = 20        //THis in scope
    var c = 30
}

// console.log(a)
// console.log(b)
// console.log(c)

function one (){
    const userName ="Pranav"

    function two (){
        const website ="youtube.com"
        console.log(userName)
    }
    // console.log(website)
    console.log("one")
    two()
}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ========================================Interesting====================================


console.log(addone(5))

function addone(num){
    return num + 1
}

addone(5)
console.log(addone(5))

// addTwo(5)
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5))
