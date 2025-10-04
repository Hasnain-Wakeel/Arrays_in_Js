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

// ------------------------------------------------------------------------------------------------------------

// Method for checking the Index of an Array :

// let cars = ["Toyota", "BMW", "Ford", "Honda", "Audi", "Volvo"];
// console.log(cars.indexOf("Honda"));       // 3

// Method for checking whether it Includes that Particular Element or Not :

// let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// console.log(days.includes("Sunday"))        // True

// You can also use "indexOf" and "include" method on Strings :

// let name = "Hasnain"
// console.log(name.indexOf("i"))             // 5

// let myName = "Hasnain"
// console.log(myName.includes("e"))         // False

// New Method in ES6 for Creating a Shallow Copy :

// Old Method :
// let array = ["1","2","3","4","5"]
// let newArray = array                   // This creates a copy [by reference]
// console.log(newArray)

// New Method :
// let array = ["1","2","3","4","5"]
// let newArray = [...array , "6","7"]      // This method also allows to add anything to this Array
//              // Spread Operator
// console.log(newArray)                    // New Syntax for Copying an Array

// -----------------------------------------------------------------------------------------------------------------------------------

// Nested Array :

// let array = [1, 2, 3, 4, 5, ["a", "b", "c", "d"]]                 // Targeting "c"
// console.log(array[5][2])

// Using Splice Method :

// let array = [1, 2, 3, 4, 5, ["a", "b", "c", "d"]]                // Pushing "x" between "c" and "d"
// array[5].splice(3, 0, "x")
// console.log(array)

// Using Slice Method :

// let array = [1, 2, 3, 4, 5, ["a", "b", "c", "d"]]
// let inner = array[5]
// let newInner = inner.slice(0, 2).concat("x", inner.slice(2))
// console.log(newInner)

// let array = [1, 2, 3, 4, 5, ["a", "b", "c", "d"]]
// let part = array.slice(3)          // yahan jo number bracket mein ho ga wo index hota hai aur us ka matlab hai
//                                    // kay us number say lay kar end tak ka part(slice) nikaal/extract kar lo .....
// console.log(part)                     //  [4, 5, ["a", "b", "c", "d"]]

// ----------------------------------------------------------------------------------------------------------------------------------------

//  Strings:
// Measuring Length and Extracting Parts :

// let userCity = prompt("Enter Your City Name :")
// let cityLength = userCity.length
// console.log("Length of your city is : " + cityLength)

// ------- Slicing First Character ------

// let firstChar = userCity.slice(0,1)
// console.log(firstChar)

// ------ Slicing Some Characters -------

// let someChar = userCity.slice(2,6)
// console.log(someChar)

// ------- Slicing All Characters From A Specific Point -------

// let someChar = userCity.slice(3)            // Takes all characters from index 3 to end
// console.log(someChar)

// ------------ Capitalizing First Character and De-Capitalizing Other Characters : ------------------

// let userCity = prompt("Enter Your City Name :")
// let firstChar = userCity.slice(0,1)
// let otherChars = userCity.slice(1)
// firstChar = firstChar.toUpperCase();
// otherChars = otherChars.toLowerCase()
// let cappedCity = firstChar + otherChars;
// console.log(firstChar + otherChars)

// ------------------ Making Abbreviations Of Months : -----------------

// let month = prompt("Enter Any Month Of The Year :")
// let monthAbbreviation;
// let monthLength = month.length
// // console.log("The length of " + 'month' + " is " + 'monthLength')
// if(monthLength > 3){
//     monthAbbreviation = month.slice(0,3)
// }
// console.log(`The Abbreviation of the '${month}' is '${monthAbbreviation}'`)

// ----------------- Checking Double Spaces : ----------------

// let text = prompt("Enter some text :");
// let spaceFound = false;

// if (text === null || text.trim() === "" || text === undefined) {
//   console.log("Please Enter Some Text!");
// }
// else {
//   for (let i = 0; i < text.length ; i++) {
//     if (text.slice(i, i + 2) === "  ") {
//       console.log("Double Spaces Found!");
//       spaceFound = true;
//       break;
//     }
// }
// if (spaceFound === false) {
//     console.log("No Double Spaces Found!");
//   }
// }

// -------- Working Of "text.slice(i, i + 2)" : ---------

// text.slice(start, end) ek substring nikalta hai.
// Yahan i se lekar i + 2 tak ka chhota string banta hai (2 characters ek saath).

// Example: Agar text "Hello  World" hai:

// i = 0 → "He"
// i = 1 → "el"
// i = 2 → "ll"
// i = 3 → "lo"
// i = 4 → "o "       (Yahan space bhi aayega)
// i = 5 → "  "       (Do spaces ek saath)

// --------------------------------------------

// Detecting Space (Only At First Place) :

// let text = prompt("Enter some text :");
// let found = false;

// // Agar user ne kuch bhi enter nahi kiya (ya sirf spaces diye toh) :

// if (text.trim().length === 0) {
//   console.log("Kuch Enter Nahi Kiya gaya!");
//   console.log("Please Enter Some Text!");
// } else {
//   // Text ko spaces par todte hain:
//   let parts = text.split(" ");       // [text.split(" ")] Ye Text Ko Break Karta Hai Aur Un Ka Aik Array Bnata Hai.

//   for (let i = 0; i < parts.length; i++) {
//     if (parts[i] === "" && parts[i - 1] !== "") {
//       let wordBefore = parts[i - 1] || "(start)";
//       let wordAfter = parts[i + 1] || "(end)";

//       console.log(
//         `Aap nay '${wordBefore}' aur '${wordAfter}' kay beech mein Extra Space day diya hai!`
//       );
//       found = true;
//         break;               // yahan loop ruk jaayega
//     }
//   }

//   if (found === false) {
//     console.log("Aap nay kisi bhi jaga extra space nahi diya.");
//   }
// }

// ------------------------------------------------

// // Detecting Double Spacing With Different Approach :

// let text = prompt("Enter some text :").trim();   // User se input mangta hai aur trim shuru/ending
//                                                               // spaces hata deta hai.
// let found = false;

// if (text.length === 0) {

//     // Agar user ne kuch bhi enter nahi kiya (ya sirf spaces diye) toh direct ye message:
//     console.log("Please Enter Some Text!");
// }
// else {
//     let parts = text.split(" ");                 // Text ko spaces mein break karay ga.

//     for (let i = 0; i < parts.length; i++) {
//         if (parts[i] === "") {

//             // Example :

//             // Input : "Hello  World"

//             // Split → ["Hello", "", "World"]

//             // "Hello" → Pehla word,
//             //   ""  → Pehlay space ne aik cut lagaya aur doosray space ne phir se cut lagaya,
//             //           ekin beech mein koi character nahi tha toh aik Empty String ban gayi.
//             // "World" → Agla word.

//             // Empty string ka matlab hai double space tha :

//             let wordBefore = parts[i - 1] || "(start)";     // Agar pehla word na ho toh 'start' print karo,
//             let wordAfter = parts[i + 1] || "(end)";        // Agar agla word na ho toh 'end' print karo.

//             console.log(`Aap nay "${wordBefore}" aur "${wordAfter}" kay beech mein Double Space day diya hai`);
//             found = true;
//             break;
//         }
//     }
//     if (found === false || !found) {
//         // Agar loop ke baad bhi koi Empty String na milay :
//         console.log("Koi Double Space nahi mila.");
//     }
// }

// ----------------------------------

// -------------- Best , Easy , Simple and Most Efficient Way To Find Extra Spacing ----------

// let text = prompt("Enter some text");

// if (!text || text.trim().length === 0) {
//     alert("Please Enter Some Text!");
// }
// else {
//   text = text.trim();
//   if (text.includes("  ") || text.includes("   ") || text.includes("    ") || text.includes("     ") ) {
//     alert("Extra Spacing Found!");
//   }
//   else {
//     alert("No Extra Spacing Found!");
//   }
// }

// ---------------------------------------------------------------------------------------------------------------

// let warName = "World War II"
// let newWarName = warName.slice(0,12)
// "OR"
// let newWarName = warName.slice(0)
// console.log(newWarName)

// --------------------------

// let  warName = "World War II";

// for (i = 0 ; i < warName.length; i++){

//     console.log(warName[i])
// }

// --------------------------

// let warName = "World War II";
// for (i = 0; i < warName.length; i++) {
//     if (warName.slice(i) === "World War II"){
//         console.log("The Second World War")
//     }
// }

// Iss code mein "i" ki value her step per increase ho rahii hai , aur condition "12" dafa check ho rahii hai lekin 
// sirf pehli dafa he condition true ho rahii hai , iss liye console sirf sik dafa he chal rha hai ...

// "i" ki value change honay say conditin kesay false ho rahii hai , 
//    neechay wala code is baat ko explain kar rha hai :

// let warName = "World War II";
// for (i = 0; i < warName.length; i++) {
//     console.log("i =", i, "| slice(i) =", warName.slice(i));
// }

// -----------------------

// let warName = "World War II";
// for (i = 0; i < warName.length; i++) {
//     if (warName.slice(0) === "World War II"){ 
//         console.log("The Second World War")
//     }
// }

// Agar hum slice mein "i" ki jaga "0" dein gay toh aik he condition baar baar check ho gii , aur "0" mein her baar 
//                  "World War II" he aaye ga , iss liye condition kabhi false nahi ho gii , 
//                                 aur console "12" dafa print ho jaaye ga ...  

// ------------------------------------

