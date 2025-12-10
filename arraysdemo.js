// let cars =["BMW","Volvo","Saab","Ford"];

// console.log(cars[2]);

// cars[3]="Swift";
// console.log(cars);

// let myarray = [158,"Mansoor",true,45.67];
// console.log(myarray);
// myarray[2]="Hello World";
// myarray[4]=false;

// console.log(myarray);

// //Objects in the array

// let person1 = {
//     firstname : "John",
//     lastname : "Doe",
//     age : 25    
// }
// let person2 = {
//     firstname : "Jane",
//     lastname : "Smith",
//     age : 30    
// }       

// let myarray2 =[person1,person2];
// console.log(myarray2);
// myarray2[1]= {
//     firstname : "Emily",
//     lastname : "Davis",
//     age : 28    
// }  ;
// console.log(myarray2);

let fruits =["Orange,","Apple","Mango","Banana"];

// for(let i=0;i<=fruits.length;i++)
// {
//     console.log(fruits[i]);
// }


console.log(fruits.length);
for(element of fruits)
{
    console.log(element);
}

console.log(typeof fruits);

console.log(Array.isArray(fruits));