//tostring(), join(), pop(), push(), shift(), unshift(),delete(),concat(),splice(),slice()



//tostring() = Converts array to the string ,
// join() = applies * specialcharacter replacing comma ,
// pop() = remove the last element from array 
// push() =Adds the last element to the array 
// shift() =remove the first element from the array
// unshift()=Adds the element to start of array
// delete()=Deletes the element from the array
//concat()=Joins two or more arrays
//splice()=Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
//slice()=Returns selected elements in an array as a new array object.  
//sort()=Sorts the elements of an array in place and returns the sorted array.
//reverse()=Reverses the order of the elements in an array in place. The first array element becomes the last, and the last array element becomes the first.

let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits.sort());

// fruits.slice(2);
// console.log(fruits.slice(2));

console.log(fruits.length);
console.log("Original order:" +fruits);
fruits.reverse();
console.log("Reverse Order:"+fruits);
// fruits.slice(1,3);
// console.log(fruits.slice(1,3));


// console.log(fruits.toString());
// console.log(fruits.join(" ^ "));
// console.log(fruits.pop());
// console.log(fruits);
// console.log( fruits.pop(2));

// fruits.push("Kiwi");
// console.log(fruits);

// fruits.push("Lemon");       
// console.log(fruits);    

// console.log(fruits.length)

// console.log(fruits.shift())
// console.log(fruits);

// fruits.unshift("Pineapple");
// console.log(fruits);

// let cars = ["BMW", "Volvo", "Audi", "Toyota"];
// let fruits2 = ["Banana", "Orange", "Apple", "Mango"];
// // cars.concat(fruits2);
// //  console.log(cars.concat(fruits2));
// //  let names = ["John", "Doe", "Smith", "Jane", "Brown"];
// // names.concat(cars, fruits2);
// console.log(names.concat(cars, fruits2));
