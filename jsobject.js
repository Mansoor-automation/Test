let employee = 
{
   
    name: "John Doe",
    age:25,
    department: "Sales",
    designation: "Sales Executive",
    salary: 50000,
}
console.log(employee.name);
console.log(employee['age']);

employee.shift ="Morning";
console.log(employee.shift);

employee.department = "QA Engineering";

console.log(employee.department);

delete employee.department;
console.log(employee.department);


console.log("-----*****Looping Objects*****-----");

for(let x in employee){

    // console.log(x);
    // console.log(employee[x]);
    console.log(x+ " : " +employee[x]);

}