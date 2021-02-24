// TO DO 
// in order of importance
// write tests
// fix email links
// clean up HTML templates some - fix styling, maybe remove columns, let each card take full width - for simplicitys sake. 
// add validation for name, email, and ID's 
  // ID's should only take # inputs, names only strings, emails should be formatted in imanemail@email.com

// post MVP:
// add validation for name, email, ID


const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const inquirer = require('inquirer');
const fs = require('fs');

// i don't remember adding this..not sure if i need or if this is a live server thing?
// const { create } = require("domain");

const employee = new Employee();

// const theTeam = [];
const teamOBJ = {
  managers: [],
  engineers: [],
  interns: []
}

let manager;

// ON PAGE LOAD - ASKS FOR MANAGER INFO 1ST, THERE IS THE OPTION TO ADD MORE MANAGERS
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
        name: 'employeeId',
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
      let manager = new Manager(answers.managername, answers.employeeId, answers.email, answers.office)
      teamOBJ.managers.push(manager);
      newMember();
    })
    .catch(function (err) {
      console.log(err);
    })
}

// ================================================================================================================================
// after the 'maketeam' function runs, newMember runs - asks what type of employee user would like to add next, then prompts based off of that
// ================================================================================================================================
// if else statement did not work here - switch statement did... why?
function newMember() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'typeEmployee',
      message: 'What type of employee would you like to add?',
      choices: ['Engineer', 'Intern', 'Manager', 'Thats everyone!']
    },
    //    Switch statement works, changed 'employee-type' to 'typeEmployee', program didn't like "answers.employee-type"
  ]).then((answers) => {
    switch (answers.typeEmployee) {
      case "Engineer":
        newEngineer();
        break;
      case "Intern":
        newIntern();
        break;
        case "Manager":
          makeTeam();
          break;
      case "Thats everyone!":
        makeHTML();
        break;
    }
  })
}

// ================================================================
// function/prompts for adding an engineer
// ================================================================
newEngineer = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'engineername',
        message: 'Please enter Engineers name',
      },
      {
        type: 'input',
        name: 'employeeId',
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
      let engineer = new Engineer(answers.engineername, answers.employeeId, answers.engineeremail, answers.github)
      teamOBJ.engineers.push(engineer);
      newMember();
    })
    .catch(function (err) {
      console.log(err);
    })
}
// ================================================================
// function/prompts for adding a new intern
// ================================================================

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
        name: 'employeeId',
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
      let intern = new Intern(answers.internname, answers.employeeId, answers.internemail, answers.school)
      teamOBJ.interns.push(intern);
      newMember();
    })
    .catch(function (err) {
      console.log(err);
    })
}


// ================================================================
// upon app load, app will prompt user for "Manager Info" then execute based on inputs
// ================================================================
makeTeam()


// ================================================================
// Start of HTML file - need to fix styling
// ================================================================

const createTeam = () =>
  // INSERT HTML FILE HERE 
  `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
    <title>Employee Cards</title>
  </head>
  
  <body>
    <section class="hero is-small is-primary mb-3">
      <div class="hero-body">
        <h1 class="title has-text-centered">
          My Team
        </h1>
      </div>
    </section>
  
  
    <div class="columns is-centered has-text-centered">
      <!-- MANAGER -->
      <div class="column is-two-thirds has-text-centered is-centered">
        <div class="card is-one-third has-text-centered ">
  
   ${createManagerCollection()}
        </div>
      </div>
    </div>
      <!-- ENGINEER -->
    <div class="columns has-text-centered is-centered">
      <div class="column is-one-third">
      ${createEngineerCollection()}
      </div>
  
      <!-- INTERN -->
      <div class="column is-one-third">
        <div class="card is-one-third has-text-centered ">
    ${createInternCollection()}
         </div>
     </div>
    </div>
  
  </body>
  
  </html>`

  // FUNCTION FOR MAKING FILE 
const makeHTML = () => {
  // console.log(teamOBJ)
  // teamOBJ.managers.forEach(manager => {
  //   console.log(createManagerCard(manager))
  // })
  fs.writeFile('./final/main.html', createTeam(), (err) => {
    err ? console.log(err, "Something went wrong :(") : console.log('Team created - check *final* folder to see the finished product. ')
  })
}

// ================================================================
// functions for creating 'manager cards'
// ================================================================
function createManagerCard(manager) {
  return `<div class="card is-one-third has-text-centered ">
   
  <div class="card-content">
    <div class="media">
      <div class="media-left">
      </div>
      <div class="media-content">
        <p class="title is-4">Manager <i class="fas fa-briefcase"></i></p>
        <p class="subtitle is-6">${manager.name}</p>
      </div>
    </div>
  
    <div class="content">
      <p>Employee ID: ${manager.id}</p>
      <a target="_blank" href="mailto:${manager.email}">${manager.email}</a>
      <p>Office Number: ${manager.office}</p>
    </div>
  </div>
  </div>`
}
// ================================================================
// iterate over each array in teamOBJ, create an 'managercard' for EACH manager. This allows a user to add more than 1 manager if applicable 
// ================================================================

function createManagerCollection(){
  let managerCollection = "";
  teamOBJ.managers.forEach(manager => {
    managerCollection += createManagerCard(manager);
  })
  return managerCollection;
}

// ================================================================
// functions for creating 'engineer cards'
// ================================================================

function createEngineerCard(engineer) {
  return `
  <div class="card is-one-third has-text-centered ">

    <div class="card-content">
      <div class="media">
        <div class="media-left">
        </div>
        <div class="media-content">
          <p class="title is-4">Engineer <i class="fas fa-glasses"></i></p>
          <p class="subtitle is-6">${engineer.name}</p>
        </div>
      </div>

      <div class="content">
        <p>Employee ID: ${engineer.id}</p>
        <a target="_blank" href="mailto:${engineer.email}">${engineer.email}</a>
        <p><a target="_blank" href="https://github.com/${engineer.github}">Github</a></p>
      </div>
    </div>
  </div>`
}
// ================================================================
// iterate over each array in teamOBJ, create an 'engineercard' for EACH engineer. 
// ================================================================
function createEngineerCollection(){
  let engineerCollection = "";
  teamOBJ.engineers.forEach(engineer => {
    engineerCollection += createEngineerCard(engineer);
  })
  return engineerCollection;
}

// ================================================================
// functions for creating 'intern cards'
// ================================================================
function createInternCard(intern) {
  return `<div class="card is-one-third has-text-centered ">
  
  <div class="card-content">
    <div class="media">
      <div class="media-left">
      </div>
      <div class="media-content">
        <p class="title is-4">Intern <i class="fas fa-user-graduate"></i></p>
        <p class="subtitle is-6">${intern.name}</p>
      </div>
    </div>

    <div class="content">
    <p>Intern ID: ${intern.id}</p>
      <a target="_blank" href="mailto:${intern.email}">${intern.email}</a>
      <p>School: ${intern.school}</p>
      <br>

    </div>
  </div>
</div>
</div>`
}
// ================================================================
// iterate over each array in teamOBJ, create an 'interncard' for EACH intern. 
// ================================================================

function createInternCollection(){
  let internCollection = "";
  teamOBJ.interns.forEach(intern => {
    internCollection += createInternCard(intern);
  })
  return internCollection;
}
// function to create manager card in for each
// 


// code for creating HTML file all broken - split HTML into different files, trying a different way 

// HTML file is being made now, BUT - manager name is returning 'undefined'. 
// if i change it to ${answer.managername} it breaks
// ${manager.name} shows - 'Manager' 

