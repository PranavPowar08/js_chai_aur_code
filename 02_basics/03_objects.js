// singleton
// Object.create     constructor method

// object litrals

const mySym =Symbol("Key1")
console.log(typeof mySym)

const Jsuser={
    name :"Pranav",
    age:23 ,
    // take symbol as a key value
    [mySym]:"newkey",
    email:"pranav@google.com",
    isLoggedIn : true,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(Jsuser.name)

// console.log(Jsuser["age"])

// console.log(typeof Jsuser[mySym])

// console.log(Jsuser[mySym])

console.log(Jsuser)
// Jsuser.name="Ram"
// console.log(Jsuser.name)
// Object.freeze(Jsuser)
// Jsuser.name="Lkshman"
// console.log(Jsuser.name)


Jsuser.greeting=function(){
    console.log("hello JsUser")
}

Jsuser.greeting2=function(){
    console.log(`hello JsUser ${this.name}`)
}

console.log(Jsuser.greeting)
console.log(Jsuser.greeting())

console.log(Jsuser.greeting2)
console.log(Jsuser.greeting2())