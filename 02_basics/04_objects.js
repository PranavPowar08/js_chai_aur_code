// const tinderUser =new Object()  //Singleton object

const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser)


const regUser ={
    email:"pranav@google.com",
    fullname:{
        userfullname:{
            firstname:"Pranav",
            lastname:"Powar"
        }
    }
}

console.log(regUser)
console.log(regUser.fullname)
console.log(regUser.fullname.userfullname)
console.log(regUser.fullname.userfullname.firstname)
// Hint for next
// console.log(regUser.fullname?.userfullname.firstname)

const obj1={
    1 :"a",
    2 :"b"
}

const obj2={
    3 :"a",
    4 :"b"
}

const obj3 ={obj1,obj2}
console.log(obj3)

const obj4=Object.assign({},obj1,obj2)   //best practice cause more objects can be done 
console.log(obj4)

// Object.assign(obj1,obj2)
// console.log(obj1)

const obj5 ={...obj1,...obj2}
console.log(obj5)


console.log(tinderUser)
console.log( Object.keys(tinderUser))
console.log( Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn'))