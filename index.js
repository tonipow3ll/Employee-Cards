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
         name: 'managername',
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
                    case "Thats everyone!":
                    makeHTML();
                    break;
            }
        })
    }
        

newEngineer = () => {
    inquirer
     .prompt([
     {
         type: 'input',
         name: 'Engineername',
         message: 'Please enter Engineers name',
     },
     {
         type: 'input',
         name: 'employee-id',
         message: 'Please enter this Engineers ID',
     },
     {
         type: 'input',
         name: 'engineeremail',
         message: 'Please enter this Engineers email',
     },
     {
        type: 'input',
        name: 'github',
        message: 'Please enter this Engineers Github username',
    }
    ])
    // can i change the below to promise.then ?? , promise.catch
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
                name: 'internname',
                message: "What is this interns name?"
            },
            {
                type: 'input',
                name: 'employee-id',
                message: "What is this interns ID #?"
            },
            {
                type: 'input',
                name: 'internemail',
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
    


// upon app load, app will prompt user for "Manger Info" then execute based on inputs
makeTeam()
// code for creating HTML file 

// BELOW CODE AND WRITE FILE CODE CURRENTLY BREAKS - APP QUITS BEFORE PROMPTS ARE ANSWERED 
// const createFinalTeam = createTeam(answers);

const createTeam = (answers) => 
 // INSERT HTML FILE HERE 
 `<!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
     <title>Employee Cards</title>
 </head>
 <body>
     <section class="hero is-small is-primary mb-3">
         <div class="hero-body">
           <h1 class="title has-text-centered">
             My Team
           </h1>
           <!-- <p class="subtitle">
             Small subtitle
           </p> -->
         </div>
       </section>
 
 
     <div class="columns has-text-centered">
       <!-- MANAGER -->
         <div class="column is-one-third">
           
 
             <div class="card is-one-third has-text-centered ">
 
                 <div class="card-content">
                   <div class="media">
                     <div class="media-left">
                     </div>
                     <div class="media-content">
                       <p class="title is-4">Manager</p>
                       <p class="subtitle is-6"></p>
                     </div>
                   </div>
               
                   <div class="content">
                     <a target="_blank" href="mailto: ">Email</a>
                     <p>Office Number: </p>
                   </div>
                 </div>
               </div>
           
         </div>
         <!-- ENGINEER -->
         <div class="column is-one-third">
           
             <div class="card is-one-third has-text-centered ">
                
                 <div class="card-content">
                   <div class="media">
                     <div class="media-left">
                     </div>
                     <div class="media-content">
                       <p class="title is-4">Engineer</p>
                       <p class="subtitle is-6">Name</p>
                     </div>
                   </div>
               
                   <div class="content">
                     <a target="_blank" href="mailto: ">Email</a>
                     <p><a target="_blank" href="https://github.com/tonipow3ll">Github</a></p>
                   </div>
                 </div>
               </div>
         </div>
 
         <!-- INTERN -->
         <div class="column is-one-third">
             <div class="card is-one-third has-text-centered ">
                
                 <div class="card-content">
                   <div class="media">
                     <div class="media-left">
                     </div>
                     <div class="media-content">
                       <p class="title is-4">Intern</p>
                       <p class="subtitle is-6">Name</p>
                     </div>
                   </div>
               
                   <div class="content">
                     <a target="_blank" href="mailto: ">Email</a>
                     <p>School</p>
                     <br>
                    
                   </div>
                 </div>
               </div>
         </div>
     </div>
     
 </body>
 </html>`


const makeHTML = () => { fs.writeFile('index.html', createTeam(), (err) => {
    err ? console.log(err, "Something went wrong :(") : console.log('Team created - check *FILE LOCATION* to see the final product. ')
    })
}
