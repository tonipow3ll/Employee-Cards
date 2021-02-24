// write this in a class approach, vs a function approach

// class = keyword, employee = name of object. 
// this is a class, object, named employee. <== say this outloud. 
// const { prompts } = require('inquirer');
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

// exporting employee class
module.exports = Employee;