
console.log('hello')
console.log('hello')
//we write a comment with a double slash)

//We can manipulater the DOM in javascript 
//in other words we can change the Html with javascript ..see below

// let age = prompt('how old are you')
// document.getElementById('someText').innerHTML =  age ;

//numbers in Javascript
let num1 = 10;
num1 = num1+ 1;
console.log(num1);


/*functions
step 1 create a function
step 2 call the function 

*/


//create the function
function fun(){
    console.log("this is a function ")
};

//call the function
fun()

//lets create a function that takes in  name and says 
//hello followed by your name..
//for example    Name:Patrick   Return: "Hello Patrick"

function greeting(yourName) {
    let result = "Hello " + yourName +" How are you ..?"
    console.log(result)

}
//let name = prompt("What is you name")
//greeting(name)

//How arguments work in functions 
function sumNumbers(num1, num2) {
    let result = num1 + num2;
    console.log(num1 + num2);

}

//sumNumbers(5,4)

//how to do things multiple times..we use loops

//While loop

// var num4 = 0;
// while (num4 < 5) {
//      num4 += 1;
//      console.log(num4)
//  }


//For loop

for(let num = 0; num < 8; num ++) {
    console.log(num)
}