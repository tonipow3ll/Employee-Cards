// write this in a class approach, vs a function approach

// class = keyword, employee = name of object. 
// this is a class, object, named employee. <== say this outloud. 
const { prompts } = require('inquirer');
const inquirer = require('inquirer');

class Employee {
    // use a constructor instead of this.name = name; this.type = type;, etc. 
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
     //   console.log("name = " + this.name)
    }
// call your getters
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getPosition(){
        return Employee.name;
    }
 }

//  inquirer
//  .prompt([
//  {
//      type: 'input',
//      name: 'name',
//      message: 'Please enter employees name',
//  },
//  {
//      type: 'input',
//      name: 'employee-id',
//      message: 'Please enter this employees ID',
//  },
//  {
//      type: 'input',
//      name: 'employee-id',
//      message: 'Please enter this employees email',
//  },
//  {
//      type: 'list',
//      name: 'employee-type',
//      message: 'What type of employee is this?',
//      choices: ['Manager', 'Engineer', 'Intern']
// }
// ])
// .then((answers) => {
//  switch (answers) {
//      case 'Manager':
//         Employee = Manager()
//          break;
//      case 'Engineer':
//          Employee = Engineer()
//          break;
//      case 'Intern':
//          Employee = Intern()
//          break;
//  }
// })

// Manager = () => {
//     inquirer
//         .prompt ([
//             {
//                 type: 'input',
//                 name:'office',
//                 message: 'Please enter this managers office #'
//             }
//         ])
// }

// exporting employee class
module.exports = Employee;