//JAVASCRIPT


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


//dom manipulation

// const ans = document.getElementById("myIs");
// ans.innerHTML= "ronaldo 💕";


// ans.innerText = "ronaldo is ⭐";

// const result=document.getElementsByClassName("myYour");
// console.log(result[0]);
// result[0].innerHTML = "ajxubx  j hhhhhhhjhhhjm";
  

//  const  ans =document.getElementsByTagName("span");
//  console.log(ans);
// ans[0].innerHTML="<h1>sad</h1>";

// const ans = document.getElementsByName("email");
// console.log(ans[0]);
// ans[0].style.width= "200px";

// const ans = document.getElementById("click");
// console.log(ans);
// ans.style.color= "red";
// ans.style.backgroundColor="blue";
// ans.style.padding="2px";
// ans.style.border="none";


// const ans = document.createElement("h2");
// console.log(ans);
// document.body.prepend(ans);

// function myFunc(){
//     const create = document.createElement("h2");
//     create.innerHTML = "thanos was right";
//     document.body.append(create);
// }

// myFunc();

// const myClear= document.querySelectorAll("button");
// console.log(myClear);

// for(i=0;i<myClear.length;i++){
//     myClear[1].innerText = "this is the clear button";
//     myClear[1].style.background = "#00ffff";
//     myClear[1].style.color ="green";
//     myClear[1].style.padding ="10px";
//     myClear[1].style.border ="none";
//     myClear[1].style.cursor ="pointer";
//     }
//     function deleteThis() 
//     {
//         const PleaseDelete =documet.querySelector("h1");
//         PleaseDelete.remove();
        
//     }

//     myButton.onCLick =myFunc;
//     myClear[1].onClick = deleteThis;






//Advanced array method (if we use for each it cannot return array(anything). it omly iterate main array)


 
    
      

    //   const result = arr.forEach((value,index,array) => {
    //     console.log();

    //   })
    //   console.log(result);


    //map
    // if we use map method it returns new array after iterate main array 
   


// const myMap = arr.map((value,index,array)=>{
//   return (arr[index]= value+ 2);
// });



// console.log(myMap); 



// const result = arr.filter((value,index)=>{
  
//   return value % 2 !==0 ;

// });
//     console.log(result);


// let arr =[6,8,4,2,10,12];

// const ans = arr.find((value,index)=>{
//     return value > 4 ;
// })
// console.log(ans);

//reduce
//return single value outputma(sum,average)

// const result = arr.reduce((accum,curValue,index)=>{
//     accum = accum + curValue;
//      return accum  ;
// })
// console.log(result);


// const newClickButn = document.getElementById("newClick");
// console.log(newClickButn);  


//addeventclicklisteners

// const myInput = document.querySelector("input");
// const myBox = document.getElementById("mybox");

// myInput.addEventListener("change",(e)=>{
//    console.log(e.target.value);
// })

// myBox.addEventListener("doubleclick",()=>{
//     document.body.style.background="black";

// })

// myBox.addEventListener("click",()=>{
//     document.body.style.background="white";

// })

// NewClickBtn.addEventListener("contextmenu",()=>{
//     document.style.background ="pink";  
// })





// addEventListener("contextmenu",(e)=>{
//     e.preventDefault();
// })






//local and session storage

// const myClick=document.getElementById("myclick");
// const myInput = document.getElementById("myinput");
// const myCLear =document.getElementById("myclear");



// const callMeBack = () => {
//     // alert(myInput.value);
//     localStorage.setItem("name",
//     JSON.stringify({fname:"ram",lname:"shahi",age:23})   //stringify to convert object into strings.
// )
// }

// const DeleteToken =()=>{
//     localStorage.clear();
// }

// myClick.addEventListener("click",callMeBack);
// myCLear.addEventListener("click",DeleteToken);


// if(localStorage.getItem("name")){
//     // alert(localStorage.getItem("name"))
//     console.log(JSON.parse(localStorage.getItem("name")));  // parse to convert all into objects
   
//    }
//   else {
//     alert("xaina ta k garnu ")
//   }





//math object

// const value=Math.random();
// console.log(value);

// const value= Math.abs(-5);
// console.log(value);

// const value=Math.max(2,3,4,5,60);
// console.log(value);

// const value=Math.trunc(3.8);
//  console.log(value);


//  const values=Math.pow(2,9);
//  console.log(values);


//  const valuess= Math.sqrt(625);
//  console.log(valuess);





//setTimeOut and setInterval


//  const setId=setInterval ( () => {
//     console.log("sabai jana ko aatmale santi paaos")
// }, 3000)

// setTimeout(()=>{
//     clearInterval(setId);
// },3000) 














//Inheritance
// function BankAccount(CustomerName, balance=0){
//     this.CustomerName = CustomerName;
//     this.accountNumber= Date.now();
//     this.balance=balance;

    // this.deposit= function(amount){
    //     this.balance +=amount;
    // }
    
    // this.withdraw= function(amount){
    //     this.balance -=amount;
    // }

// }

//  CurrentAccount.prototype = Object.create(CurrentAccount.prototype);   //inherit


// BankAccount.prototype.deposit = function(amount){
//     this.balance+=amount;
// }

// BankAccount.prototype.withdraw = function(amount){
//     this.balance-=amount;
// }

// function CurrentAccount(CustomerName, balance=0){
//     BankAccount.call(this,CustomerName,balance);
    
//     this.transactionlimit=(200000);

// }

// function SavingAccount(CustomerName, balance=0){
//     BankAccount.call(this,CustomerName,balance);
    
//     this.transactionlimit=(100000);

// }

// CurrentAccount.prototype = Object.create(CurrentAccount.prototype); 



// CurrentAccount.prototype.BusinessLoan= function(amount)
// {
//   console.log(`BusinessLoan is: ${amount}`);
// }


// const hariAcc=new BankAccount("hari",5000);
// const hariAcc = new CurrentAccount("hari",2000);


// const hariAcc = new BankAccount("hari",2000)

// hariAcc.deposit(200);
// console.log(hariAcc);





// function person(Fname,Lname,age){
//       this.Fname= Fname;
//       this.Lname=Lname;
//       this.age = age;


//         this.jiji=function(){
//             console.log(`My name is ${Fname} ${Lname} and my age is ${age}`);
//         }
      
//     }    
      



// const otherName = new person ("Umang","Shahi",22);
// const othern = new person ("arya","don",19);


// console.log(otherName);
// console.log(othern);



// otherName.jiji();
// othern.jiji();







//function based oop


// function BankAccount(CustomerName,balance=0){
//     this.CustomerName=CustomerName;
//     this.balance=balance;
//     this.AccountNumber=Date.now();


// }



// BankAccount.prototype.deposit=function(amount){
    
//         this.balance+=amount;
    
// }

// BankAccount.prototype.withdraw=function(amount){
   
//         this.balance-=amount;
 
// }

// //child class inheritance
// function CurrentAccount(CustomerName,balance=0){
//  BankAccount.call(this,CustomerName,balance);  //constructor calling
//  this.TransactionLimit= 100000;

// }

// CurrentAccount.prototype = Object.create(BankAccount.prototype);
// CurrentAccount.prototype.takeBusinessLoan = function(amount){
//     console.log(`Taking loan: ${amount}`);
// }


// const  hariAcc = new CurrentAccount("hari",1000);
// hariAcc.takeBusinessLoan(1);
// hariAcc.deposit(2000);
// console.log(hariAcc);


// // const hariAcc=new BankAccount("hari",2000);






// //class based oop and inheritance

// class BankAccount{
//     CustomerName;
//     accountNumber;
//    #balance;

//    constructor(CustomerName,balance=0){
//     this.CustomerName=CustomerName;
//     this.accountNumber = Date.now();
//     this.#balance=balance;
//    }

//   deposit(amount){
//     this.#balance +=amount;
//     console.log(`Deposited ${amount}, Current balance is:${this.#balance}`)
//   }

//   withdraw(amount){
//     this.#balance -= amount;
//     if(this.#balance >= amount){
//     console.log(`Withdrawed ${amount}, Current balance is:${this.#balance}`)
//     }
//     else {
//         console.log(`Insufficient Fund, You have only: ${this.#balance}`);
//     }
//   }


//   set balance(amount){
//   this.#balance = amount
//   }
//   get balance(){
//   return this.#balance
//   }
  


// }

// //child class
// class CurrentAccount extends BankAccount{
    
//    constructor(CustomerName,balance=0){
//     super(CustomerName,balance);
//     this.transactionLimit= 5000;
    
//    }

//    #calculateInterest(amount){
//     const interest = amount*0.1;
//     console.log(`Taking business loan is: ${amount}`);
//    }

//   takeBusinessLaon(amount){
//     this.#calculateInterest(amount);
//     console.log(`Take loan:${amount}`);
//   }
  
// }

// const hariAcc=new BankAccount("hari",3000);


// hariAcc.deposit(2);
// hariAcc.withdraw(1);

// const hariAcc = new CurrentAccount("hari",2000);
// hariAcc.takeBusinessLaon(20);
// hariAcc.deposit(1);
// hariAcc.withdraw(1);



// hariAcc.takeBusinessLaon(200);

// console.log(hariAcc);



// static property and method

// class Calculator{
//     static add(a,b){
//         return a+b;
//     }
//     static sub(c,d){
//         return c-d;
//     }
// }
// let addition = Calculator.add(5,8);
// console.log(addition);

// let subtraction = Calculator.sub(3,2);
// console.log(subtraction);


// let ans =Math.random();
// console.log(ans);


// class User{
//     static id=1;
//     constructor(name,age,income){
//         this.name=name;
//         this.age=age;
//         this.income=income;
//         this.id =User.id++;

//         }
//         // static sortByAge(a,b){
//         //     return a.age - b.age
//         // }

//         static sortByIncome(a,b){
//             return a.income - b.income
//         }
// }

// const useer1=new User("ram",23,900);
// const useer2=new User("shyam",22,200);
// const useer3=new User("hari",21,1000);

// const users = [useer1 ,useer2, useer3];
// // users.sort(User.sortByAge);
// users.sort(User.sortByIncome);


// console.log(users);




  















