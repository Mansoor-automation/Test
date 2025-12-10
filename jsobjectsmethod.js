let person =
{
    firstname : "kate",
    lastname : "winslet",
    age : 30,
    city : "newyork",
    salary : 70000,
    bonus: function()  {
        return this.salary * 0.10;
    }

};

console.log(person.firstname);
console.log(person.bonus());