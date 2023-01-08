// var x=3;
// console.log(x);
// console.log(x*x*x);
// x=12;
// console.log(x);
// let a=12;
// console.log(a);
// const pie=3.14;
// console.log(pie);
// alert("Oye kukur!! Bolna");
 
// const x="8";
// x=int(x);
// console.log(x);
// console.log(typeof(x));

// let bool = true;
// console.log(typeof(bool));

// let x = 90
// let y = 67
// let z = false
// let result = x+y+z
// console.log(result)

// let name = "JavaScript";
// let y = 90;
// let find = name+ y;
// console.log(find);

// const firstname = "Arya"
// const surname = "Doctor"
// console.log(firstname +" "+ surname)
// console.log("My name is : " + firstname + surname)
// console.log("My name is : " + firstname+ " " + surname)
// const Doctor = (`My name is : ${firstname} ${surname}.`)
// console.log(`Hello Nurse ❤️ ${Doctor}`)

let name = "adrian Pradhan";
console.log(name)
console.log(typeof name)
name = Number(name)
console.log(typeof name)

// Type conversion and String methods

// let number = 112;
// console.log(number)
// console.log(typeof number)
// console.log(typeof String(number))

// Strings Methods

let str = "Hello Nurse"
let y = "I am a doctor"
//CharAt
console.log(str.charAt(7))
//Concatenation
console.log(str.concat(y))
//length
console.log(str.length)
//Replace
console.log(str.replace('Nurse','Baby'))
//Uppercase
console.log(str.toUpperCase())
//Lowercase
console.log(str.toLowerCase())
//Split
console.log(str.split(""))
//Split while there is a space
console.log(str.split(" "))
//Knowing the index
console.log(str.indexOf("s"))
//Last index of method
console.log(y.lastIndexOf("o"))
//Includes
console.log(str.includes("Nurse"))
let a = "     Ladki ho toh Nurse     "
console.log(a.trim())
//Slicing
console.log(str.slice(0,7)) //It doesnot include the exact last data of the index



const heading = document.getElementById('mycss');
heading.innerText = "hello umang";


heading.style.background="red";
heading.style.color = "white";
heading.style.textAlign ="center";



let x=10;
if(x<5) {
    console.log("x is greater than 5");
}else {
    console.log("x is greater or equal to 5 ");
}



