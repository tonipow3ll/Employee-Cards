
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
// const inquirer = require('inquirer');
const fs = require('fs');

const employee = new Employee();

// inquirer
//     .prompt([
//     {
//         type: 'input',
//         name: 'name',
//         message: 'Please enter employees name',
//     },
//     {
//         type: 'input',
//         name: 'employee-id',
//         message: 'Please enter this employees ID',
//     },
//     {
//         type: 'input',
//         name: 'employee-id',
//         message: 'Please enter this employees email',
//     },
//     {
//         type: 'list',
//         name: 'employee-type',
//         message: 'What type of employee is this?',
//         choices: ['Manager', 'Engineer', 'Intern']
// }
// ]).then((choices) => {
//     // switch (choices) {
//     //     case 'Manager':
//     //         Employee = Manager()
//     //         break;
//     //     case 'Engineer':
//     //         Employee = Engineer()
//     //         break;
//     //     case 'Intern':
//     //         Employee = Intern();
//     // }
//     if (choices = 'Manager'){
//        const manager = new Manager();
//     } else if (choices = 'Engineer'){
//        const engineer = new Engineer();
//     } else if (choices = 'Intern'){
//        const intern = new Intern();
//     }

// })
