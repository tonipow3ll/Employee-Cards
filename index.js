
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const inquirer = require('inquirer');
const fs = require('fs');

const employee = new Employee();

const theTeam = [];

makeTeam = () => {
    inquirer
     .prompt([
     {
         type: 'input',
         name: 'name',
         message: 'Please enter Managers name',
     },
     {
         type: 'input',
         name: 'employee-id',
         message: 'Please enter this Managers ID',
     },
     {
         type: 'input',
         name: 'employee-id',
         message: 'Please enter this Managers email',
     },
     {
         type: 'list',
         name: 'employee-type',
         message: 'What type of employee is this?',
         choices: ['Engineer', 'Intern']
    }
    ])
    .then((answers) => {
        let manager = new Manager(answers.name, answers.id, answers.email, answers.office)
        theTeam.push(manager)
    })
    .catch(function(err){
        console.log(err);
    })
}
