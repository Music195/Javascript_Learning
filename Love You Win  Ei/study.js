/*
 const num1 = 49;
 let num2 =79
 if (num1<50 && num2 >78) {
     num2 +=1
 }


*/

/* 
member type                        price
not member                        full
normal member                      10%discount
silver member                      20%discount
gold member                      30%discount
platinum member                      40%discount
*/

let originalPrice = 200;
let totalPrice = 0;
let memberType = "normalMember"

if (memberType=== "normalMember" ) {
    totalPrice += 200 * 0.9;
} else if (memberType=== "silverMember") {
    totalPrice += 200 * 0.8;
} else if (memberType=== "goldMember") {
    totalPrice += 200 * 0.7; 
} else if (memberType==="platinumMember") {
    totalPrice += 200 * 0.6;
} else {
    totalPrice = originalPrice;
}


 switch (expression) {
     case choice(1) :
         //run this code
         break;
    case choice (2):
        //rum this code
        break;
    default: 
        //run this code

 }

 // Example
    const num1 = 16;
    const num2 = 2;
    let num3 = 5;

    switch (num1/num2) {
        case 9:
            num3 += 9;
            break;
        case 8:
            num3 += 8;
            break;
        default:
            num3 += 50;
    }


 
    

// FUNCTION
// developer.mozill.org

// function declaration
// Dry principle = Don't Repeat Yourself
let num1 = 0
// parameter
function calculate(number) {
    num1 = number * 2;
    num1 += 4;
    num1 /= 2;
}

// call the declared function to use it 
calculate(4);

// repeating yourself
// for no 2
let total = 0
let no = 2
//start
total = no * 2;
total += 4;
total /= 2

// for no 3
let total = 0
let no = 3
//start
total = no * 2;
total += 4;
total /= 2

// for no 4
let total = 0
let no = 4
//start
total = no * 2;
total += 4;
total /= 2

// for no 5
let total = 0
let no = 4
//start
total = no * 2;
total += 4;
total /= 2




// FUNCTION PART 2

// Value returning function
let no = 0 
function getNumber(number) {
    return number;
}

no2 += 10; // retruning function don't run the cod under it but under the returning function.
 
// to return value
const myNumber = getNumber(5);

// ES6 arrow function
() => {

}

// to call arrow function it must have the Variable, So
const myArrowFunction = (parameter) => {
    parameter * 9
}

myArrowFunction(7);

// built in function
alert("Hello Myanmar")




//OBJECT
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics
 
const no1 = 10;
const cityName = "Yangon";
const isLoggedIN = true;
/*
name = "Khiine"
age = 20
height = 156
city = "Yangon"
isActor = true
*/
{} // empty object
 
const person1 = {
    name: "Khiine",
    age: 20,
    height: 156,
    city: "Yangon",
    isActor: true,
    walk: () => {
        alert("Khine is walking now...")
    }
}

// Accessing object's properties and methods
// 1) dot notation
person1.name
person1.walk()

// 2) bracket notation
preson1["name"]
person1["walk"] ()

//OBJECT PART 2

//add more properties and method

person1.hobby = "football"
person1.eat = () => {
    alert("Khine is eating now...")
}

//dynamic adding property

const inputName = "Win";
const inputValue = "8";
const propertyName = "donatedBy" + "inputName";
//donatedByWin: 8
person1[propertyName] = inputValue;
  
// window object
alert("hello")
console.log("welcome") // to get the variable's Value




// ARRAY 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

//  LOOP
//https://developer.mozilla.org/en-US/docs/Glossary/loop
// FOR LOOP

const customers = [
    { name: 'customer1', phone: '14324', email: 'customer1@gmail.com', city: 'Yangon', dateOfBirth: '18.12.2000'},
    { name: 'customer2', phone: '47569', email: 'customer2@gmail.com', city: 'Mandalay',dateOfBirth: '8.12.2000'},
    { name: 'customer3', phone: '23454', email: 'customer3@gmail.com', city: 'Magyay',dateOfBirth: '28.12.2000'},
    { name: 'customer4', phone: '87646', email: 'customer4@gmail.com', city: 'Mawlamyine',dateOfBirth: '14.12.2000'},
]

const customer1 = customer[0];
const customer1Email = customer1.email;
//Or
const customer1Email = customer[0].email;


const sendEmail = (email) => {
    console.log("Sending email to: ", email)
}


const sendCDEmail = (email) => {
    console.log("Sending email with special discount to: ", email)
}


for (let i = 0; i< customers.length; i++) {
    let customersEmail= customers[i].email;
    sendEmail(customersEmail);
}
//discount mailing

for ( let i = 0; i < customers.length; i++) {
    let customersEmail = customers[i].email;
    let customersCity = customers[i].city;
    if (customersCity === 'Yangon') {
         sendCDEmail(customersEmail);
    } else {
        sendEmail(customersEmail); 
    }
}


/*   for customer1
     sendEmail(customer1Email);

     for customer2
     sendEmail(customer2Email);

     for customer3
     sendEmail(customer3Email);

     for customer4
     sendEmail(customer1Email);
*/


const cities = ['Yangon','Mandalay','Myitkyina','Rakine','Magway']

for ( let i = 0; i < cities.length; i++) {
    console.log(i, cities[i])
}


/* contineue ,break */ 
const customers = [
    { name: "customer1", email:"customer1@gmail.com", gender: "female"},
    { name: "customer2", email:"customer2@gmail.com", gender: "female"},
    { name: "customer3", email:"customer3@gmail.com", gender: "male"},
    { name: "customer4", email:"customer4@gmail.com", gender: "female"},
    { name: "customer5", email:"customer5@gmail.com", gender: "male"},
]

for ( let i = 0; i < customers.length; i++) {
    let customerForMailing = customers[i];
    console.log("Sending email to: ", customerForMailing.email);
    if ( i ===2) {
        break;
    }
}

for ( let i = 0; i < customers.length; i++) {
    let customerForMailing = customers[i];
    if (customerForMailing.gender === 'male') {
        continue;
    }
    console.log("Sending email to: ", customerForMailing.email);

}

// while loop
let i = 0;
while ( i < customers.length) {
    let customerChosen = customers[i];
    i++;
    if ( customerChosen.gender === "male") {
        continue;
    };
    console.log("Sending email to: ", customerChosen.email);
   
}


// Callback function 


// Array filter
const customers = [
    { name: "customer1", email: "customer1@gmail.com", gender: "female", age: 20},
    { name: "customer2", email: "customer2@gmail.com", gender: "female", age: 25},
    { name: "customer3", email: "customer3@gmail.com", gender: "female", age: 30},
    { name: "customer4", email: "customer4@gmail.com", gender: "female", age: 35},
]

customers.filter(isMale);
const isMale = (arrayElement) => {
    return arrayElement.gender === "male";
}

/* Call callback function with each element from the array as the parameter to the callback function. 
   Callback function must return a boolean (true/false) value based on the condition it wants to test.
   If the callback function returns true, add the element to the final array.
   Repeat the abouve steps for every element in the array.
   */

for (let i = 0; i < customers.length; i++) {
    customers[i].bookings = [];
}

customers.map(callback); // []


const addBookingsArrayToCustomerObject = (element) => {
    element.bookings = [];
    return element;
}

/*
1. Call the callback function with each element in the array as the parameter to the callback function.
2. Populate the returned array with the result from the callback.
3. Repeat the above steps for every element in the array.
*/

/* Most used built-in methods and properties */

//String 
let textString = "Welcome To Myanmar";

textString.toUpperCase();
textString.toLowerCase();
textsString.length;
textString.indexOf("e"); // 1

let num = 1;
let result = parseInt(num, 10);

let num = 10;
num.toString();


