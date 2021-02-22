//  Inquirer working as it should
// need to add HTML to this file, and export it to a folder (see created base in dist folder)
// write tests


const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const inquirer = require('inquirer');
const fs = require('fs');

const employee = new Employee();

const theTeam = [];

// calls on Managers information first - assuming there is only 1 manager. 
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
         name: 'email',
         message: 'Please enter this Managers email',
     },
     {
        type: 'input',
        name: 'office',
        message: 'Please enter this Managers office number',
    }
    ])
    .then((answers) => {
        let manager = new Manager(answers.name, answers.id, answers.email, answers.office)
        theTeam.push(manager);
        newMember();
    })
    .catch(function(err){
        console.log(err);
    })
}

// asks if you are adding a new Engineer, or new Intern - based on answer inquirer will prompt different questions. 
// if else statement did not work here - switch statement did... why?
 function newMember(){
   inquirer.prompt([
            {
                type: 'list',
                name: 'typeEmployee',
                message: 'What type of employee would you like to add?',
                choices: ['Engineer', 'Intern', 'Thats everyone!']
           }
        //    Switch statement works, changed 'employee-type' to 'typeEmployee', program didn't like "answers.employee-type"
        ]).then((answers) => {
            switch(answers.typeEmployee){
                case "Engineer":
                    newEngineer();
                    break;
                case "Intern":
                    newIntern();
                    break;
            }
        })
    }
        

newEngineer = () => {
    inquirer
     .prompt([
     {
         type: 'input',
         name: 'name',
         message: 'Please enter Engineers name',
     },
     {
         type: 'input',
         name: 'employee-id',
         message: 'Please enter this Engineers ID',
     },
     {
         type: 'input',
         name: 'email',
         message: 'Please enter this Engineers email',
     },
     {
        type: 'input',
        name: 'office',
        message: 'Please enter this Engineers Github username',
    }
    ])
    .then((answers) => {
        let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        theTeam.push(engineer);
        newMember();
    })
    .catch(function(err){
        console.log(err);
    })
}

    newIntern = () => {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is this interns name?"
            },
            {
                type: 'input',
                name: 'employee-id',
                message: "What is this interns ID #?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is this interns email?"
            },
            {
                type: 'input',
                name: 'school',
                message: "What is this interns School?"
            },
        ])
        .then((answers) => {
            let intern = new Intern(answers.name, answers.id, answers.email, answers.school)
            theTeam.push(intern);
            newMember();
        })
        .catch(function(err){
            console.log(err);
        })
    }
    



makeTeam()
// code for creating HTML file 
// const finalTeam = makeTeam(answers);

    // fs.writeFile('index.html', finalTeam, (err) => {
    //     err? console.log(err, "Something went wrong :(") : console.log('Team created - check *FILE LOCATION* to see the final product. ')
    // })

