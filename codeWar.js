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

// function removeEveryOther(arr){
//   return arr.filter((data,index) =>index%2==0)
// }

// console.log(removeEveryOther([1,2,3,4,5]));

/*48.Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
Write a function that returns both the minimum and maximum number of the given list/array.
Examples (Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]
*/
// function minMax(arr){
//   let low=arr.sort((a,b) => a-b).map((data,index)=> arr[0])
//   return low
//   // return [0,0]; // fix me!
// }

// console.log(minMax([1,2,3,4]));

/*49.Factors are numbers you can multiply together to get another number.
2 and 3 are factors of 6 because: 2 * 3 = 6
You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
You can use the mod operator (%) in most languages to check for a remainder
For example 2 is not a factor of 7 because: 7 % 2 = 1
Note: base is a non-negative number, factor is a positive number.
*/

// function checkForFactor (base, factor) {
//  return base%factor===0?true:false
// }
// console.log(checkForFactor(10,3));

/*50.Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
Note: a and b are not ordered!
Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get that number.
FUNDAMENTALS*/

// function getSum(a, b) {
//   if (a < b || b < a) {
//     var sum = 0;
//     if (a < b) {
//       for (let i = a; i <= b; i++) {
//         sum += i;
//       }
//     } else {
//       for (let i = b; i <= a; i++) {
//         sum += i;
//       }
//     }
//     return sum;
//   }
//   if (a == b) {
//     return a;
//   }
// }
// console.log(getSum(-1, 0));



/*51.Complete the solution so that it reverses the string passed into it.
'world'  =>  'dlrow'
'word'   =>  'drow'
*/

// function solution(str){
// return  str.split("").reverse().join("")
  
// }

// console.log(solution("hello"));


/*52.Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array.
Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

// function countPositivesSumNegatives(input) {
//   if(input ===null || input.length==0){
//     return []
//   }else{
//     let positve= input.filter((data) => data > 0 ).length
//     let negative=input.filter((data) => data <0  ).reduce((total,data) => total+data ,0)
//     return [positve,negative]
//   }
//   }

// console.log(countPositivesSumNegatives([]));



/*53.In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/
// function filter_list(l) {
//   return l.filter((data) => typeof(data)=== 'number' && data >= 0)
// }

// console.log(filter_list([1,2,"aasf","1","123",123]));



/*54.Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.
number of hotdogs	price per unit (cents)
n < 5	100
n >= 5 and n < 10	95
n >= 10	90
You can use if..else or ternary operator to complete it.
When you have finished the work, click "Run Tests */

// function saleHotdogs(n){
//   return n<5 ? n*100 : n>=5 && n<10 ? n*95 :n*90
// }

// console.log(saleHotdogs(4))


/*55 Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
For example, if this array were passed as an argument:
["Telescopes", "Glasses", "Eyes", "Monocles"]
Your function would return the following array:
["Eyes", "Glasses", "Monocles", "Telescopes"]
All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.*/
// function sortByLength (array) {
// return array.sort((x,y) => x.length - y.length)
    
// }
// console.log(sortByLength(["Beg", "Life", "I", "To"]));


/*56
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
Task
Given a year, return the century it is in.
Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
*/

// function century(years) {
//  let year=years.toString()
//   return year<=100 ?1: year.slice(2)==='00'? parseInt(year.slice(0,2)):parseInt(year.slice(0,2))+1
  
// }
// console.log(century(916678));


/*57.Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps" */

// function reverseWords(str) {
//   return str.split(" ").map((data) => data.split("").reverse().join("")).join(" ")
// }
// // console.log(reverseWords('This is an example!'));
// console.log(reverseWords('double  spaces'));


/*58.Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
 */
// function smash (words) {
//  return words.join(" ")
// };

// console.log(smash(['hello', 'world', 'this', 'is', 'great']));


/*59.Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
For example:
a = 1
b = 4
--> [1, 2, 3, 4] */
// function between(a, b) {
//   let result=[]
//  for(let i=a;i<=b;i++){
//   result.push(i)
//  }
//  return result
// }

// console.log(between(1,4));



/*60.Now you have to write a function that takes an argument and returns the square of it.
*/
// function square(a) {
//   return Math.pow(a,2)
  
// }
// console.log(square(3));


/*61Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/
// function getCount(str) {
//   let vowels=['a','e','i','o','u']
//   return str.split("").filter((data) => vowels.includes(data)).length
// }

// console.log(getCount('abracadabra'));


/*62.You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
Array can contain numbers or strings. X can be either.
Return true if the array contains the value, false if not.
(check([66, 101], 66), true);
*/
// function check(a, x) {
// return a.includes(x)?true:false
// }

// console.log(check('what', 'a', 'great', 'kata','kat'));

/*63.Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.
*/

//   function getVolumeOfCuboid(length, width, height) {
//     return length*width*height
//   }
// console.log(
//   getVolumeOfCuboid(1,2,3));
  

/*64Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.
a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.
The four operators are "add", "subtract", "divide", "multiply".
A few examples:(Input1, Input2, Input3 --> Output)

5, 2, "add"      --> 7
5, 2, "subtract" --> 3
5, 2, "multiply" --> 10
5, 2, "divide"   --> 2.5 */
// function arithmetic(a, b, operator){
//   return operator == 'add' ? a+b :operator =='subtract' ?a-b :operator == 'multiply' ?a*b:a/b
// }

// console.log(arithmetic(8,2,'subtract'));

//  function arithmetic(a, b, operator){
//   const find ={'add': (a,b) => a+b ,'subtract': (a,b) => a-b,'multiply': (a,b) => a*b,'divide': (a,b) => a/b}
//   return find[operator](a,b)
//  }
//  console.log(arithmetic(8,2,'subtract'));




/*65.Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

// function duplicateCount(text) {
//   let main = text.toUpperCase();
//   let array = main.split("");

//   // Use filter and indexOf to count duplicates
//   let duplicates = array.filter((value, index, self) => {
//     return self.indexOf(value) !== index;
//   });

//   // Return the count of unique duplicates
//   return new Set(duplicates).size;
// }

// console.log(duplicateCount('aA11'));


/*66.There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.
You receive an array with your peers' test scores. Now calculate the average and compare your score!
Return True if you're better, else False!
Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array! */
// function betterThanAverage(classPoints, yourPoints) {
// let av =classPoints.reduce((total,data) => total + data ,0)/classPoints.length
// return av < yourPoints
// }

// console.log(betterThanAverage([2, 3],5));


/*67.Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
(In this case, all triangles must have surface greater than 0 to be accepted). */
// function isTriangle(a,b,c)
// {
//  if(a>0 && b>0 && c>0){
//   if(a+b >c && a+c >b && b+c>a){
//     return true
//   } 
//  }
//  return false
// }

// console.log(isTriangle(7,2,2));

/*.68.Your task is to create a function that does four basic mathematical operations.
The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.
Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7 */

// function basicOp(operation, value1, value2)
// {
// let select = {'+' : (value1,value2) => value1 + value2 ,'-' : (value1,value2) => value1 - value2 ,'*' :(value1,value2) => value1 * value2 ,'/' : (value1,value2) => value1 / value2 }
// return select[operation](value1,value2)
// }

// console.log(basicOp( '-' , 8, 7));


/*69.Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

// function sumTwoSmallestNumbers(numbers) {  
//  let sorted =  numbers.sort((a,b) => a-b)
//  return sorted[0] + sorted[1]
// }

// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));

/*.70
There is a bus moving in the city which takes and drops some people at each bus stop.
You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.
Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D
Take a look on the test cases
Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.
The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.
*/
// var number = function(busStops){
//   return busStops.reduce((total,[getOn,GetOff]) => total + (getOn-GetOff),0)
// }

// console.log(number([[10,0],[3,5],[5,8]]));



// /*71.papper scssor*/
// const rps = (p1, p2) => {
//   if(p1==p2){
//     return "Draw!";
//   }else if(p1=='scissors' && p2=="paper" || p1=="paper" && p2=='rock' || p1=='rock' && p2=="scissors"){
//     return "Player 1 won!";
//   }else{
//   return "Player 2 won!";
// }
// }

// console.log(rps('scissors', 'rock'));



/*72.You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.
Note: only positive integers will be tested.
https://en.wikipedia.org/wiki/Triangle
*/

// function otherAngle(a, b) {
//   return 180-(a+b)
// }

// console.log(otherAngle(30,60));



/*73.You might know some pretty large perfect squares. But what about the NEXT one?
Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
Examples:(Input --> Output)
121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
*/

// function findNextSquare(sq) {
//  let number= Math.sqrt(sq)
//  if(Number.isInteger(number)){ //integer contains both negative and positive number and zero also but not contain decimal values
//   return Math.pow(number+1,2)
//  }else{
//   return -1
//  }
// }

// console.log(findNextSquare(114));


/*74.Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
*/
// const quarterOf = (month) => {
//   return (month<=3) ? 1:(month<=6)?2:(month<=9) ?3:4
// }
// console.log(quarterOf(9));

//OR
// const quarterOf = (month) => {
//   return Math.ceil(month/3) //CEIL ALWAYS ROUND TO AFTER THE POINT 1.22 =2
// }
// console.log(quarterOf(12));


/*75.Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?
Examples:
input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.*/
// function roundToNextMultipleOf5(number) {
//   if (number % 5 === 0) {
//       return number;
//   } else {
//       // Calculate the next multiple of 5
//       return Math.ceil(number / 5) * 5; //MATH CEIL ONLY FOR THE BRACKET
//   }
// }

// console.log(roundToNextMultipleOf5(7));

/*.76.The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.
However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
Ta
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
Don't change the order of the elements that are left.
* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
*/

// function removeSmallest(numbers) {
//   if(numbers==null){
//     return []
//   }
//   let list =[...numbers]
//   let small =list[0]
//   for(let i=0;i<list.length;i++){
//     if(small>=list[i]){
//       small =list[i]
//     }     
//   }
//    list.splice(list.indexOf(small),1) 
//    return list
// }

// console.log(removeSmallest([5,3,2,1,4]))

// //or
// function removeSmallest(numbers) {
// let indexOfMin =numbers.indexOf(Math.min(...numbers)) //need to get seperate valuse to calculate so it use spread 
// numbers.splice(indexOfMin,1)
// return numbers
// }
// console.log(removeSmallest([5,3,2,1,4]))


//NOTES
// let array=[5,2,3]
// let min = Math.min(...array)
// console.log(min);


/*77.encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"
encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
*/

// function encrypt(text, n) {
// let array= text.split("")
// for(let i=1;i<=n ;i++){
//   let odd =array.filter((data,index) => index%2 !==0)
//   let even =array.filter((data,index) => index%2 ==0 )
//   array=odd.concat(even)
//   }
//   return array.join("")
// }




// console.log(encrypt("012345",2));


/*78current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

*/

// function twiceAsOld(dadYearsOld, sonYearsOld) {

//  let result= dadYearsOld-sonYearsOld*2
//  if(result<0){
//   return 0-result
//  }
//  return result
// }

// console.log(twiceAsOld(36,7));




//ALWAYS CONVERT TO POSITIVE NUMBERS
// let k=3
// console.log(Math.abs(k));




// function removeChar(str){
//    let result =str.slice(1,str.length-1)
// return result
//  }
 
//  console.log(removeChar('person'));




/*79.Count the number of divisors of a positive integer n.
Random tests go up to n = 500000.
Examples (input --> output)
4 --> 3 // we have 3 divisors - 1, 2 and 4
5 --> 2 // we have 2 divisors - 1 and 5
12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
*/
// function getDivisorsCnt(n){
//   let count=0;
//   for(let i=1;i<=n;i++){
//     if(n%i==0){
//       count ++
//     }
//   }
//   return count
// }

// console.log(getDivisorsCnt(5));







/*80.describe("Basic tests", () => {
6
  it("Testing for fixed tests", () => {
7
    assert.deepEqual(pipeFix([1,2,3,5,6,8,9]),[1,2,3,4,5,6,7,8,9]);
8
    assert.deepEqual(pipeFix([1,2,3,12]),[1,2,3,4,5,6,7,8,9,10,11,12]);
9
    assert.deepEqual(pipeFix([6,9]),[6,7,8,9]);
10
    assert.deepEqual(pipeFix([-1,4]),[-1,0,1,2,3,4]);
11
    assert.deepEqual(pipeFix([1,2,3]),[1,2,3]);
12
  });
13
}); */

// function pipeFix(numbers){
//  let samll= Math.min(...numbers)
//  let high =Math.max(...numbers)
//  let result =[]
//  for(let i=samll;i<=high;i++){
//       result.push(i)
//  }
//  return result
//   }



// console.log(pipeFix([1,2,3,5,6,8,9]));





//81.FIND INTEGTRAL PERFECT SQRE OR NOT (SQUARE ROOT)

// var isSquare = function(n){
//   let SQUAREROOOT= Math.sqrt(n)
//   return Number.isInteger(SQUAREROOOT)
// }

// console.log(isSquare(26));


/*82.In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number
Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
*/

// function highAndLow(numbers){
// let cnvrtednumber=  numbers.split(" ").map(Number)
// let small = Math.min(...cnvrtednumber).toString()
// let high = Math.max(...cnvrtednumber).toString()
// return `${small},${high}`
// }

// console.log(highAndLow("1 2 3 4 5"));



/*83.Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
Note: The function accepts an integer and returns an integer. */
// function squareDigits(num){
//  let result= num.toString().split("").map(Number).map(data => data*data).join("")
//  return parseInt(result)
// }
// console.log(squareDigits(3212));


// /*84.arrayDiff([1,2,2,2,3],[2]) == [1,3]*/
// function arrayDiff(a, b) {
//   //     return  a.filter((data) => {
//   //     return  !b.includes(data)
//   // })
  

//   return a.filter((data) => !b.includes(data))
// }

// console.log(arrayDiff([1,2,3],[1,2]));

/*84.Write function bmi that calculates body mass index (bmi = weight / height2).
if bmi <= 18.5 return "Underweight"
ifbmi <= 25.0 return "Normal
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"
*/

// function bmi(weight, height) {
//   let bmi = weight/(height*height)
//   return bmi<=18.5 ?"Underweight":bmi<=25.0?"Normal":bmi<=30.0?"Overweight":"Obese"
  
// }
// console.log(bmi(80,1.80));

/*85.This time no story, no theory. The examples below show you how to write function accum:
Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.

*/

// function accum(s) {
//   let result=[]
// 	let letters = s.toUpperCase()
//   letters.split("").map((data,index) => {
//    result.push('-',data)
//    for(let i =0 ;i<index;i++){
//    result.push(data.toLowerCase())
//    }
//   })
//   return result.splice(1).join("")
// }

// console.log(accum('cwAt'));


// function names(s) {
//   return [...s].map((data,index) => data.toUpperCase() + data.toLowerCase().repeat(index)).join("-")
// }
// console.log(names('cwAt'));



/*.86Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
Example (Input --> Output)
"CodEWaRs" --> [0,3,4,6] */
// var capitals = function (word) {
//   let result =[];
// 	[...word].filter((data,index) =>  {
//    if( data === data.toUpperCase()){
//     result.push({letter:data,index:index})
   
//    } })
//    return result.map(data => data.index)
// };

// console.log(capitals("CodEWaRs"));



/*87.Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
*/

// const binaryArrayToNumber = arr => {
//   const arrString =arr.join('') 
//   return parseInt(arrString,2)
 
// };

// console.log(binaryArrayToNumber([0, 0, 1, 1]));


/*88.In this kata you will create a function that takes in a list and returns a list with the reverse order.
Examples (Input -> Output)
* [1, 2, 3, 4]  -> [4, 3, 2, 1]
* [9, 2, 0, 7]  -> [7, 0, 2, 9]
*/

// function reverseList(list) {
// return list.reverse()
// }

// console.log(reverseList([1, 2, 3, 4]));



/*89.Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
Task
Write a function that returns both the minimum and maximum number of the given list/array.
Examples (Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]
*/

// function minMax(arr){
//   let min = Math.min(...arr)
//   let max =Math.max(...arr)
//   return [min,max]
// }

// console.log(minMax([2334454,5]));


/*90."is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/

// function order(words) {
//  return words.split(" ").sort((a,b) => a.match(/\d/) - b.match(/\d/)).join(" ")
   
// }

// console.log(order("is2 Thi1s T4est 3a"));



/*91.Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.
Last one:
*/
// function findEvenIndex(arr)
// {
// for(let index=0;index<arr.length;index++){
//   let left =arr.slice(0,index).reduce((data,sum) => data + sum ,0)
//   let right =arr.slice(index+1).reduce((data,sum) => data + sum ,0)
//   if(left ===  right){
//     return index;
//   }
// }
//   return -1

// }

//  console.log(findEvenIndex([1,2,3,4,3,2,1]));

// let trys=[1,2,3]
// console.log(trys.splice(1));



/*92 always positive
-34: 34 */
// function opposite(number) {
//   return Math.abs(number)
// }

// console.log(opposite(-1));




//93. const textWithSmileys = "Hello :) How are you? :D ;-D :~)";
// const count = countSmileys(textWithSmileys);
// console.log(`Number of valid smiley faces: ${count}`);
// function countSmileys(arr) {
//   let regex =/(:|;)(-|~)?(\)|D)/g;
//   if(!arr || arr.length==0 ){
//     return 0
//   }
//   let result =arr.toString().match(regex)
//   return result.length
// }
// // console.log(countSmileys([':D',':~)',';~D',':)']));
// console.log(countSmileys());



// //94.quw and que time
// function queueTime(customers, n) {
//   //customers = each customer take checkout time 
//   //n= no of counters are available
//   if (customers.length === 0) {
//       return 0;
//     }
//   const Totalcounters =Array(n).fill(0)
//   //make new array with no of counters available and put inital value 0 for each
 
//   for(let time of customers){
//     //each customers represent as time and each customer will  assigned in small index
//     const nextcounter = Totalcounters.indexOf(Math.min(...Totalcounters))
//     Totalcounters[nextcounter] +=time
//     //each coustomer come next loop first it wil go to minimum index 
//     //eg  (queueTime([10, 2, 3, 3], 2));   initially we created Total counters as [0,0]
//     //first loop 10 will go to small index= Total counter =[10,0]
//     //next rounund 2 go to minimum index value data  mewans 0 value index = TotalCounter =[10,2]
//     //next round 3 go to small value index =[10,3]
//     //next round 3 go to small value index =[10,3]
//     //all loop end we can take maximim value in totla counter becz we need the minimum time that to complete
//     //so find maxm valuer and return it

              
//   }
//    return Math.max(...Totalcounters)
// }

// console.log(queueTime([5, 3, 4], 1));    // Output: 12
//  console.log(queueTime([10, 2, 3, 3], 2)); // Output: 10
//  console.log(queueTime([2, 3, 10], 2));    // Output: 12


/*95.As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
The input to the function will be an array of three distinct numbers (Haskell: a tuple).
For example
gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.
Another example (just to make sure it is clear):
gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
*/
// function gimme (triplet) {
// let min = triplet.indexOf(Math.min(...triplet))
// let max =triplet.indexOf(Math.max(...triplet))
// return triplet.findIndex((data,index) => {
//    return index != min && index != max
// })
// }


// console.log(gimme([2.1, 3.2, 1.4]));

/*96
[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

// function towerBuilder(nFloors) {
//  let tower =[];
//  for(let i=1;i<=nFloors;i++){
//    let space=" ".repeat(nFloors-i)
//    let print ="*".repeat((2*i)-1)
//    let total =space + print + space
//    tower.push(total)
//  }
//  return tower
// }

// console.log(towerBuilder(3));


/*97.Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.



*/

// function high(x){
// let seperate= x.split(" ")

// let highScore = 0;
// let heigestWord = "";

// function calculateWordValue(word) {
//   return word.split("").reduce((score,char) => score + char.charCodeAt(0) - 96,0 ); //ASCI VALUE OF a is 97 so substrating from 97-96 =a
//               //if b ascii 98 so 98-96=2 that is b and so on..
// }

// for(const word of seperate){ //each words act as word varibale and iterate throug seperate array.
//   const score=calculateWordValue(word) //this will return each word ascii totl value     
//   if(score > highScore || (score === highScore  && seperate.indexOf(word) < seperate.indexOf(heigestWord))){//it willl savethe value to variable if the coming word value if heigher than previous
//                         //also check score = higg score and avoid earlier same  for this check qstn =return the word that appears earliest in the original string.
//                         //make sure the coming word index is higher than alredy saved valkue ignore it only save the small index
//     highScore=score;
//     heigestWord =word
//   }
 
// }

// return heigestWord

// }
// console.log(high('man i need a taxi up to ubud'));



/*98.
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return
*/
// function alphabetPosition(text) {
// let array =[...text]
//      array.forEach((data,index) => {
//       array[index] =data.toLowerCase()
//    })
//   return array
//  }


//  console.log(alphabetPosition("TbaThe sunset sets at twelve o' clock."));


// let trys=["A","b"]
// trys.forEach((data) => {
//   console.log(data.toLowerCase());
// })


/*99.The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
What if the string is empty? Then the result should be empty object literal, {}.
  test('aba', {'a': 2, 'b': 1});
  test('ABC', {'A': 1, 'B': 1, 'C': 1});
  NUMBER OF COUNTS OF LETTERS REPEATING
// */

// function count(string) {
//   if(!string){
//     return {};
//   }
//   let out={}
//  let array = [...string]
//  for (let i = 0; i < array.length; i++) {
//    if (out[array[i]]) {
//     out[array[i]] +=1
    
//    }else{
//     out[array[i]] =1
//    }
//  }
//  return out
 
// }
// console.log(count("abaaabgggb"));


/*100.Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:
expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'*/
// function expandedForm(num) {
  
//   if (typeof num !== 'number' || num < 0 || !Number.isInteger(num)) {
//     return 'Invalid input';
//   }

//   const numStr = num.toString(); //number converterd to strings 12
//   const result = [];

//   for (let i = 0; i < numStr.length; i++) { // 1
//     const digit = parseInt(numStr[i]);  //digit=1

//     if (digit !== 0) {            //true
//       const placeValue = digit * Math.pow(10, numStr.length - 1 - i); //(2,3)=2*2*2
//       result.push(placeValue); //d* 10* 2-1-0=10  1st = 1 * 10 ^1 = 10
//                                 //2* 10 * 2-1-1=0  2nd=2* 10^0 =2*1= 2
//     }
//   }

//   return result.join('+')
// }

// console.log(expandedForm(12));


/*101.Given an array of integers, find the one that appears an odd number of times.
There will always be only one integer that appears an odd number of times.
OBJECT ITERATION TIP QSTN
Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

*/
// function findOdd(A) {
//   let array = [...A]
//   let numbers={}
//   for(let i =0 ;i<array.length ;i++){
//     if(numbers[array[i]]){
//        numbers[array[i]] +=1
//     }else{
//       numbers[array[i]] =1
//     }
//   }
//   for(let keyIndicator in numbers){ //now keyIndicator indicate every key value inside 
//     if(numbers[keyIndicator] % 2!= 0){
//       return parseInt(keyIndicator)
//     }
//   }
// }

// console.log(findOdd([1,1,2]));

/*102.You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/
// function sortArray(array) {
//   let oddNumbers = array.filter((data) => data %2!=0) //SEPERATED ODD NYUMBER
//   let sortedinOrder =oddNumbers.sort((a,b) => a- b) //SORTED THE ODD NUMBER
//   const result = array.map((data) => { //MAP IN MAIN ARRAY
//     if(data %2 !=0){ //IF THE ODD NUMBER FIND OUT WE ARE REPLACING THE CURRNT ODD NUMBER WITH 1ST INDEX OF SORTED ARARY
//      return sortedinOrder.shift() //SORTED ARRY SHIFT IS DELETE THE 1ST ELEMNT FROM SORTED ODD NUMBER BUT THAT DELETED NUMBER WILL RETRN TO THE CURRENT POSITON OF ARRAY
                     
//      //SHIFTED ELEMENT IS REPLCAING THE ARRAY ELEMT POSITIN
//      // IF IAM USED POP THEN THE CURRENT POSITIN OF ARAY DATA WIL REPLCED BY LAST ELEMT OF SORTD ARRAY BCZZ POP REMOVING THE LAST ELELMTN
//     }else{
//     return  data
//     }
//   })
//   return result
// }

// console.log(sortArray([5, 3, 2, 8, 1, 4]));



/*103.wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]*/

// function wave(str){
//   let array =[...str]
//   let result =[]
//   for (let i = 0; i < array.length; i++) {
//       if(array[i] !== ' '){
//       let letters=[...str]
//       letters.splice(i,1,letters[i].toUpperCase());
//       result.push(letters.join(''))
//       }
    
//   }
//   return result
// }
// console.log(wave("hello"));


/*104.In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowe*/

// function solve(s){
 
//   let uppercase=s.match(/[A-Z]/g)
//   letters=[...s]
//   if(uppercase !== null){
//     return uppercase.length > (letters.length)/2 ? letters.map((data) => data.toUpperCase()).join(""):letters.map((data) => data.toLowerCase()).join("")
//   }
//   return s
 
// }

// console.log(solve("coDE"));


/*105.Your task, is to create N×N multiplication table, of size provided in parameter.
For example, when given size is 3:
1 2 3
2 4 6
3 6 9
For the given example, the return value should be:
[[1,2,3],[2,4,6],[3,6,9]] */

// multiplicationTable = function(size) {
//   let last=[]
//   for(let j=1;j<=size;j++){
//     let result=[]
//     for(let i=1;i<=size;i++){
//       result.push(i*j)
//      }

//     last.push(result)
//   }

// return last
// }

// console.log(multiplicationTable(3));

/*106.Once upon a time, on a way through the old wild mountainous west,…
… a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

How I crossed a mountainous desert the smart way.
The directions given to the man are, for example, the following (depending on the language):

["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
or
{ "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
or
[North, South, South, East, West, North, West]
You can immediately see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:
["WEST"]
or
{ "WEST" }
or
[West]
Other examples:
In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.

The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

Task
Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

The Haskell version takes a list of directions with data Direction = North | East | West | South.
The Clojure version returns nil when the path is reduced to nothing.
The Rust version takes a slice of enum Direction {North, East, West, South}.
See more examples in "Sample Tests:"
Notes
Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].
if you want to translate, please ask before translating. */

// function dirReduc(arr) {
//   const opposites = { "NORTH": "SOUTH", "SOUTH": "NORTH", "EAST": "WEST", "WEST": "EAST" };
//   const result = [];

//   for (const direction of arr) {
//     if (result.length && result[result.length - 1] === opposites[direction]) {
//       result.pop(); // Remove the last element if it's opposite to the current direction
//     } else {
//       result.push(direction);
//     }
//   }

//   return result;
// }

// // Example usage:
// const directions = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];
// const result = dirReduc(directions);
// console.log(result);



/*107.The number 
89
89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 
89
=
8
1
+
9
2
89=8

      assert.deepEqual(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9])
      assert.deepEqual(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
      assert.deepEqual(sumDigPow(10, 100),  [89])
      assert.deepEqual(sumDigPow(90, 100), [])
*/

// function sumDigPow(a,b) {

//   let result=[]
//   for (let i = a; i <= b; i++) {
//     let num=i.toString().split("")
//     let sum=num.map((data,index) => {
//       return Math.pow(Number(data),index+1)
//   }).reduce((acc,data) => acc+ data ,0)
//     if(sum === i){
//       result.push(i)
//     }

//   }
// return result
// }
// console.log(sumDigPow(1, 10));



/*108.* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

*/
// function extractDomain(url) {
//   // Remove protocol (http, https, ftp, etc.)
//   let withoutHTTP = url.replace(/^(https?|ftp):\/\//, ''); //QST  MARK MAKE S OPIONAL AND IT CHECK HTTP HTTPS FTSP AND IT WILL REMOVE OF REPLACE BY "" \ this method indicate that it denoting after this a symbol to check
//   console.log(withoutHTTP);

//   // Remove www if present
//   let withoutWWW = withoutHTTP.replace(/^www\./, '');  //IT WILL REPLCE WWW. FROM THE RMOVED HTTP THE \. INDICATE THAT FORWARD SLASH INDICATE THE . IS TO CHECK SO THE SYBOLS COME AFTER FORWARD SLASH

//   console.log(withoutWWW);
//   // Extract domain name (the part before the first slash)
//   let domain = withoutWWW.split('/'); //IT WILL SPLIT BY / AND TAKE THE FIRST ONE
//   console.log(domain);

//   let result=withoutWWW.split('/')[0]
//   return result;
// }

// Example usage:
// let url1 = "http://github.com/carbonfive/raygun";
// let domain1 = extractDomain(url1);
// console.log(domain1);

// let url2 = "http://www.zombie-bites.com";
// let domain2 = extractDomain(url2);
// console.log("Domain for " + url2 + ": " + domain2);

// let url3 = "https://www.cnet.com";
// let domain3 = extractDomain(url3);
// console.log("Domain for " + url3 + ": " + domain3);

// console.log(extractDomain("http://google.com"));





/* 109. Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

// var uniqueInOrder=function(iterable){
 
//   let trial=[...new Set(iterable)]
//   console.log(trial);
// }

// console.log(uniqueInOrder('AAAABBBCCDAABBB'));




//UNIQUNESS DIFFERENT QSTN

// var uniqueInOrderCons=function(datas){
 
//   if (!datas || datas.length === 0) { //IF NULL OR  EMPTY 
//     return [];
//   }
  
//   let result = [datas[0]];  //THE FINAL RESULT IS PUSHING TO THIS .INITIALY IT CONSIST 1 ELEMENT THAT IS THE 1ST ELEMENT OF GIVEN ARRY BCZ IN CHECKING 0 INDEX NOT CHEK SO IT PLACEED HERE ALWYAS
  
//   for (let i = 1; i < datas.length; i++) { //LOOOP STRT FROM INDEX 1. NOT FROM 0 . BCZ IT ALWAYS COMPARING WITH PREVIOUS ELEMENTS ,SO THE 0 INDEX DOES NOT HAVE THE PVS ELEMENT SO START FROM THE INDEX 1
//     if (datas[i] !== datas[i - 1]) {
//       result.push(datas[i]);
//     }
//   }

//   return result
// }

// console.log(uniqueInOrderCons('ABBCcAD'));





/*110.Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values.

ENJOY CODING :)

*/
// function sumOfMinimums(arr) {
//   let small=[];
// arr.map((data) => {
//   let min= Math.min(...data)
//   small.push(min)
// })
// return small.reduce((acc,data) => acc + data ,0)
// }
// console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]));



/*111.Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: https://leetcode.com/problems/two-sum/

twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1]
*/
// function twoSum(numbers, target) {
//   let array =[...numbers]
//  for (let i = 0; i < array.length-1; i++) {
//       for (let j = i+1; j < array.length; j++) {
//        if(array[i] + array[j] === target){
//         return [i,j]
//        }
//       }
//  }
// }
// console.log(twoSum([1, 2, 3],4));


/*112Given a string, remove any characters that are unique from the string.

Example:

input: "abccdefee"

output: "cceee"

*/

// //IMPORTANT UNIQUE,COUNT,REPEAT
// function removeUniqueCharacters(str) {
//   let array =[...str]
//   let count = {};
//   for (let i = 0; i < array.length; i++) {
//    if(count[array[i]]){
//     count[array[i]]  +=1
//    }else{
//     count[array[i]]  =1
//    }
//   }

//   return array.filter((letters) => count[letters] > 1).join('')

 
// }

// console.log(removeUniqueCharacters('abccdefee'));


// LETTERS COUNT REPEATING
// let letters=['a','b','c','c']
// let count={}
//  for (let i = 0; i < letters.length; i++) {
//   if(count[letters[i]]){
//     count[letters[i]] +=1;
//   }else{
//     count[letters[i]] =1
//   }
//  }

//  console.log(count);



/*113.Alternative using prototype
*/
// String.prototype.toAlternatingCase = function () {
//  return this.split('').map((data) => {
//   return data==data.toUpperCase()?data.toLowerCase():data.toUpperCase();
//  }).join('')
// }

// var myString="hEllo";
// console.log(myString.toAlternatingCase());


/*114.You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 other like this 
*/
// function likes(names) {
//  let length=names.length
//  return length == 0 ? "no one like this" :length==1 ? `${names[0]} likes this` : length ==2 ? `${names[0]} and ${names[1]} likes this`: length==3 ? `${names[0]}, ${names[1]} and ${names[2]}  likes this` :`${names[0]}, ${names[1]} and ${length-2} other like this`
// }

// console.log(likes(["Alex", "Jacob", "Mark", "Max"]));


/*114.Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice */

// function duplicateCount(text){
//   let array=[...text]
//   let count ={}
//   let totalCount=[]
//   let small=array.map((data) => data.toLowerCase())
//   for(let i=0;i<small.length;i++){
//     if(count[small[i]]){
//       count[small[i]] +=1;
//     }else{
//       count[small[i]] =1;
//     }
//   }
 
//   for(let key in count){
//     if(count[key] > 1){
//       totalCount.push(count[key])
//     }
//   }
//   return totalCount.length
// }
// console.log(duplicateCount('aabBcdeB'));


/*115.In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.
"a" = 1, "b" = 2, etc.
Example
(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
Test.assertEquals(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
*/

// function alphabetPosition(text) {
//  let output=[]
//  for (let i = 0; i < text.length; i++) {
//     const character=text[i].toLowerCase();
//     if(character >= 'a' && character<= 'z'){
//       const position=character.charCodeAt(0) - 96
//       output.push(position)
//     }
//  }
//  return output.join(" ")
// }

// console.log(alphabetPosition("The sunset sets at twelve o' clock."));


/*116.Well met with Fibonacci bigger brother, AKA Tribonacci.
As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(
So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:
[1, 1 ,1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:
[0, 0, 1, 1, 2, 4, 7, 13, 24, ...
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.
Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)
If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata
[Personal thanks to Professor Jim Fowler on Coursera for his awesome classes that I really recommend to any math enthusiast and for showing me this mathematical curiosity too with his usual contagious passion :)]
  doTest([ [0,0,1], 10], [0,0,1,1,2,4,7,13,24,44]     )
  doTest([ [0,1,1], 10], [0,1,1,2,4,7,13,24,44,81]    )
  doTest([ [1,0,0], 10], [1,0,0,1,1,2,4,7,13,24]      )
  doTest([ [0,0,0], 10], [0,0,0,0,0,0,0,0,0,0]        )
  doTest([ [1,2,3], 10], [1,2,3,6,11,20,37,68,125,230])
  doTest([ [3,2,1], 10], [3,2,1,6,9,16,31,56,103,190] )
  doTest([ [1,1,1],  1], [1])
  doTest([[300,200,100], 0], []) */

  // function tribonacci(signature,n){
  //   if(n ==0 || n==null){
  //     return []
  //   }
  //   let array=[...signature]
  //   for (let i = 0; i < n - 3; i++) {
  //   let trys=array[i] + array[i+1] + array[i+2]
  //   array.push(trys)
  //   }
  //   if(n<signature.length){
  //   return array.splice(0,n)
  //   }
  //   return array
  // }
  // console.log(tribonacci([1,1,1], 2));





  /*117.Enough is enough! DELETING DUPLICATES MORE THAN A NUMBER OCUURANCE TIMES ,WITHOUT CHANGING THE ORDER OF ARRAY`
Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?
Task
Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21]. */

// function deleteNth(arr, n) {
//   let count = {};
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     let current = arr[i];

//     if (count[current]) {
//       count[current] += 1;
//       if (count[current] <= n) {
//         result.push(current);
//       }
//     } else {
//       count[current] = 1;
//       result.push(current);
//     }
//   }

//   return result;
// }

// console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3));



/*118
Once upon a time, on a way through the old wild mountainous west,…
… a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

How I crossed a mountainous desert the smart way.
The directions given to the man are, for example, the following (depending on the language):

["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
or
{ "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
or
[North, South, South, East, West, North, West]
You can immediately see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

["WEST"]
or
{ "WEST" }
or
[West]
Other examples:
In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.

The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

Task
Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

The Haskell version takes a list of directions with data Direction = North | East | West | South.
The Clojure version returns nil when the path is reduced to nothing.
The Rust version takes a slice of enum Direction {North, East, West, South}.
See more examples in "Sample Tests:"
Notes
Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].
if you want to translate, please ask before translating.
*/

// function dirReduc(arr){
//   const opposite = {
//     'NORTH': 'SOUTH',
//     'SOUTH': 'NORTH',
//     'EAST': 'WEST',
//     'WEST': 'EAST'
//   };

//   let result = [];

//   for (let eachDirection of arr) {
//     if (result.length > 0 && result[result.length - 1] === opposite[eachDirection]) { //maek sure arry not empty,then select last pushed elelmnt and check it equlas the current dierction then 
//       // If the current direction is opposite of the last one in the result, cancel them out
//       result.pop();
//     } else {
//       // Otherwise, add the current direction to the result
//       result.push(eachDirection);
//     }
//   }

//   return result;
// }
// console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));



/*119.
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:
how to do that in java script */


// function zero(operation) {
//   return operation ? operation(0) : 0;
// }

// function one(operation) {
//   return operation ? operation(1) : 1;
// }

// function two(operation) {
//   return operation ? operation(2) : 2;
// }

// function three(operation) {
//   return operation ? operation(3) : 3;
// }

// function four(operation) {
//   return operation ? operation(4) : 4;
// }

// function five(operation) {
//   return operation ? operation(5) : 5;
// }

// function six(operation) {
//   return operation ? operation(6) : 6;
// }

// function seven(operation) {
//   return operation ? operation(7) : 7;
// }

// function eight(operation) {
//   return operation ? operation(8) : 8;
// }

// function nine(operation) {
//   return operation ? operation(9) : 9;
// }

// function plus(num) {
//   return function (x) {
//     return x + num;
//   };
// }

// function minus(num) {
//   return function (x) {
//     return x - num;
//   };
// }

// function times(num) {
//   return function (x) {
//     return x * num;
//   };
// }

// function dividedBy(num) {
//   return function (x) {
//     return x / num;
//   };
// }

// Examples
// console.log(seven(times(five()))); // Output: 35  //IT FIRST CALL THE FIVE FUNCTION AND RETURN =5,SEVEN(TIMES(5))  THEN TIMES CALL WITH ARG 5 THEN RETRN, seven(function(x) { return x * 5; }).


// console.log(four(plus(nine())));    // Output: 13
// console.log(eight(minus(three()))); // Output: 5
// console.log(six(dividedBy(two())));  // Output: 3


/*120.
Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
Example:
Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
Addendum:
Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult: */
// function flattenAndSort(array) {
//  return array.flat().sort((a,b) => a-b)
// }

// console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]));



/*121
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)
*/
// function stray(numbers) {
//   const dir={}
//  for(let i =0;i<numbers.length;i++){
//    if(dir[numbers[i]]){
//      dir[numbers[i]] +=1
//    }else{
//       dir[numbers[i]] =1
//    }
//  }
//   for(let key in dir){
//     if(dir[key] == 1){
//       return parseInt(key)
//     }
//   }
// }

// console.log(stray([1, 1, 2]));





/*122.Sum of Pairs
Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * the correct answer is the pair whose second value has the smallest index
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * the correct answer is the pair whose second value has the smallest index
== [3, 7] */


// function sumPairs(ints, s) {
//   const unique = new Set(); //IT DECLARED A NEW SET `
 
//   for (let i = 0; i < ints.length; i++) {
//     const current = ints[i];
//     const complement = s - current; //IT CHECK THE COMBINATION ELEMTN VALUE

//     if (unique.has(complement)) { //IT CHECK THAT NUMBER EXIST OR NOT 
//       return [complement, current]; //THAT NUMBER THERE IT WILL RETURN
//     }

//     unique.add(current); //IF DOES NOT FIND IT WIL PUSH THE CURRNT ELEMENT TO IT
//   }

//   return undefined; // No pair found
// }

 //console.log(sumPairs([11, 3, 7, 5], 10)); // [3, 7]
// console.log(sumPairs([4, 3, 2, 3, 4], 6)); // [4, 2]
// console.log(sumPairs([0, 0, -2, 3], 2)); // undefined
// console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)); // [3, 7]
// console.log(sumPairs([1, 4, 8, 7, 3, 15], 8)); // [1, 7]




//SET EXAMPLE and has properities
// const mySet = new Set();

// mySet.add(1);
// mySet.add(2);
// mySet.add(3);
// mySet.add(3);

// console.log(mySet); // Set { 1, 2, 3 }
// console.log(mySet.has(3))






/*123.An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
Example: (Input --> Output)
"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false */


// function isIsogram(str){
//   let cases=str.toUpperCase().split("")
//   let unique=[...new Set(cases)]
//   return (unique.length == cases.length)
  
  
  
// }

// console.log(isIsogram("aba"));


/*124.Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string*/

// function reverseLetter(str) {

//   return str.split("").filter((data) => /[a-zA-Z]/ .test(data)).reverse().join("")
  
// }
// console.log(reverseLetter("ultr53o?n"));


/*125.Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/
// function moveZeros(arr) {
//     let zero=[]
//   let nonzero=[]
// arr.map((data) => {
//   if(data === 0){
//     zero.push(data)
//   }else{
//     nonzero.push(data)
//   }
// })

// return nonzero.concat(zero)
// }
// console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));


/*126
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

*/




// function firstNonRepeatingLetter(s) {

//   const charCountStore = {}; //to store the counts of each character
  
 
//   const lowerCaseS = s.toLowerCase();  //all are converted to lowercase to compare the char count store
  

//   for (let char of lowerCaseS) { //iterate through lower caese array
//     charCountStore[char] = (charCountStore[char] || 0) + 1;  //if it exist +1 or 0+1 if dont give or there may be a chance of undefined comes
//   }
  
 
//   for (let i = 0; i < s.length; i++) {  //take each elenent and check the counrt of count store of it
//     const char = lowerCaseS[i];  //in lowercase the same is in index with all lowercase . 
//     if (charCountStore[char] === 1) {  //that value count if firsdt get 1 it return the same letter with index from s .
//       return s[i];
//     }
//   }

//   return "";
// }

// // Test cases
// console.log(firstNonRepeatingLetter('stress'));  // Output: 't'
// console.log(firstNonRepeatingLetter('sTreSS'));  // Output: 'T'




/*127.Write a program that will calculate the number of trailing zeros in a factorial of a given number.
N! = 1 * 2 * 3 *  ... * N
Be careful 1000! has 2568 digits...
For more info, see: http://mathworld.wolfram.com/Factorial.html
Examples
zeros(6) = 1
# 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero
zeros(12) = 2
# 12! = 479001600 --> 2 trailing zeros*/


// function zeros(n) {
//     let counter = 0;
//     for (let i = 5;( n / i)  >= 1; i *= 5) {  // Continue the loop as long as n divided by i is greater than or equal to 1
//        //no of zero  always equal to no of factores of 5 ini it
//       // /So, when we calculate the factorial of a number, we count how many times the factorial can be divided by 5 (or its powers), as each factor of 5 contributes to a trailing zero in the result.
//         counter += Math.floor(n / i);
//     }
//     return counter;
// }


// console.log(zeros(6));   // Output: 1
// console.log(zeros(30));  // Output: 2



/* 128.In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.
Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).
More details about factorial can be found here.
*/

// function factorial(n)
// {
//   if(n < 0 || n > 12){
//     throw new Error('RangeError')
//   }
//   let result=1
//   if(n==0){
//     return 1
//   }
//   for(let i=n;i>=1;i--){
//     result *=i
//   }
//   return result
// }


/*129Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
The input will be a lowercase string with no spaces.
Good luck!
If you like this Kata, please try:
Indexed capitalization
Even-odd disparity */


// function capitalize(s){
//   let even='';
//   let odd='';
//     for(let i=0;i<s.length;i++){
//       if(i%2 === 0){
//         even +=s[i].toUpperCase()
//         odd +=s[i]
//       }else{
//           odd +=s[i].toUpperCase()
//          even +=s[i]
//       }
//     }
//     return [even,odd]
//   };

//   console.log(capitalize('abcdef'));


/*130.Complete the function which returns the weekday according to the input number:
1 returns "Sunday"
2 returns "Monday"
3 returns "Tuesday"
4 returns "Wednesday"
5 returns "Thursday"
6 returns "Friday"
7 returns "Saturday"
Otherwise returns "Wrong, please enter a number between 1 and 7" */

// function whatday(num) { 
// let defined={1:'Sunday',2:'Monday',3:'Tuesday',4:'Wednesday',5:'Thursday',6:'Friday',7:'Saturday'}
// return defined[num] ? defined[num]:'Wrong, please enter a number between 1 and 7'
// }
// console.log(whatday(1));


/*131.Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:
foo -> foo1
fobar23 -> foobar24
foo0042 -> foo0043
foo9 -> foo10
foo099 -> foo100
Attention: If the number has leading zeros the amount of digits should be considered. */


// function incrementString (strng) {
//   const regex = /(\d*)$/;
//   let numberPart=strng.match(regex)[0]//it wil l return arry contain more details at the 0 indeex giv4 the exact numbers
//   if(!numberPart){
//     return strng+1
//   }else{
//    let numberLength=numberPart.length
//    let incremented=parseInt(numberPart, 10) + 1
//    let incrementedStr = incremented.toString();
//    let zerosNeeded = numberLength - incrementedStr.length;

//    let leadingZeros = zerosNeeded > 0 ? '0'.repeat(zerosNeeded) : '';
//    let replaced= strng.slice(0,-numberLength)
//    return replaced + leadingZeros + incrementedStr;
   
//   }
// }
// console.log(incrementString('foo0042'));




/*132Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
Examples:
* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given */

// function hello(name) {
//   if(!name){
//     return "Hello, World!"
//   }
//   return `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`
// }
// console.log(hello(""));


/*133.Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24*/
// function grow(x){
//   return x.reduce((acc,data) => acc * data,1)
//   }

//   console.log(grow([1,2,3]));



// 134.Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

function replace(s){
  let result=""
for(let i=0;i<s.length;i++){
  if('AEIOUaeiou'.includes(s[i])){
     result +="!"
     }else{
    result +=s[i]
  }
}
return result
}
console.log(replace("KbmjJa Xhu KBP oNXOAt WDfL iFXIe TPkcwCZ wTAC"));