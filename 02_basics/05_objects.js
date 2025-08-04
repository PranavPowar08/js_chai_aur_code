const course ={
    name:"Js in Hindi",
    price :"999",
    courseInstructor:"Hitesh"
}
// Value name destructure
const {courseInstructor :teacher} =course

console.log(teacher)


// How json looks
// {
//     "Name":"Pranav",
//     "course":"AZStriver",
//     "Price":"Free"
// }