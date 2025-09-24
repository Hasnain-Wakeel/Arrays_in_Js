// let students = ["saad", "ali", "zain", "ahmed", "hassan"];
// console.log(students);

// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);
// console.log(students[4]);

// students[0] = "ali";
// console.log(students);

// console.log(students.length);

// console.log(students[students.length-1]);

// console.log(students[4/2])
// console.log(students[3/3])
// console.log(students[2+1])

// Primitive and Non-Primitive Data Types :

// Primitive Data Types :

// 1.String
// 2.Number
// 3.Boolean
// 4.Null
// 5.Undefined
// 6.Symbol
// 7.BigInt

// Non-Primitive Data Types :

// 1.Array
// 2.Function
// 3.Object

// Examples For Learning Differences Between Primitive and Non-Primitive Data Types :

// 1 :

// let name1 = "Hasnain Raza";
// let name2 = name1;

// // console.log(name2); // Hasnain Raza

// name2 = "Name Changed";

// console.log(name1); // Hasnain Raza (No Change In Original Data)
// console.log(name2); // Name Changed (Shallow Copy/Copied Data Changed)

// 2 :

// let students_1 = ["ali", "zain", "anas", "fahad"];
// let students_2 = students_1

// students_2.push("ameen")                // =======>>  Original Array (students) mein data change ho jaaye ga ....

// console.log(students_1) // ["ali", "zain", "anas", "fahad", "ameen"] (Original Array bhi change ho ga .....)
// console.log(students_2) // ["ali", "zain", "anas", "fahad", "ameen"] (Copied Array bhi change ho ga .....)

//         // VS

// // Mutable / Non-Primitive Data Types :

// 1 :

// let person1 = ["Saad", "Ali", "Zain"]
// let person2 = person1
// person2 = "Anas"                 //  Wrond Method To Change Data In Non-Primitive Data Types ....
//                                 //  Mujhay yahan per btana chahiye kay mein kis index mein change karna chahta hon ...
//                                // For Example : person2[0] = "Anas"
//                               // person2 = person1

// console.log(person1) // ["Saad", "Ali", "Zain"]
// console.log(person2) // Anas

// 2 :

// let array1 = ["a", "b","c"];
// let array2 = array1;

// // console.log(array2)    // ["a", "b","c"]

// array2 = ["c", "d"];     // The issue was that ===>> "I was not accessing the newArray Directly" .....

// console.log(array1);        // ["a", "b","c"]
// console.log(array2);       //  ["c", "d"]

// ------------------------------------------------------------------------------

// 2:

// How Non-Primitive Data Types Actually Works :

// let array3 = ["a", "b"];
// let array4 = array3;        // Copies the Reference of Array3 for Array4 .....

// // console.log(array4)      // [ 'a', 'b' ]

// array4 = ["y", "z"];        // This only changes the value of Array4 and does not change the value of Array3 ...

// // array3[0] = "x";        // Mutable  || // This is  how to directly access the newArray
// // array3[1] = "y"        // Copy By Reference || // This is  how to directly access the newArray

// // array4[0] = "y";         // This is  how to directly access the newArray
// // array4[1] = "z"         // This is  how to directly access the newArray

// console.log("Array3 Becomes : " , array3);       // [ 'y', 'z' ]
// console.log("Array4 Becomes : " , array4);      // [ 'y', 'z' ]

// -------------------------------------------------------------------------------------------------------------------------------

// Adding and Removing Elements From Array :

// let array = ["a", "b", "c", "d"];
// array.unshift("0")                // adds an element at start
// array.push("e")                   // adds an element at last
// array.shift()                     // removes an element from start
// array.pop()                       // removes an element from last

// console.log(array)

// An Interesting Question :

// Question : kya ho ga agar mein pop() ya shift() ki parenthesis mein koi value day don ??
// Answer : Agar mein in Methods mein koi value day bhi don tab bhi ye apna pre-defined work he perform karein gay aur parenthesis mein dii gayi value ko ye ignore kar dein gay .....

// ----------------------------------------------------------------------------------------------------------------------

// Splice :

// let fruits = ["apple", "mango", "banana", "orange", "grapes"];
// fruits.splice(2, 1);         // 1st value ka matlab hota hai kay kis index say removing start karni hai aur
//                                 //  2nd value ka matlab hota hai kay kitni values remove karni hain ....
// console.log(fruits);

// If we want to access the removed array , Try this :

// let fruits = ["apple", "mango", "banana", "orange", "grapes"];
// let removedArray = fruits.splice(2, 1);
// console.log(removedArray)           // Returns the remived part of the array
// console.log(fruits)

//             //  OR

// fruits =  ["apple", "mango", "banana", "orange", "grapes"];
// console.log(fruits.splice(2,3))     // It also returns the removed part of array
// console.log(fruits)

// We can also add something to the Array through the mathod of Splice() :

// let fruits = ["apple", "mango", "banana", "grapes"];
// fruits.splice(0, 3, "kiwi", "pineapple");                    // 3rd value ka matlab hota hai kay kin values ko add karna hai
// // fruits.splice(0, 3, 6)                                      //  Adding number values to the Array
// console.log(fruits)

// Slice :

// let cars = ["Toyota", "BMW", "Ford", "Honda", "Audi", "Volvo"];
// let removedCars = cars.slice(1, 4);             // 1st value ka matlab hota hai kay kis index say start karna hai aur
//                                                 // 2nd value ka matlab hota hai kay kis index tak remove karna hai ....
// console.log(cars);
// console.log(removedCars);            

// Inside Flow Of Code :

// The first parameter takes the value of the first index and the second parameter takes 
// the value of the last index but 
// it does not include the last index .....
// It means that the last index will not be included in the new array .....

// Understand with this Example :
// If I enter (1,4) ===>> it subracts the first parameter from the second parameter (i.e : 4-1 = 3)
// and then returns the new array according  to the answer of sutraction .....


// let fruits = ["apple", "mango", "banana", "grapes"];
// console.log(fruits.splice(0, 3, "kiwi", "pineapple"));  

// Here we removed 3 elements from the array and added 2 new elements to the array ....
// But this only showing the removed part of the array ...
// And the updated array is not showing ... 
// If we want to show the updated array then we have to console "fruits" again ...

// console.log(fruits)

// ------------------------------------------------------------------------------------------------

// Question : what is the major difference between slice and splice method ??

// The major difference between slice() and splice() in JavaScript is:

// 1. Purpose :

// slice() → Used to copy or extract a part of an array without changing the original array.
// splice() → Used to add/remove/replace elements in an array, and it modifies the original array.

// 2. Return Value :

// slice() → Returns a new array containing the extracted elements.
// splice() → Returns an array of the removed elements (if any).

// 3. Effect on Original Array :

// slice() → Does not change the original array.
// splice() → Changes the original array.

// 4. Syntax :

// slice(start, end)
// start: index where extraction begins.
// end: index before which extraction stops (not included).

// splice(start, deleteCount, item1, item2, …)
// start: index where changes begin.
// deleteCount: number of elements to remove.
// item1, item2, …: elements to insert.

// 5. Example :

// let fruits = ["apple", "mango", "banana", "orange", "grapes"];

// slice example :
// let sliced = fruits.slice(1, 3);
// console.log(sliced);         // ["mango", "banana"]
// console.log(fruits);         // ["apple", "mango", "banana", "orange", "grapes"]

// splice example :
// let spliced = fruits.splice(2, 2, "kiwi", "pear");
// console.log(spliced);        // ["banana", "orange"]
// console.log(fruits);         // ["apple", "mango", "kiwi", "pear", "grapes"]


// In short:

// Use slice(), when you just need a copy/extraction (non-destructive).

// Use splice(), when you need to modify (add/remove/replace) elements in the original array.

