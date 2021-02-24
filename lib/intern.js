const inquirer = require('inquirer');
const Employee = require('./employee');


class Intern extends Employee{
    // use a constructor instead of this.name = name; this.type = type;, etc. 
    constructor (name, id, email, school) {
        super(name, id, email)
        this.school = school;
        console.log("name = " + this.name)
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
    getSchool(){
        return this.school;
    }
    getPositon(){
        return Intern.name;
    }
}
// exporting employee class
module.exports = Intern;