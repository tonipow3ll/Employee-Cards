// write this in a class approach, vs a function approach

// class = keyword, employee = name of object. 
// this is a class, object, named employee. <== say this outloud. 
const inquirer = require('inquirer');

class Employee {
    // use a constructor instead of this.name = name; this.type = type;, etc. 
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
     //   console.log("name = " + this.name)
    }
// call your getter
    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
 }

 inquirer
 .prompt([
 {
     type: 'input',
     name: 'name',
     message: 'Please enter employees name',
 },
 {
     type: 'input',
     name: 'employee-id',
     message: 'Please enter this employees ID',
 },
 {
     type: 'input',
     name: 'employee-id',
     message: 'Please enter this employees email',
 },
 {
     type: 'list',
     name: 'employee-type',
     message: 'What type of employee is this?',
     choices: ['Manager', 'Engineer', 'Intern']
}
])
// .then((choices) => {
//  switch (choices) {
//      case 'Manager':
//          Employee = Manager()
//          break;
//      case 'Engineer':
//          Employee = Engineer()
//          break;
//      case 'Intern':
//          Employee = Intern();
//  }
// })



// exporting employee class
module.exports = Employee;