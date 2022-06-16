let greet = () => console.log('welcome');
greet();
const z =  x => console.log(x);
z('hi');
//adding two numbers
const c = (x,y) =>{
    return x+y
}
// console.log((5,7));
c(5,9);


//if esle
let age = 5;
const e = (age<18) ?
    () => console.log('baby'):
    () => console.log('adult');
    e();
//multiline arrow function
    const sum = (x,y) =>{
        return x+y
    }
    // console.log((5,7));
    let result1 = sum(6,4);
    console.log(result1);


    //this with arrow function

//     function Person(){
//         this.name = 'Jack',
//         this.age=25,
//         this.sayName = function(){
//             //this is accessible
//             console.log(this.age);
        
//         //inner function
//         function innerFunc(){// this refers to the global object
//             console.log(this.Person);
//             console.log(this);
//         }
//         innerFunc();
//     }
// }
// let x = new Person();
// x.sayName();
//inner arrow function
function Person() {
    this.name = 'Jack',
    this.age = 25,
    this.sayName = function () {

        console.log(this.age);
        let innerFunc = () => {
            console.log(this.age);
        }

        innerFunc();
    }
}

const y = new Person();
y.sayName();

//arguments binding done only functions not by arrow functions
let arg = function(){
    console.log(arguments);
}
arg(4,6,7)
// example:arguments binding done only functions not by arrow functions
// let x = () => {
//     console.log(arguments);
// }

// x(4,6,7); 
// ReferenceError: Can't find variable: arguments
//spred syntax we can achive it
let spread =(...n) =>{
    console.log(n);
}
spread(4,6,8);