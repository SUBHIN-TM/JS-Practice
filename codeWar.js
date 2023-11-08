

// // 1./Write a function "greet" that returns "hello world!"
// function greet (){
//     return "hello world!"
//   }


//   //2 function DNAtoRNA(dna) {
// //   // create a function which returns an RNA sequence from the given DNA sequence
// //   return dna.replaceAll("T","U")
// // }
//  let DNAtoRNA=(dna)=> dna.replaceAll("T","U")
 


// //3.function paperwork(n, m) {
//    if(n>=0 && m>=0){
//     return n*m
//   }
//   else{
//     return 0;
//   }
 


// //4.if even number then mult with 8 and if not mult with odd
// let simpleMultiplication=(number)=>number%2==0 ? number*8:number*9


// //5.Convert number to reversed array of digits,  35231 => [1,3,2,5,3]
// function digitize(n) {
//     return Array.from(String(n)).map(Number).reverse()
//   }


//   //6. transform a number (integer) into a string. 123  --> "123"
//   function numberToString(num) {
//     // Return a string of the number here!
//     return num.toString()
//   }


// //7. he drinks 0.5 litres of water per hour of cycling. ,time = 6.7---> litres = 3 , rounded to the smallest value.
// function litres(time) {
//     return Math.floor(time*0.5)
//   }


// //8.Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers..
// var countSheep = function (num){
//     let result=""
//     for(let i=1;i<=num;i++){
      
//       result += `${i} sheep...`;
//     }
//     return result;
//   }


// //9.Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// function evenOrOdd(number) {
//     return number%2==0 ? "Even":"Odd"
//   }


// //10.Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// /* 
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]  The correct answer would be 17.
// */
// function countSheeps(sheep) {
//     // TODO
//     return sheep.filter(Boolean).length //IT WILL RETURN COUNT OF ONLY TRUE
//   }


// //11.friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"] ONLY RETURN 4 LETTER WORDS
// function friend(friends){
//     //your code here
//     return friends.filter((value) => value.length==4)
//   }
  


//12.just print the positive numbers
// let a=[1, 5.2, 4, 0, -1] 
// function display(a){
// const result=a.filter((data) => data > 0);
// console.log(result);
// }
// display(a)
// console.log("\n");



////13.Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
// let b=[1, 5.2, 4, 0, -1] //OP SHOULD BE 9.2

// function sum(x){
//     if(x.length==0){
//         return 0
//     }
//     return x.reduce((total,number)=> total + number,0)

// }
// console.log(sum(b));
// console.log("\n");



/*14.You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.*/
// var c=[1,-4,7,12]
//  function add(x){
//     return x.reduce((total,number) => {
//         if(number >= 0){
//            return total + number;
//         }else{
//             return total
//         }
//     },0)
//  }
// console.log(add(c));
// console.log("\n");


 /*15.ask:Given a list of integers, determine whether the sum of its elements is odd or even.
Give your answer as a string matching "odd" or "even".
If the input array is empty consider it as: [0] (array with a zero). */


// console.log(oddOrEven([]));
// function oddOrEven(array) {
//     const result =array.reduce((total,data) => total + data,0)
//     return array.length == 0 ? "even": result %2 ==0 ? "even":"odd";
//  }
//  console.log("\n");


 /*16.
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12 */

// const check = (x) => x<0?x:0-x
// console.log(check(0));
// console.log("\n");


/*17. You are going to be given a word. Your job is to return the middle character of the word. 
If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters. */

// function getMiddle(s) {
//     let array = s.split("");
//     let length = Math.floor(array.length / 2);
  
//     if (array.length % 2 !== 0) {
//       return array[length];
//     } else {
//       return array.slice(length -1, length + 2).join('');//length value -1 get the crct index slice(index and 1 extra to slice next)
//     }
//   }
  
//   console.log(getMiddle("haah"));
  



  

  
  /*18.Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
  */

// var summation = function (num) {
//     let k=0;
//     for(let i=0;i<=num;i++) {
//     k += i
//     }
//    return k
//   }
//   console.log(summation(2));
  
  
  
  
  /*19.
  Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:
Sam Harris => S.H
patrick feeney => P.F
*/


// function abbrevName(name){
//   let k= name.split("")  //while we put 1 space it store as 2 words if we put no space it wil store as strins as all letters seperatlty
//   let firstName=k[0].charAt(0).toUpperCase()
//   let lastName=k[1].charAt(0).toUpperCase()
//   return `${firstName}.${lastName};`
// }
// console.log(abbrevName("subhin Akshaya"));
 
//.20. Given an array of integers your solution should find the smallest integer.
// For example:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// let k=[2,3,4,1,-55,777,-888]

//  function findSmallestInt(args) {
   
//   }

//   console.log(findSmallestInt(k));


// 21.Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

console.log(sumMix([1,"2"]));
function sumMix(x){
  return x.reduce((total,data) => {
   let result = total + Number(data) //Caonvert data to numbr
   return result

  },0)
  

}