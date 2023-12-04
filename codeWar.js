

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

// console.log(sumMix([1,"2"]));
// function sumMix(x){
//   return x.reduce((total,data) => {
//    let result = total + Number(data) //Caonvert data to numbr
//    return result

//   },0)


// }


/*22.Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!
The function takes a name as its only argument, and returns one of the following strings:
name + " plays banjo" 
name + " does not play banjo */
// let k="Rubhin"
// console.log(areYouPlayingBanjo(k))

// function areYouPlayingBanjo(name) {
//    return name.charAt(0)=== "r"|| name.charAt(0)=== "R" ? `${name} plays banjo `:` ${name} does not play banjo`
//    const areYouPlayingBanjo = (n) => n.charAt(0)=== "r"|| n.charAt(0)=== "R" ? `${n} plays banjo`:`${n} does not play banjo`// ARROW FUNCTION 

// }



/*23.Implement a function which convert the given boolean value into its string representation.
Note: Only valid inputs will be given.
*/
// console.log(booleanToString(true));
// function booleanToString(b){
// return b.toString()
// }


/* 24The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
For example:
1.08 --> 30
*/

// function cockroachSpeed(s) {
//   return Math.floor(s*(5/18)*100) 
//   }
//   console.log(cockroachSpeed(1.08));


/* 25.You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
For example, when the input is green, output should be yellow.
*/
// function updateLight(current) {

//   if(current==="green"){
//     return "yellow"
//   }else if(current==="yellow"){
//     return "red"
//   }else{
//     return "green"
//   }

// }



/*26. Write a function which converts the input string to uppercase.
*/
// function makeUpperCase(str) {
//   return str.toUpperCase()
// }

// console.log(makeUpperCase("subhin"));



/*27. Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
ex = assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
*/


// function findShort(s){
//   const word= s.split(" ")
//   const length= word.map((data) => data.length)
//   return Math.min(...length) //LENGTH HAS[7,4,4,3...] BY USING SPREAD OPERATOR WE CAN SPREAD THE ENTIRE ELEMENTS OF THAT ARRAY
// }
// console.log(findShort('bitcoin take over the world maybe who knows perhaps'));



/*28. Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,
*/

// function invert(array) {
//   return  array.map((data) => 0- data)
// }

// let invert = (array) => array.map((data) => 0- data) 
// console.log(invert([1,-2,3,4,5]));


/*29.Complete the square sum function so that it squares each number passed into it and then sums the results together.
  for [1, 2, 2] it should return 9 because  1sq+2qr+2sqr
*/

// function squareSum(numbers){
//   return numbers.map((data) => {
//     return data*data
//   }).reduce((total,data) => {
//     return total + data
//   },0)
// }

// console.log(squareSum([1,2,2]))


/*30.Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
Examples:
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/
// function solution(str, ending){
//   if(str.endsWith(ending)){
//     return true
//   }else{
//     return false
//   }
// }

// console.log(solution("abc","d"));




/*30.Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/
// function boolToWord(bool) {
//   if (bool === true) {
//     return 'Yes';
//   } else {
//     return 'No';
//   }
//   return bool=== true?'Yes':'No'
// }

// console.log(boolToWord(true));



/*31.replace all 5 and above with 1 and less than 5 with 0
*/

// return x.toString().split('').map((value) => {
//   if (parseInt(value) >= 5) {
//     return '1';
//   } else {
//     return '0';
//   }
// }).join('');


/*32.Your task is to find the first element of an array that is not consecutive.
By not consecutive we mean not exactly 1 larger than the previous element of the array.
E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive nu
*/
// function firstNonConsecutive (arr) {
//   for(let i=1;i<arr.length;i++){
//     if(arr[i] !== arr[i-1]+1){
//       return arr[i]
//     }
//   }
//   return null
// }
// console.log(firstNonConsecutive([1,2,3,4,6,7,8,]));



/*33.Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:
employed | vacation 
true     | true     => false
true     | false    => true
false    | true     => false
false    | false    => false
*/
// function setAlarm(employed, vacation){
//   if(employed == true && vacation == false){
//     return true
//   }
//   return false
//   //(employed === true && vacation === false) ? true : false
// }

// console.log(setAlarm(true,false));



/*34Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
Mind the input validation.
*/
// function sumArray(array) {

//   let sort = array.sort((a, b) => {
//     return a - b
//   });

//   let filter = sort.filter((value, index) => {
//     return index !== 0 && index !== (sort.length) - 1;
      
//   })
//    let sum= filter.reduce((total,value) => {
//     return total + value

//    },0)
//    return sum
   
// };
  
// METHORD 2
  

// console.log(sumArray([6, 2, 1, 8, 10]));

// function sumArray(array) {
//   if( array==null || array.length === 0){
//     return 0
//   }
//  return array.sort((a, b) => a - b).slice(1,-1).reduce((total,value)=> total+value ,0)
// }
//   // slice(starting index,excluding index)


// console.log(sumArray([6, 2, 1, 8, 10]));


// /*35.Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
// */
// function removeExclamationMarks(s) {
//   return s.replaceAll("!","")
// }




/* 36.Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

Task Overview:
You have to write a function that accepts three parameters:
cap is the amount of people the bus can hold excluding the driver.
on is the number of people on the bus excluding the driver.
wait is the number of people waiting to get on to the bus excluding the driver.
If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
Usage Examples:
cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 wai
*/

// function enough(cap, on, wait) {
//   let k =  cap - (on+wait)
//   // if(k<0){
//   //   return 0 - k
//   // }else{
//   //   return 0
//   // }
//   return k<0? 0-k : 0
//   }

//   console.log(enough(20,5,5));




/*37.Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
*/

// function doubleChar(str) {
//   console.log(str);
//   const array=str.split("")
//   console.log("after split",array);
//   let result=[]
//   for (let i = 0; i < array.length; i++) {
//     result.push(array[i],array[i])
//     console.log('after push',result);
//   }
//   console.log("join without using invert comma look like",result.join());
// return result.join("") 
// }

// console.log(doubleChar("Hello"));


// // METHOD 2
// function doubleChar(strs) {
//   var result =[]
//  let str=strs.split("")
//  str.map((data) => result.push(data,data))
//   return result.join("")
 
// }



// let k= 'jeevan'
// console.log("hello"+ k);
// console.log("b"+"a"+ +"a"+"a");
// console.log("10",20+30);




/*38.Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.
ARRAYS
*/


// function howMuchILoveYou(nbPetals) {
//   let n = nbPetals > 6?  (nbPetals - 6 )%6 : nbPetals
//   return n == 1 ? "I love you": n==2 ? "a little": n==3 ? "a lot": n==4 ? 
//     "passionately":  n==5 ? "madly": "not at all";
//   }

// console.log(howMuchILoveYou(18));  




/*39.Write a function findNeedle() that takes an array full of junk but containing one "needle"
After your function finds the needle it should return a message (as a string) that says:
"found the needle at position " plus the index it found the needle, so:
Example(Input --> Output)
*/


// function findNeedle(haystack) {
// let k= haystack.indexOf('needle')
// return "found the needle at position "+k
 
// }

// console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));



/*40.When provided with a number between 0-9, return it in words.
Input :: 1
Output :: "One".
If your language supports it, try using a switch statement.
*/

// function switchItUp(number){
//   let n=number;
//   return n===1?'One':n===2?'Two': n===3?'Three':n===4?'Four': n===5?'Five':n===6?'Six':n===7?'Seven':n===8?'Eight':n===0?'Zero':'Nine'
// }

// console.log(switchItUp(3));



// function printer(x) {
//   let array=['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine']
//   return array[x]
   
// }

// console.log(printer(0));


/*41.Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.
If no occurrences can be found, a count of 0 should be returned.
("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
*/
// function strCount(str,letter){  
//   let k=str.split("")
//   let value =[]
//   k.map((data,index) => {
//     if(data===letter){
//      value.push(index)

//     }else
//     value === null
//   })
//   return value.length
// }
// console.log(strCount('helllo','l'));



// //METHORD2
// console.log(strCount('helllo','l'));

// function strCount(str, letter){  
//   return str.split(letter)
// }


/*42
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
Examples input/output:`
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

// function XO(str) {
//  let u= str.toUpperCase()
//   let sp= u.split("")
//  return  sp.filter((data) => data=== 'X').length === sp.filter((data) => data=== 'O').length

// }
// console.log(XO("ooxx"));


/* 43 Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
For example (Input --> Output):
39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/
// function persistence(num) {
//  const cv= num.toString().split("").map(Number)
//  while( cv.length > 1){
//   return cv.reduce((total,data) => total *data ,1)
// }
//  }
 

// console.log(persistence(999));


// function persistence(num) {
//   let count = 0;

//   while (num.toString().length > 1) {
//       num = num.toString().split("").map(Number).reduce((total, digit) => total * digit, 1);
//       count++;
//   }

//   return count;
// }

// console.log(persistence(999)); // This will output 4 as expected





/*44
You are given an odd-length array of integers, in which all of them are the same, except for one single number.
Complete the method which accepts such an array, and returns that single different number.
The input array will always be valid! (odd-length >= 3)
*/

// function stray(numbers) {
//     return numbers.findIndex((data) => numbers.firstIndexOf(data) === numbers.lastIndexOf(data))
// // return numbers.map((data) => data*2)
  
// }

// console.log(stray([1, 1, 2,2,2,4,1,7,4]));




/*45.Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
Write a function which takes a list of strings and returns each line prepended by the correct number.
The numbering starts at 1. The format is n: string. Notice the colon and space in between.
Examples: (Input --> Output)
[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/

// var number=function(array){
//   if(!array){
//     return[]
//   }
//   for(i=0;i<array.length;i++){
//     array[i]=`${i+1}: ${array[i]} `
//   }
//   return array

// }

// console.log(number(['A','B','C']));

// METHOD 2
// var number=function(array){
//   if(!array){
//     return []
//   }
// return array.map((data,index) => data=`${index+1}: ${data}`)

// }

// console.log(number(['A','B','C']));



/*46 .After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
Write a code that gives out the total amount for different days
*/
// function rentalCarCost(d) {
//  let total=d*40
//  return d >= 7 ?total-50 : d>=3 ?total-20 :total
// }

// console.log(rentalCarCost(6));


/*47.Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
None of the arrays will be empty, so you don't have to worry about that!
*/

function removeEveryOther(arr){
  return arr.filter((data,index) =>index%2==0)
}

console.log(removeEveryOther([1,2,3,4,5]));