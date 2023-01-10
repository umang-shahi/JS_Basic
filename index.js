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

// let name = "adrian Pradhan";
// console.log(name)
// console.log(typeof name)
// name = Number(name)
// console.log(typeof name)

// // Type conversion and String methods

// // let number = 112;
// // console.log(number)
// // console.log(typeof number)
// // console.log(typeof String(number))

// // Strings Methods

// let str = "Hello Nurse"
// let y = "I am a doctor"
// //CharAt
// console.log(str.charAt(7))
// //Concatenation
// console.log(str.concat(y))
// //length
// console.log(str.length)
// //Replace
// console.log(str.replace('Nurse','Baby'))
// //Uppercase
// console.log(str.toUpperCase())
// //Lowercase
// console.log(str.toLowerCase())
// //Split
// console.log(str.split(""))
// //Split while there is a space
// console.log(str.split(" "))
// //Knowing the index
// console.log(str.indexOf("s"))
// //Last index of method
// console.log(y.lastIndexOf("o"))
// //Includes
// console.log(str.includes("Nurse"))
// let a = "     Ladki ho toh Nurse     "
// console.log(a.trim())
// //Slicing
// console.log(str.slice(0,7)) //It doesnot include the exact last data of the index



// const heading = document.getElementById('mycss');
// heading.innerText = "hello umang";


// heading.style.background="red";
// heading.style.color = "white";
// heading.style.textAlign ="center";





//conditions

// let email = "umangshahi800gmail.com";
// let pass = "1111111111";
// if (email===umangshahi800gmail.com && pass==="1111111111"){
    // console.log("login success!");
// } else {
    // console.log("invalid!");
// } 



//x=10

// let x=10;


// if (x > 15) {
//     console.log("x is gretater than 15")
// } else if (x>5) {
//     console.log("x is greater than 15 but not greater than 5")
// }else {
//     console.log("x is not greater than 15")
// }

//weather

// let weather ="winter";

// if (weather==="sunny"){
//     console.log("beautiful day");
// }else if(weather==="cloudy") {
//     console.log(" a bit cloudy");
// }else if (weather==="rainy"){
//     console.log("rainy day");
// }else if(weather==="winter "){
//     console.log("jaddooo");
// }else {
//     console.log("invalid");
// }


//switch

// let day= "sunday";
// switch (day)  {
//     case "sunday":
//         console.log("today is sunday");
//         break;

//         case "monday":
//         console.log("today is monday");
//         break;

//         case "tuesday":
//         console.log("today is tuesday");
//         break;

//         case "wednesday":
//         console.log("today is wednesday");
//         break;

//         case "thrusday":
//         console.log("today is thrusday");
//         break;

//         case "friday":
//         console.log("today is friday");
//         break;

//         case "saturday":
//         console.log("today is saturday");
//         break;

//     default:
//         console.log("invalid day");
//         break;
// }

// let grade="A";

// switch (grade) {
//         case "A":
//         console.log("excellent ");
//         break;

//         case "B":
//             console.log("very good");
//             break;

//             case  "C":
//                 console.log("good ");
//                 break;

//                 case "D":
//                     console.log("bad");
//                     break;

//                     case "E":
//                         console.log("fail");
//                         break;

//     default:
//         console.log(" grade not found ");
//         break;
// }


// let month="feb";

// switch (month) {
//     case "june":
//         case "july":
//         console.log("q1");
//         break;

//         case "janaury":
//         case "august":

//             console.log("q2");
//             break;

//             case "feb":
//             case "october":

//                 console.log("q3");
//                 break;

//                 case "november":
//                 case "december":

//                     console.log("q4");
//                     break;

//     default:
//         console.log("not in the queue");
//         break;
// }

// for (i=0; i<10; i++){
//     console.log(i);
// }

// const number = [1, 2, 3, 4, 5, "apil"];
// document.write(number.length);
// alert(number[5]);

//while loop
// let x = 0;
// while (x<5) {
//     document.write(x);
//     x++; }

// do{
//     document.write(x);
//     x++;
// }
// while(x<5)

//Array

// const myArray = [1, 2, 3, "apil", "g"];
// document.write(myArray.length);

//push to add element in arry
// const newAdd = myArray.push("good");
// document.write(myArray);

//unshift method
// const newAdd = [ 1, 2, 4, "sdf"];
// document.write(newAdd.unshift("sharma"));
// document.write(newAdd);


//pop 
// const newAdd = [ 1, 2, 4, "sdf"];
// console.log(newAdd);
// const newData = newAdd.pop();
// console.log(newData);

//shift 
// const newAdd = [ 1, 2, 4, "sdf"];
// const newData = newAdd.shift();
// console.log(newAdd);
// console.log(newData);

//concat
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9,10];
// console.log(arr1.concat(arr2));

//Filter
//let newArr = [11, 12, 13, 14, 15, "api"];
//console.log(newArr);
//const findFlter = newArr.filter(👎 => n>5);
//console.log(findFlter);
//console.log(newArr);

//Splice 
// console.log(newArr.splice(2,4));

//reverse
//console.log(newArr.reverse());

//Sorting
// let newArr = [8,1, 4, 5, 3, 2, ];
// console.log(newArr)
// const myData = newArr.sort();
// console.log(myData);
// console.log(newArr);

// let myarr = [];

// myarr[0] = 1;



// for (let i=0;i<10;i++) {
//     myarr[i]=i;
//     myarr.push(i);
// }





//objects

// const myProfile = {
//     firstName : "john",
//     lastName : "doe",
//     age : 20,
//     isMarried : true,

//     isSalary: function () {
//         console.log("mero name ho umang");
//     }

// }
//  console.log(myProfile);

//  console.log(myProfile.age);

//  console.log(myProfile.isMarried);

//  console.log(myProfile["isMarried"]);

//  console.log(myProfile["firstName"]);

// const ans =myProfile.isSalary();

// console.log(ans);

// const car = {
//     make : "toyota",
//     model: "camry",
//     color : "red",
//     runWheel : 4,
//     isElectric: false,
//     startEngine: function () {
//         console.log("start engine")
//         return true;
//     },

//     endEngine: function () {
//         console.log("end engine")
//         return false;

//     },


// }

// console.log(car);
// console.log(car.startEngine());
// console.log(car.endEngine());

// if (car.startEngine () ){
//     console.log("ready")
// } else if (car.endEngine ()){
//     console.log("not ready")
// } else {
//     console.log("not valid")
// }




//functions

// function myData () {
//     let a = 20;
//     let b = 10;
//     let result = a / b;

//     console.log(result);
    
// }

// myData();

// function func (a,b,c ){
//     return (a+b+c)/2;

// }

// const ans = func(1,2,3)
// const anss = func(1,2,5)

// console.log(ans);
// console.log(anss);

// const myValue = function () {
//     let x =5 ;
//     let y= 3;
//     let result = x*y;
//     console.log(result);
// }

// myValue();








// function myData ( arr = []) {
//     let total = 0;
//     for (let i=0; i< arr.length; i++){
//         total = total + arr[i];
//     }
//   return total;
// }

// const ans = myData([3,4,5,6]);
// console.log(ans);







// var x = 90;

// function myVar(){
//     var x= 9+9;
// console.log(x);

// }

// console.log(x);


// myVar();


// function myBlock(){
//     if(true){
//         var x = 9*9;
//         console.log(x);
//     }
//     console.log(x);

// }

// myBlock();



// function myBlock(){
//     if(true){
//         const y= (2*6-1)/2;
//         console.log(y);
//         }
//     }
// myBlock();













